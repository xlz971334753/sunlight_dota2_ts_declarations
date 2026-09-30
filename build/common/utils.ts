import path from 'path';
import prettier from 'prettier';
import wordwrap from 'wordwrap';
import fs from 'fs';
import { loadModifierComments } from './modifier-comments';

export const wrapDescription = (description: string, start = 0) =>
  wordwrap({ stop: 80, start })(description.replace(/\n/g, '\n\n'));

type ManualComments = Partial<
  Record<
    string,
    {
      description?: string;
      deprecated?: string;
      params?: Record<string, string>;
    }
  >
>;

let manual_comments_cache: ManualComments | undefined;
let modifier_comments_cache: Map<string, string> | undefined;

function load_json_optional<T>(file_path: string, fallback: T): T {
  if (!fs.existsSync(file_path)) return fallback;
  return JSON.parse(fs.readFileSync(file_path, 'utf8')) as T;
}

function get_manual_comments(): ManualComments {
  if (manual_comments_cache) return manual_comments_cache;
  manual_comments_cache = load_json_optional(
    path.resolve(__dirname, '../../config/manual_comments.json'),
    {},
  );
  return manual_comments_cache;
}

function get_modifier_comments(): Map<string, string> {
  if (modifier_comments_cache) return modifier_comments_cache;
  const explicit_path = process.env.MODIFIER_FUNCTION_REPORT;
  modifier_comments_cache = loadModifierComments(
    explicit_path
      ? path.resolve(explicit_path)
      : path.resolve(__dirname, '../../artifacts/modifier-functions.json'),
    Boolean(explicit_path),
  );
  return modifier_comments_cache;
}

export function resolve_comment(
  identifier: string,
  field: string,
  original?: string,
): string | undefined {
  const manual = get_manual_comments()[identifier];
  if (field === 'description') {
    const description = manual?.description || original;
    const binding = get_modifier_comments().get(identifier);
    return binding ? [description, binding].filter(Boolean).join('\n') : description;
  }

  if (manual) {
    if (field === 'deprecated' && manual.deprecated) return manual.deprecated;
    if (field.startsWith('param:') && manual.params) {
      const parameter_name = field.slice('param:'.length);
      const parameter_text = manual.params[parameter_name];
      if (parameter_text) return parameter_text;
    }
  }

  return original;
}

const formatJSDoc = (description: string) =>
  `/**\n${wrapDescription(description).replace(/^/gm, ' * ')}\n*/\n`;

const optionalDescription = (description?: string) =>
  description != null ? formatJSDoc(description) : '';

export const withDescription = (declaration: string, description?: string) =>
  optionalDescription(description) + declaration;

const prettierConfig: prettier.Options = {
  parser: 'typescript',
  ...prettier.resolveConfig.sync(
    path.resolve(__dirname, '../../packages/panorama-types/types/_.generated.d.ts'),
    { editorconfig: true },
  ),
};

interface EmitOptions {
  availability?: 'client' | 'server' | 'both';
}

export const emit = (content: string, { availability = 'both' }: EmitOptions = {}) => {
  content =
    (availability === 'both' ? '' : `// @validateApiUsageDefault ${availability}\n\n`) + content;

  // There is some instability in comment formatting
  content = prettier.format(prettier.format(content, prettierConfig), prettierConfig);

  return content;
};
