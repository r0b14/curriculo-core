import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const cliPath = join(repositoryRoot, 'src', 'cli.js');

function runCli(args) {
  return spawnSync(process.execPath, [cliPath, ...args], {
    cwd: repositoryRoot,
    encoding: 'utf8'
  });
}

test('exibe o guia canônico pela CLI', () => {
  const result = runCli(['guide']);

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /Guia canônico para criação de currículos/);
  assert.match(result.stdout, /Nunca invente ou infira cargo/);
});

test('gera pacote local de revisão pela CLI', () => {
  const temporaryDirectory = mkdtempSync(join(tmpdir(), 'curriculo-core-'));
  const outputPath = join(temporaryDirectory, 'pacote.md');

  try {
    const result = runCli([
      'assist',
      '--input', 'examples/curriculo.exemplo.json',
      '--job', 'examples/vaga.exemplo.txt',
      '--output', outputPath
    ]);

    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /nenhum dado foi enviado/);
    const contents = readFileSync(outputPath, 'utf8');
    assert.match(contents, /Pacote local de revisão de currículo/);
    assert.match(contents, /Organização fictícia/);
    assert.match(contents, /Não complete lacunas/);
  } finally {
    rmSync(temporaryDirectory, { recursive: true, force: true });
  }
});
