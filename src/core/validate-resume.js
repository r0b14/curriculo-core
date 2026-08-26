import { ResumeValidationError } from './errors.js';

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;

function requireString(issues, value, path) {
  if (!isNonEmptyString(value)) issues.push(`${path} deve ser um texto não vazio`);
}

function optionalString(issues, value, path) {
  if (value !== undefined && !isNonEmptyString(value)) issues.push(`${path} deve ser um texto não vazio quando informado`);
}

function stringList(issues, value, path, { required = false } = {}) {
  if (value === undefined && !required) return;
  if (!Array.isArray(value) || (required && value.length === 0)) {
    issues.push(`${path} deve ser uma lista${required ? ' não vazia' : ''}`);
    return;
  }
  value.forEach((item, index) => requireString(issues, item, `${path}[${index}]`));
}

function objectList(issues, value, path, validator) {
  if (value === undefined) return;
  if (!Array.isArray(value)) {
    issues.push(`${path} deve ser uma lista`);
    return;
  }
  value.forEach((item, index) => {
    if (!isObject(item)) issues.push(`${path}[${index}] deve ser um objeto`);
    else validator(item, `${path}[${index}]`);
  });
}

function validateBasics(issues, basics) {
  if (!isObject(basics)) {
    issues.push('basics deve ser um objeto');
    return;
  }
  requireString(issues, basics.name, 'basics.name');
  requireString(issues, basics.headline, 'basics.headline');
  for (const field of ['email', 'phone', 'location']) optionalString(issues, basics[field], `basics.${field}`);
  objectList(issues, basics.links, 'basics.links', (link, path) => {
    requireString(issues, link.label, `${path}.label`);
    requireString(issues, link.url, `${path}.url`);
    if (isNonEmptyString(link.url) && !/^https?:\/\//i.test(link.url)) {
      issues.push(`${path}.url deve começar com http:// ou https://`);
    }
  });
}

function validateResumeItem(issues, item, path, kind) {
  const titleField = kind === 'education' ? 'course' : kind === 'experience' ? 'role' : 'name';
  const ownerField = kind === 'education' ? 'institution' : kind === 'experience' ? 'organization' : undefined;
  requireString(issues, item[titleField], `${path}.${titleField}`);
  if (ownerField) requireString(issues, item[ownerField], `${path}.${ownerField}`);
  optionalString(issues, item.start, `${path}.start`);
  optionalString(issues, item.end, `${path}.end`);
  if (item.current !== undefined && typeof item.current !== 'boolean') {
    issues.push(`${path}.current deve ser booleano`);
  }
  optionalString(issues, item.description, `${path}.description`);
  stringList(issues, item.highlights, `${path}.highlights`);
  stringList(issues, item.tags, `${path}.tags`);
}

export function validateResume(input) {
  const issues = [];
  if (!isObject(input)) throw new ResumeValidationError(['a raiz deve ser um objeto JSON']);

  validateBasics(issues, input.basics);
  requireString(issues, input.summary, 'summary');
  optionalString(issues, input.locale, 'locale');
  if (input.locale !== undefined && !['pt-BR', 'en'].includes(input.locale)) {
    issues.push('locale deve ser pt-BR ou en');
  }
  stringList(issues, input.targetKeywords, 'targetKeywords');

  objectList(issues, input.skills, 'skills', (skill, path) => {
    requireString(issues, skill.category, `${path}.category`);
    stringList(issues, skill.items, `${path}.items`, { required: true });
    stringList(issues, skill.tags, `${path}.tags`);
  });
  objectList(issues, input.experience, 'experience', (item, path) => validateResumeItem(issues, item, path, 'experience'));
  objectList(issues, input.projects, 'projects', (item, path) => validateResumeItem(issues, item, path, 'project'));
  objectList(issues, input.education, 'education', (item, path) => validateResumeItem(issues, item, path, 'education'));
  objectList(issues, input.languages, 'languages', (language, path) => {
    requireString(issues, language.name, `${path}.name`);
    requireString(issues, language.level, `${path}.level`);
  });

  if (input.privacy !== undefined && !isObject(input.privacy)) issues.push('privacy deve ser um objeto');
  if (isObject(input.privacy)) {
    for (const field of ['showEmail', 'showPhone', 'showLocation']) {
      if (input.privacy[field] !== undefined && typeof input.privacy[field] !== 'boolean') {
        issues.push(`privacy.${field} deve ser booleano`);
      }
    }
  }

  if (input.options !== undefined && !isObject(input.options)) issues.push('options deve ser um objeto');
  if (isObject(input.options)) {
    if (input.options.primaryColor !== undefined && !/^[0-9A-Fa-f]{6}$/.test(input.options.primaryColor)) {
      issues.push('options.primaryColor deve conter seis dígitos hexadecimais, sem #');
    }
    for (const field of ['maxExperiences', 'maxProjects']) {
      const value = input.options[field];
      if (value !== undefined && (!Number.isInteger(value) || value < 0)) {
        issues.push(`options.${field} deve ser um inteiro maior ou igual a zero`);
      }
    }
  }

  if (issues.length) throw new ResumeValidationError(issues);
  return input;
}
