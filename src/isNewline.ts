export const RE_NEWLINE = /^\n+$/;

export function isNewline(char: string) {
  return RE_NEWLINE.test(char);
}
