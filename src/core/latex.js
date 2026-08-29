const TEXT_REPLACEMENTS = new Map([
  ['\\', '\\textbackslash{}'],
  ['{', '\\{'],
  ['}', '\\}'],
  ['$', '\\$'],
  ['&', '\\&'],
  ['#', '\\#'],
  ['%', '\\%'],
  ['_', '\\_'],
  ['~', '\\textasciitilde{}'],
  ['^', '\\textasciicircum{}']
]);

const URL_REPLACEMENTS = new Map([
  ['\\', '/'],
  ['%', '\\%'],
  ['#', '\\#'],
  ['{', '\\{'],
  ['}', '\\}']
]);

export function escapeLatex(value = '') {
  return String(value).replace(/[\\{}$&#%_~^]/g, (character) => TEXT_REPLACEMENTS.get(character));
}

export function escapeLatexUrl(value = '') {
  return String(value).replace(/[\\%#{}]/g, (character) => URL_REPLACEMENTS.get(character));
}

export function latexHref(url, label) {
  return `\\href{${escapeLatexUrl(url)}}{${escapeLatex(label)}}`;
}
