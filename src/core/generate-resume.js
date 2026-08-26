import { normalizeResume } from './normalize-resume.js';
import { renderLatex } from './render-latex.js';
import { validateResume } from './validate-resume.js';

export function generateResume(input) {
  validateResume(input);
  return renderLatex(normalizeResume(input));
}
