export const RE_WHITESPACE = /^\s+$/;

export function isWhitespace(char: string) {
  return RE_WHITESPACE.test(char);
}
