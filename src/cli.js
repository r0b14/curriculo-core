#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, basename, extname, resolve } from 'node:path';
import { generateResume } from './core/generate-resume.js';
import { validateResume } from './core/validate-resume.js';

const HELP = `Curriculo Core

Uso:
  curriculo-core validate --input <arquivo.json>
  curriculo-core generate --input <arquivo.json> --output <curriculo.tex> [--compile]

Opções:
  -i, --input     Arquivo JSON com os dados do currículo
  -o, --output    Destino do arquivo LaTeX
      --compile   Executa pdflatex após gerar o .tex
  -h, --help      Mostra esta ajuda
`;

function readArguments(argv) {
  const [command, ...args] = argv;
  const options = {};
  for (let index = 0; index < args.length; index += 1) {
    const current = args[index];
    if (current === '--compile') options.compile = true;
    else if (current === '--help' || current === '-h') options.help = true;
    else if (current === '--input' || current === '-i') options.input = args[++index];
    else if (current === '--output' || current === '-o') options.output = args[++index];
    else throw new Error(`Argumento desconhecido: ${current}`);
  }
  return { command, options };
}

async function readJson(path) {
  const contents = await readFile(path, 'utf8');
  try {
    return JSON.parse(contents);
  } catch (error) {
    throw new Error(`JSON inválido em ${path}: ${error.message}`);
  }
}

function compileLatex(outputPath) {
  const directory = dirname(outputPath);
  const file = basename(outputPath);
  const result = spawnSync('pdflatex', ['-interaction=nonstopmode', '-halt-on-error', file], {
    cwd: directory,
    encoding: 'utf8',
    stdio: 'pipe'
  });
  if (result.error?.code === 'ENOENT') throw new Error('pdflatex não foi encontrado. Instale uma distribuição LaTeX ou remova --compile.');
  if (result.status !== 0) throw new Error(`Falha ao compilar LaTeX:\n${result.stdout || result.stderr}`);
  return resolve(directory, `${basename(file, extname(file))}.pdf`);
}

async function main() {
  const { command, options } = readArguments(process.argv.slice(2));
  if (options.help || !command) {
    process.stdout.write(HELP);
    return;
  }
  if (!options.input) throw new Error('Informe --input <arquivo.json>.');
  const inputPath = resolve(options.input);
  const resume = await readJson(inputPath);

  if (command === 'validate') {
    validateResume(resume);
    process.stdout.write(`Dados válidos: ${inputPath}\n`);
    return;
  }
  if (command !== 'generate') throw new Error(`Comando desconhecido: ${command}`);
  if (!options.output) throw new Error('Informe --output <curriculo.tex>.');

  const outputPath = resolve(options.output);
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, generateResume(resume), 'utf8');
  process.stdout.write(`LaTeX gerado: ${outputPath}\n`);
  if (options.compile) process.stdout.write(`PDF gerado: ${compileLatex(outputPath)}\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
