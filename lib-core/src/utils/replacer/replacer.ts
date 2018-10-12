export const NO_WHITESPACES = /\s/g;
export const NO_WHITESPACES_AND_DASHES = /[\s-]/g;

export function removeWhitespaces(string) {
  return string.replace(NO_WHITESPACES, '');
}

export function removeWhitespacesAndDashes(string) {
  return string.replace(NO_WHITESPACES_AND_DASHES, '');
}
