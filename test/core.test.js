import test from 'node:test';
import assert from 'node:assert/strict';
import { generateResume } from '../src/core/generate-resume.js';
import { escapeLatex, escapeLatexUrl } from '../src/core/latex.js';
import { rankItems } from '../src/core/rank-items.js';
import { ResumeValidationError } from '../src/core/errors.js';

const minimalResume = {
  basics: { name: 'Pessoa Exemplo', headline: 'Desenvolvimento', email: 'pessoa@example.com', phone: '+55 00 0000-0000' },
  summary: 'Cria produtos digitais.',
  skills: [], experience: [], projects: [], education: [], languages: []
};

test('escapa caracteres reservados do LaTeX', () => {
  assert.equal(escapeLatex('R&D_100% #1'), 'R\\&D\\_100\\% \\#1');
});

test('escapa URLs LaTeX e neutraliza barras invertidas', () => {
  assert.equal(
    escapeLatexUrl('https://example.com\\{perfil}#cv%20final'),
    'https://example.com/\\{perfil\\}\\#cv\\%20final'
  );
});

test('oculta telefone por padrão e mantém e-mail', () => {
  const latex = generateResume(minimalResume);
  assert.match(latex, /pessoa@example\.com/);
  assert.doesNotMatch(latex, /0000-0000/);
});

test('respeita opções explícitas de privacidade', () => {
  const latex = generateResume({ ...minimalResume, privacy: { showEmail: false, showPhone: true } });
  assert.doesNotMatch(latex, /pessoa@example\.com/);
  assert.match(latex, /0000-0000/);
});

test('prioriza itens aderentes às palavras-chave sem desordenar empates', () => {
  const items = [
    { name: 'Suporte', tags: ['infra'] },
    { name: 'Interface', tags: ['frontend'] },
    { name: 'Design system', highlights: ['componentes frontend'] }
  ];
  assert.deepEqual(rankItems(items, ['frontend'], 2).map((item) => item.name), ['Interface', 'Design system']);
});

test('rejeita dados obrigatórios ausentes', () => {
  assert.throws(() => generateResume({ basics: {}, summary: '' }), ResumeValidationError);
});

test('rejeita locale e tipo de vínculo inválidos', () => {
  const invalid = {
    ...minimalResume,
    locale: 'pt',
    experience: [{ role: 'Cargo', organization: 'Empresa', current: 'sim' }]
  };
  assert.throws(() => generateResume(invalid), (error) => {
    assert.ok(error instanceof ResumeValidationError);
    assert.match(error.message, /locale deve ser pt-BR ou en/);
    assert.match(error.message, /current deve ser booleano/);
    return true;
  });
});
