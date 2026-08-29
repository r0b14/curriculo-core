import { useState } from "react";

const REPOSITORY_URL = "https://github.com/r0b14/curriculo-core";
const DOCUMENTATION_URL = `${REPOSITORY_URL}/tree/main/docs`;
const CONTRIBUTING_URL = `${REPOSITORY_URL}/blob/main/CONTRIBUTING.md`;

type IconProps = {
  className?: string;
};

const pipeline = [
  {
    step: "01",
    title: "Validar",
    code: "validateResume(input)",
    description: "Confere o contrato e retorna erros objetivos antes de gerar qualquer arquivo.",
  },
  {
    step: "02",
    title: "Normalizar",
    code: "normalizeResume(input)",
    description: "Aplica defaults de idioma, limites e privacidade — telefone oculto por padrão.",
  },
  {
    step: "03",
    title: "Priorizar",
    code: "rankItems(items, keywords)",
    description: "Reordena somente evidências existentes, sem criar competências, cargos ou métricas.",
  },
  {
    step: "04",
    title: "Renderizar",
    code: "renderLatex(resume)",
    description: "Produz LaTeX A4 simples, selecionável e pronto para pdfLaTeX.",
  },
];

const modules = [
  {
    path: "schema/",
    title: "Contrato JSON",
    description: "Schema público e versionável para integrar editores, APIs e automações.",
    href: `${REPOSITORY_URL}/tree/main/schema`,
    color: "sky",
  },
  {
    path: "src/core/",
    title: "Núcleo funcional",
    description: "Validação, privacidade, ranking, escape e renderer sem dependências de runtime.",
    href: `${REPOSITORY_URL}/tree/main/src/core`,
    color: "violet",
  },
  {
    path: "test/",
    title: "Testes nativos",
    description: "Casos de segurança LaTeX, defaults privados, ranking e entradas inválidas.",
    href: `${REPOSITORY_URL}/tree/main/test`,
    color: "lime",
  },
  {
    path: "docker/latex/",
    title: "PDF isolado",
    description: "Imagem opcional para compilar localmente sem instalar uma distribuição LaTeX.",
    href: `${REPOSITORY_URL}/tree/main/docker/latex`,
    color: "coral",
  },
];

const quickStart = `git clone ${REPOSITORY_URL}.git
cd curriculo-core
npm ci
npm run validate:example
npm run generate:example`;

function GitHubIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.23c-3.22.7-3.9-1.36-3.9-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.38.96.1-.75.4-1.26.74-1.55-2.57-.3-5.28-1.29-5.28-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.71 5.39-5.29 5.68.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4 10.5 3.5 3.5L16 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CopyIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="6.5" y="6.5" width="9" height="9" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13.5 6.5V5A1.5 1.5 0 0 0 12 3.5H5A1.5 1.5 0 0 0 3.5 5v7A1.5 1.5 0 0 0 5 13.5h1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function MenuIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Currículo Core — início">
      <span className="logo-mark" aria-hidden="true">
        <span>CC</span>
      </span>
      <span className="font-display text-[15px] font-extrabold tracking-[-0.025em] text-ink-950">
        currículo<span className="text-brand-core">.core</span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Arquitetura", href: "#arquitetura" },
    { label: "Repositório", href: "#repositorio" },
    { label: "Começar", href: "#comecar" },
    { label: "Contribuir", href: "#contribuir" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-default/70 bg-surface-canvas/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-5 lg:px-10">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[13px] font-semibold text-ink-600 transition-colors hover:text-ink-950">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden items-center gap-2 rounded-[10px] bg-ink-950 px-4 py-2.5 text-[13px] font-bold text-white transition-transform hover:-translate-y-0.5 md:flex"
          href={REPOSITORY_URL}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className="h-4 w-4" />
          Ver no GitHub
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-[10px] border border-border-default bg-white text-ink-800 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border-default bg-white px-5 py-4 md:hidden" aria-label="Navegação móvel">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-1">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-semibold text-ink-800 hover:bg-surface-subtle">
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border-default">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-orb hero-orb-left" aria-hidden="true" />
      <div className="hero-orb hero-orb-right" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[690px] max-w-[1240px] items-center gap-14 px-5 py-20 lg:grid-cols-[1.06fr_.94fr] lg:px-10 lg:py-24">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-core/20 bg-brand-core-soft/80 px-3.5 py-2 text-[12px] font-bold text-brand-core">
            <span className="h-2 w-2 rounded-full bg-brand-pulse-strong shadow-[0_0_0_4px_rgba(169,222,50,.18)]" />
            OPEN SOURCE · MIT · LOCAL-FIRST
          </div>

          <h1 className="font-display max-w-[720px] text-[clamp(43px,6.4vw,78px)] font-extrabold leading-[.98] tracking-[-0.055em] text-ink-950">
            Currículo honesto,
            <span className="relative mt-2 block w-fit text-brand-core">
              por construção.
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 420 12" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 8.5C105 2.5 265 3.5 418 7" fill="none" stroke="#C8F85A" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-10 max-w-[620px] text-[18px] leading-8 text-ink-600">
            Um núcleo Node.js que transforma dados JSON em LaTeX A4 claro, privado e legível por ATS — sem inventar fatos e sem exigir que seus dados saiam da máquina.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#comecar" className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-brand-core px-6 py-3.5 text-[14px] font-bold text-white shadow-[0_12px_30px_rgba(91,75,255,.24)] transition-all hover:-translate-y-0.5 hover:bg-brand-core-hover">
              Rodar localmente
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a href={DOCUMENTATION_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-border-strong bg-white px-6 py-3.5 text-[14px] font-bold text-ink-800 transition-all hover:-translate-y-0.5 hover:border-ink-400">
              Explorar documentação
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[12px] font-semibold text-ink-600">
            {[
              "Node.js 20+",
              "Zero dependências no core",
              "pt-BR e en",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-brand-pulse/40 text-ink-950">
                  <CheckIcon className="h-3 w-3" />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
          <div className="terminal-card">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-coral" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F7C64B]" />
                <span className="h-2.5 w-2.5 rounded-full bg-brand-pulse" />
              </div>
              <span className="font-mono text-[11px] text-[#73718A]">curriculo-core / main</span>
            </div>
            <div className="space-y-5 p-6 font-mono text-[12px] leading-6 sm:p-7 sm:text-[13px]">
              <div>
                <p><span className="text-brand-pulse">$</span> <span className="text-white">npm run validate:example</span></p>
                <p className="pl-4 text-[#77758D]">Dados válidos: examples/curriculo.exemplo.json</p>
              </div>
              <div>
                <p><span className="text-brand-pulse">$</span> <span className="text-white">npm run generate:example</span></p>
                <p className="pl-4 text-[#77758D]">LaTeX gerado: output/curriculo-exemplo.tex</p>
              </div>
              <div className="rounded-[10px] border border-brand-core/30 bg-brand-core/10 p-4">
                <p className="mb-2 text-[#9E98FF]">pipeline.complete</p>
                <div className="grid grid-cols-[auto_1fr] gap-x-3 text-[#A8A6B5]">
                  <span>privacy</span><span className="text-brand-pulse">phone:hidden</span>
                  <span>layout</span><span className="text-white">a4 · one-column</span>
                  <span>output</span><span className="text-white">selectable-text</span>
                </div>
              </div>
              <p className="flex items-center gap-2 text-[#77758D]"><span className="terminal-cursor" /> aguardando próximo comando</p>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 hidden rounded-[12px] border border-border-default bg-white px-4 py-3 shadow-elevated sm:flex sm:items-center sm:gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-brand-pulse/30 text-[18px]">{`{ }`}</span>
            <div>
              <p className="text-[11px] font-bold text-ink-950">JSON entra</p>
              <p className="text-[10px] text-ink-400">fatos preservados</p>
            </div>
          </div>
          <div className="absolute -right-3 -top-5 hidden rounded-[12px] border border-border-default bg-white px-4 py-3 shadow-elevated sm:flex sm:items-center sm:gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-[9px] bg-brand-sky/60 font-mono text-[15px] font-bold">PDF</span>
            <div>
              <p className="text-[11px] font-bold text-ink-950">PDF sai</p>
              <p className="text-[10px] text-ink-400">quando você quiser</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const items = [
    { number: "01", title: "Privado por padrão", text: "Geração local, telefone oculto e nenhum fallback silencioso para serviços remotos." },
    { number: "02", title: "ATS sem promessa vazia", text: "Uma coluna, texto selecionável e estrutura simples — sem prometer aprovação universal." },
    { number: "03", title: "Evidência, não ficção", text: "Palavras-chave priorizam o que já existe. O núcleo nunca completa sua história por conta própria." },
  ];

  return (
    <section className="bg-ink-950 py-7 text-white">
      <div className="mx-auto grid max-w-[1240px] divide-y divide-white/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
        {items.map((item) => (
          <article key={item.number} className="flex gap-4 py-7 md:px-7 md:first:pl-0 md:last:pr-0">
            <span className="font-mono text-[11px] text-brand-pulse">{item.number}</span>
            <div>
              <h2 className="font-display text-[15px] font-bold">{item.title}</h2>
              <p className="mt-2 text-[12px] leading-5 text-[#8C899D]">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="arquitetura" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">ARQUITETURA EXPLÍCITA</p>
            <h2 className="section-title mt-4">Um pipeline pequeno o bastante para você auditar.</h2>
          </div>
          <p className="max-w-[610px] text-[16px] leading-7 text-ink-600 lg:justify-self-end">
            Cada etapa tem uma responsabilidade única. O resultado é simples de testar, integrar e adaptar sem esconder decisões importantes em uma caixa-preta.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {pipeline.map((item, index) => (
            <article key={item.step} className="pipeline-card group">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-brand-core">STEP_{item.step}</span>
                {index < pipeline.length - 1 && <ArrowIcon className="hidden h-4 w-4 text-border-strong lg:block" />}
              </div>
              <h3 className="font-display text-[21px] font-bold tracking-[-0.02em] text-ink-950">{item.title}</h3>
              <code className="mt-3 block w-fit rounded-md bg-surface-subtle px-2 py-1 font-mono text-[10px] text-ink-600">{item.code}</code>
              <p className="mt-5 text-[13px] leading-6 text-ink-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RepositoryMap() {
  return (
    <section id="repositorio" className="border-y border-border-default bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1240px] px-5 lg:px-10">
        <div className="max-w-[700px]">
          <p className="eyebrow">REPOSITÓRIO NAVEGÁVEL</p>
          <h2 className="section-title mt-4">Abra a pasta certa. Entenda o projeto rápido.</h2>
          <p className="mt-5 text-[16px] leading-7 text-ink-600">Cada área mantém documentação ao lado do código. Menos arqueologia, mais contribuição.</p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {modules.map((module) => (
            <a key={module.path} href={module.href} target="_blank" rel="noreferrer" className={`module-card module-card-${module.color} group`}>
              <div className="flex items-start justify-between gap-6">
                <span className="rounded-md border border-current/10 bg-white/60 px-2.5 py-1 font-mono text-[11px] font-bold">{module.path}</span>
                <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
              <h3 className="mt-10 font-display text-[24px] font-bold tracking-[-0.03em]">{module.title}</h3>
              <p className="mt-3 max-w-md text-[13px] leading-6 opacity-70">{module.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  const [copied, setCopied] = useState(false);

  async function copyCommands() {
    await navigator.clipboard.writeText(quickStart);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="comecar" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] gap-14 px-5 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-10">
        <div>
          <p className="eyebrow">COMECE SEM CERIMÔNIA</p>
          <h2 className="section-title mt-4">Do clone ao primeiro `.tex` em cinco comandos.</h2>
          <p className="mt-6 text-[15px] leading-7 text-ink-600">
            Node.js valida e gera o documento. LaTeX é necessário somente se você também quiser compilar o PDF.
          </p>
          <div className="mt-8 space-y-3">
            {[
              "Exemplo fictício pronto para testar",
              "Sem instalação global do pacote",
              "Saídas pessoais ignoradas pelo Git",
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 text-[13px] font-semibold text-ink-800">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-pulse/35"><CheckIcon className="h-3.5 w-3.5" /></span>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[18px] border border-[#292737] bg-ink-950 shadow-elevated">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="font-mono text-[11px] text-[#7E7B91]">terminal</span>
            <button type="button" onClick={copyCommands} className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px] font-semibold text-[#AAA7B8] transition-colors hover:bg-white/10 hover:text-white" aria-label="Copiar comandos de instalação">
              {copied ? <CheckIcon className="h-3.5 w-3.5 text-brand-pulse" /> : <CopyIcon className="h-3.5 w-3.5" />}
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-[12px] leading-8 text-[#D7D5E1] sm:p-8 sm:text-[13px]">
            {quickStart.split("\n").map((line) => (
              <span key={line} className="block"><span className="select-none text-brand-pulse">$ </span>{line}</span>
            ))}
          </pre>
          <div className="flex flex-wrap gap-4 border-t border-white/10 bg-white/[.025] px-6 py-4 font-mono text-[10px] text-[#77758D] sm:px-8">
            <span>✓ JSON válido</span>
            <span>✓ testes locais</span>
            <span>✓ nenhum upload</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contribute() {
  return (
    <section id="contribuir" className="px-5 pb-24 lg:px-10 lg:pb-32">
      <div className="relative mx-auto max-w-[1160px] overflow-hidden rounded-[28px] bg-brand-core px-6 py-14 text-white shadow-[0_24px_70px_rgba(91,75,255,.2)] sm:px-12 lg:px-16 lg:py-20">
        <div className="contribute-grid absolute inset-0" aria-hidden="true" />
        <div className="absolute -right-12 -top-24 h-72 w-72 rounded-full bg-brand-pulse/20 blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-[710px]">
            <p className="font-mono text-[11px] font-bold tracking-[.13em] text-brand-pulse">PULL REQUESTS SÃO BEM-VINDOS</p>
            <h2 className="mt-4 font-display text-[clamp(32px,5vw,54px)] font-extrabold leading-[1.04] tracking-[-0.045em]">Código aberto fica melhor quando mais gente consegue entendê-lo.</h2>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-white/70">Comece pela documentação local, escolha uma mudança pequena e preserve o princípio central: priorizar evidências sem inventar histórias.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a href={CONTRIBUTING_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[11px] bg-brand-pulse px-5 py-3.5 text-[13px] font-bold text-ink-950 transition-transform hover:-translate-y-0.5">
              Guia de contribuição <ArrowIcon className="h-4 w-4" />
            </a>
            <a href={`${REPOSITORY_URL}/issues`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-[11px] border border-white/25 bg-white/10 px-5 py-3.5 text-[13px] font-bold text-white transition-colors hover:bg-white/15">
              Ver issues
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-default bg-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div>
          <Logo />
          <p className="mt-3 text-[12px] text-ink-400">Feito para currículos claros, privados e verificáveis.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-semibold text-ink-600">
          <a href={DOCUMENTATION_URL} target="_blank" rel="noreferrer" className="hover:text-brand-core">Documentação</a>
          <a href={`${REPOSITORY_URL}/blob/main/SECURITY.md`} target="_blank" rel="noreferrer" className="hover:text-brand-core">Segurança</a>
          <a href={`${REPOSITORY_URL}/blob/main/LICENSE`} target="_blank" rel="noreferrer" className="hover:text-brand-core">MIT License</a>
          <a href={REPOSITORY_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-brand-core"><GitHubIcon className="h-4 w-4" /> GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-surface-canvas">
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Header />
      <main id="main-content">
        <Hero />
        <Principles />
        <Architecture />
        <RepositoryMap />
        <QuickStart />
        <Contribute />
      </main>
      <Footer />
    </div>
  );
}
