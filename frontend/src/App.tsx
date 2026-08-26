import { useState, useRef, useCallback } from "react";
import Anthropic from "@anthropic-ai/sdk";

const NAV_LINKS = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Privacidade", href: "#privacidade" },
  { label: "Open source", href: "#open-source" },
];

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 group">
      <span className="flex items-center justify-center w-8 h-8">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="12" height="30" rx="3" stroke="#5B4BFF" strokeWidth="2" fill="none"/>
          <rect x="19" y="1" width="12" height="30" rx="3" stroke="#5B4BFF" strokeWidth="2" fill="none"/>
          <rect x="9" y="8" width="14" height="16" rx="2" fill="#5B4BFF"/>
          <rect x="9" y="4" width="14" height="16" rx="2" fill="#C8F85A"/>
        </svg>
      </span>
      <span className="font-display font-bold text-[17px] tracking-[-0.01em] text-ink-950 leading-none">
        <span style={{ fontWeight: 650 }}>Currículo</span>
        <span className="text-brand-core" style={{ fontWeight: 750 }}> Core</span>
      </span>
    </a>
  );
}

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-paper/90 backdrop-blur-md border-b border-border-default h-16 flex items-center">
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-950 hover:bg-surface-subtle rounded-[var(--radius-md)] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm font-medium text-ink-600 hover:text-ink-950 hover:bg-surface-subtle rounded-[var(--radius-md)] transition-colors duration-150 flex items-center gap-1.5"
          >
            <GitHubIcon />
            GitHub
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#como-funciona"
            className="px-4 py-2 text-sm font-medium text-ink-800 border border-border-default bg-surface-paper rounded-[var(--radius-md)] hover:border-border-strong hover:bg-surface-subtle transition-colors duration-150"
          >
            Ver como funciona
          </a>
          <a
            href="#editor"
            className="px-5 py-2 text-sm font-semibold text-white bg-brand-core rounded-[var(--radius-md)] hover:bg-brand-core-hover transition-colors duration-150 shadow-sm"
          >
            Criar meu currículo
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-[var(--radius-md)] text-ink-600 hover:bg-surface-subtle transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-surface-paper border-b border-border-default shadow-elevated px-6 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-ink-800 hover:bg-surface-subtle rounded-[var(--radius-md)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-border-default my-1" />
          <a
            href="#editor"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 text-sm font-semibold text-white bg-brand-core rounded-[var(--radius-md)] text-center hover:bg-brand-core-hover transition-colors"
          >
            Criar meu currículo
          </a>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 lg:pt-36 lg:pb-28 bg-surface-canvas">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 bg-brand-core-soft text-brand-core text-xs font-semibold px-3 py-1.5 rounded-[var(--radius-round)] w-fit" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Currículo local, claro e compatível com ATS
          </div>

          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-ink-950">
            Sua trajetória,<br />
            <span className="text-brand-core">pronta para avançar.</span>
          </h1>

          <p className="text-lg text-ink-600 leading-[1.7] max-w-[520px]">
            Crie, adapte para cada vaga e exporte um currículo profissional sem inventar experiências — e sem tirar seus dados do seu dispositivo.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#editor"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-white bg-brand-core rounded-[var(--radius-md)] hover:bg-brand-core-hover transition-colors shadow-sm"
            >
              Criar meu currículo
              <ArrowRightIcon />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium text-ink-800 border border-border-default bg-surface-paper rounded-[var(--radius-md)] hover:border-border-strong hover:bg-surface-subtle transition-colors"
            >
              Ver como funciona
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            {["Sem login obrigatório", "Dados locais", "PDF com texto selecionável"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-ink-400">
                <CheckCircleIcon className="text-brand-pulse-strong" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative w-full max-w-[420px]">
      <div
        className="bg-surface-paper rounded-[4px] p-6 shadow-preview border border-border-default"
        style={{ minHeight: 340 }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <div className="h-5 w-48 bg-ink-950 rounded-sm mb-1.5" />
            <div className="h-3 w-64 bg-ink-400/40 rounded-sm" />
          </div>
          <div className="h-px bg-border-default" />
          <div>
            <div className="h-3 w-20 bg-brand-core/40 rounded-sm mb-3 font-mono-custom" style={{ fontSize: 10 }} />
            <div className="flex flex-col gap-2">
              {[80, 72, 88, 60].map((w, i) => (
                <div key={i} className="h-2.5 rounded-sm bg-ink-400/20" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
          <div>
            <div className="h-3 w-28 bg-brand-core/40 rounded-sm mb-3" />
            <div className="flex flex-wrap gap-1.5">
              {["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"].map((tag) => (
                <span key={tag} className="text-[11px] font-medium px-2 py-0.5 bg-surface-subtle text-ink-600 rounded-[var(--radius-round)] border border-border-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="h-3 w-24 bg-brand-core/40 rounded-sm mb-3" />
            <div className="flex flex-col gap-2">
              {[75, 65].map((w, i) => (
                <div key={i} className="h-2.5 rounded-sm bg-ink-400/20" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* floating keyword tags */}
      <div className="absolute -top-3 -right-4 flex flex-col gap-2">
        <KeywordTag label="React ✓" type="found" />
        <KeywordTag label="TypeScript ✓" type="found" />
        <KeywordTag label="AWS" type="missing" />
      </div>

      {/* local badge */}
      <div className="absolute -bottom-3 left-4 flex items-center gap-1.5 bg-surface-paper border border-border-default rounded-[var(--radius-round)] px-3 py-1.5 shadow-card text-xs font-medium text-ink-600">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-pulse-strong inline-block" />
        Processado localmente
      </div>
    </div>
  );
}

function KeywordTag({ label, type }: { label: string; type: "found" | "partial" | "missing" }) {
  const styles = {
    found: "bg-[#E8F7F0] text-[#0C6844] border-[#16875B]/20",
    partial: "bg-[#FFF4DE] text-[#80500E] border-[#B66A08]/20",
    missing: "bg-[#FDECEF] text-[#A62734] border-[#D63C4A]/20",
  };
  return (
    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-[var(--radius-round)] border shadow-card whitespace-nowrap ${styles[type]}`}>
      {label}
    </span>
  );
}

function ProofBar() {
  const items = [
    { icon: <AtsIcon />, label: "Compatível com ATS", desc: "Texto selecionável, sem imagens no conteúdo" },
    { icon: <GlobeIcon />, label: "Português e inglês", desc: "Alterne o idioma do documento a qualquer hora" },
    { icon: <CodeIcon />, label: "Código aberto", desc: "MIT License — inspecione, contribua, adapte" },
  ];
  return (
    <section className="border-y border-border-default bg-surface-paper">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-8 grid md:grid-cols-3 gap-px bg-border-default">
        {items.map((item) => (
          <div key={item.label} className="bg-surface-paper px-8 py-6 flex items-start gap-4">
            <span className="text-brand-core mt-0.5 flex-shrink-0">{item.icon}</span>
            <div>
              <p className="text-[14px] font-semibold text-ink-950 mb-1">{item.label}</p>
              <p className="text-[13px] text-ink-600 leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Organize",
      desc: "Preencha sua trajetória de forma guiada. Perfil, resumo, experiência, projetos e formação em um só lugar — sem começar diante de uma tela vazia.",
      accent: "bg-brand-core-soft",
      color: "text-brand-core",
    },
    {
      num: "02",
      title: "Adapte",
      desc: "Cole a descrição da vaga e veja quais palavras-chave já estão no seu currículo, quais podem ganhar destaque e quais estão ausentes. Sem pontuação mágica.",
      accent: "bg-[#FFF4DE]",
      color: "text-[#B66A08]",
    },
    {
      num: "03",
      title: "Exporte",
      desc: "Baixe um PDF com texto selecionável, legível por pessoas e compatível com sistemas de triagem. Escolha o que aparece: e-mail, telefone e localização ficam no seu controle.",
      accent: "bg-[#E8F7F0]",
      color: "text-[#0C6844]",
    },
  ];
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-surface-canvas">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <p className="text-xs font-bold tracking-[0.08em] uppercase text-ink-400 mb-3">Como funciona</p>
          <h2 className="font-display text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.02em] text-ink-950 max-w-lg">
            Três etapas. Um currículo no ponto.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-surface-paper border border-border-default rounded-[var(--radius-xl)] p-7 flex flex-col gap-4 hover:border-border-strong transition-colors"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono-custom text-sm font-bold ${step.color} px-2.5 py-1 rounded-[var(--radius-sm)] ${step.accent}`}>
                  {step.num}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-ink-950 tracking-[-0.01em]">{step.title}</h3>
              <p className="text-[15px] text-ink-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeywordsSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-paper border-y border-border-default">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-5">
          <p className="text-xs font-bold tracking-[0.08em] uppercase text-ink-400">Aderência à vaga</p>
          <h2 className="font-display text-[clamp(26px,3.5vw,36px)] font-bold tracking-[-0.02em] text-ink-950">
            Mais aderência.<br />A mesma verdade.
          </h2>
          <p className="text-[16px] text-ink-600 leading-relaxed max-w-[480px]">
            O Core mostra quais termos da vaga já aparecem no seu currículo, quais podem ganhar mais destaque e quais estão ausentes — com evidências, sem invenção.
          </p>
          <ul className="flex flex-col gap-3 mt-2">
            {[
              { color: "bg-[#E8F7F0] text-[#0C6844]", label: "Encontradas", desc: "8 termos confirmados" },
              { color: "bg-[#FFF4DE] text-[#80500E]", label: "Podem ganhar destaque", desc: "3 termos presentes mas discretos" },
              { color: "bg-[#FDECEF] text-[#A62734]", label: "Ainda não aparecem", desc: "2 termos ausentes" },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-[var(--radius-round)] ${item.color}`}>{item.label}</span>
                <span className="text-sm text-ink-400">{item.desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-[13px] text-ink-400 mt-1 border-l-2 border-brand-pulse-strong pl-3 leading-snug">
            O Core reorganiza o que você informou.<br />Ele não cria experiências ou competências.
          </p>
        </div>

        <KeywordsDemo />
      </div>
    </section>
  );
}

function KeywordsDemo() {
  const found = ["React", "TypeScript", "REST APIs", "PostgreSQL", "Git", "Agile", "Jest", "CI/CD"];
  const partial = ["Node.js", "Docker", "Testes E2E"];
  const missing = ["AWS", "Kubernetes"];

  return (
    <div className="bg-surface-canvas rounded-[var(--radius-xl)] border border-border-default p-6 flex flex-col gap-5" style={{ boxShadow: "var(--shadow-card)" }}>
      <div className="flex items-center gap-2 mb-1">
        <span className="font-display text-[13px] font-semibold text-ink-800">Análise de palavras-chave</span>
        <span className="ml-auto text-xs text-ink-400 font-mono-custom">13 de 15</span>
      </div>
      <div>
        <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#0C6844] mb-2.5">Encontradas</p>
        <div className="flex flex-wrap gap-1.5">
          {found.map((t) => (
            <span key={t} className="text-[12px] font-medium px-2.5 py-1 rounded-[var(--radius-round)] bg-[#E8F7F0] text-[#0C6844] border border-[#16875B]/20">
              ✓ {t}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#80500E] mb-2.5">Podem ganhar destaque</p>
        <div className="flex flex-wrap gap-1.5">
          {partial.map((t) => (
            <span key={t} className="text-[12px] font-medium px-2.5 py-1 rounded-[var(--radius-round)] bg-[#FFF4DE] text-[#80500E] border border-[#B66A08]/20">
              ◉ {t}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#A62734] mb-2.5">Ainda não aparecem</p>
        <div className="flex flex-wrap gap-1.5">
          {missing.map((t) => (
            <span key={t} className="text-[12px] font-medium px-2.5 py-1 rounded-[var(--radius-round)] bg-[#FDECEF] text-[#A62734] border border-[#D63C4A]/20">
              − {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrivacySection() {
  const [toggles, setToggles] = useState({ email: true, telefone: false, localizacao: true });

  return (
    <section id="privacidade" className="py-20 lg:py-28 bg-ink-950">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-6">
          <p className="text-xs font-bold tracking-[0.08em] uppercase text-brand-pulse/70">Privacidade</p>
          <h2 className="font-display text-[clamp(26px,3.5vw,40px)] font-bold tracking-[-0.025em] text-white leading-tight">
            O controle continua sendo seu.
          </h2>
          <p className="text-[16px] text-[#B9B7C8] leading-relaxed max-w-[440px]">
            Seu currículo é processado localmente, no seu dispositivo. Nenhum dado é enviado para servidores ou compartilhado com terceiros.
          </p>
          <div className="flex flex-col gap-3 mt-2">
            {[
              "Dados ficam no seu dispositivo",
              "Sem conta, sem rastreamento",
              "Telefone oculto por padrão no PDF",
              "Código aberto e auditável",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[14px] text-[#B9B7C8]">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-pulse flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#201F2E] border border-[#343245] rounded-[var(--radius-xl)] p-6 flex flex-col gap-4">
          <p className="text-[13px] font-semibold text-[#B9B7C8] mb-1">Dados visíveis no PDF</p>
          {(["email", "telefone", "localizacao"] as const).map((key) => {
            const labels = { email: "E-mail", telefone: "Telefone", localizacao: "Localização" };
            const values = { email: "ana.costa@email.com", telefone: "(11) 91234-5678", localizacao: "São Paulo, SP" };
            const on = toggles[key];
            return (
              <div key={key} className="flex items-center justify-between py-3 border-b border-[#343245] last:border-0">
                <div>
                  <p className="text-[13px] font-medium text-white">{labels[key]}</p>
                  <p className="text-[12px] text-[#5D5B70] font-mono-custom mt-0.5">{values[key]}</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className={`text-[11px] font-semibold ${on ? "text-brand-pulse" : "text-[#5D5B70]"}`}>
                    {on ? "Visível" : "Oculto"}
                  </span>
                  <button
                    onClick={() => setToggles((t) => ({ ...t, [key]: !t[key] }))}
                    className={`relative w-10 h-5.5 rounded-[var(--radius-round)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-brand-core ${on ? "bg-brand-core" : "bg-[#343245]"}`}
                    style={{ height: 22, width: 40 }}
                    aria-label={`${on ? "Ocultar" : "Mostrar"} ${labels[key]} no PDF`}
                    aria-checked={on}
                    role="switch"
                  >
                    <span
                      className={`absolute top-0.5 w-4.5 h-4.5 rounded-full bg-white shadow-sm transition-transform duration-200 ${on ? "translate-x-[19px]" : "translate-x-0.5"}`}
                      style={{ width: 18, height: 18, top: 2, left: 2 }}
                    />
                  </button>
                </div>
              </div>
            );
          })}
          <p className="text-[12px] text-[#5D5B70] mt-1 leading-snug">
            Esses ajustes não apagam os dados do editor.
          </p>
        </div>
      </div>
    </section>
  );
}

function OpenSourceSection() {
  return (
    <section id="open-source" className="py-20 lg:py-28 bg-surface-canvas">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-paper border border-border-default rounded-[var(--radius-xl)] p-8 flex flex-col gap-5" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-[0.08em] uppercase text-ink-400 mb-2">Open source</p>
              <h3 className="font-display text-2xl font-bold tracking-[-0.015em] text-ink-950">Código aberto, licença MIT.</h3>
            </div>
            <span className="text-[11px] font-bold tracking-[0.06em] uppercase px-3 py-1.5 bg-brand-core-soft text-brand-core rounded-[var(--radius-round)] flex-shrink-0">MIT</span>
          </div>
          <p className="text-[15px] text-ink-600 leading-relaxed">
            O Currículo Core é um projeto aberto. Inspecione o código, contribua com melhorias ou adapte para o seu contexto. A arquitetura é simples: front-end estático, sem dependência de servidor.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Vite", "Tailwind CSS", "PDF local"].map((tech) => (
              <span key={tech} className="text-[12px] font-medium px-2.5 py-1 rounded-[var(--radius-sm)] bg-surface-subtle text-ink-600 font-mono-custom">
                {tech}
              </span>
            ))}
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-core hover:text-brand-core-hover transition-colors w-fit"
          >
            <GitHubIcon />
            Ver no GitHub
            <ArrowRightIcon />
          </a>
        </div>

        <div className="bg-brand-core-soft border border-brand-core/15 rounded-[var(--radius-xl)] p-7 flex flex-col gap-4 justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold tracking-[0.08em] uppercase text-brand-core/70">FAQ rápido</p>
            {[
              { q: "Preciso de conta?", a: "Não. O produto funciona sem login." },
              { q: "Meus dados ficam onde?", a: "No seu navegador, localmente." },
              { q: "O PDF é lido por ATS?", a: "Sim — texto selecionável, sem imagens." },
            ].map((item) => (
              <div key={item.q}>
                <p className="text-[13px] font-semibold text-ink-950 mb-0.5">{item.q}</p>
                <p className="text-[13px] text-ink-600">{item.a}</p>
              </div>
            ))}
          </div>
          <a href="#editor" className="text-[13px] font-semibold text-brand-core hover:text-brand-core-hover transition-colors">
            Ver todas as perguntas →
          </a>
        </div>
      </div>
    </section>
  );
}

function TextIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4h10M2 7h7M2 10h5" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="1" width="8" height="12" rx="1.5" />
      <path d="M8 1l2 2M8 1v2h2" />
      <path d="M4 7h4M4 9.5h2.5" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="2" width="12" height="10" rx="1.5" />
      <circle cx="5" cy="5.5" r="1.2" />
      <path d="M1 10l3.5-3.5 2.5 2.5 2-2 2.5 3" />
    </svg>
  );
}

function UploadCloudIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="animate-spin">
      <circle cx="8" cy="8" r="6" strokeOpacity="0.25" />
      <path d="M8 2a6 6 0 016 6" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1v3M8 12v3M1 8h3M12 8h3M3.22 3.22l2.12 2.12M10.66 10.66l2.12 2.12M3.22 12.78l2.12-2.12M10.66 5.34l2.12-2.12" />
    </svg>
  );
}

function ResetIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1.5 7.5a6 6 0 116 6" />
      <path d="M1.5 7.5V4M1.5 7.5H5" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C0392B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" />
      <path d="M8 5v3.5M8 11v.5" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="8" height="8" rx="1.5" />
      <path d="M9 4V2.5A1.5 1.5 0 007.5 1H2.5A1.5 1.5 0 001 2.5V7.5A1.5 1.5 0 002.5 9H4" />
    </svg>
  );
}

function DocumentStarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ink-400">
      <rect x="4" y="2" width="16" height="22" rx="2" />
      <path d="M8 8h10M8 13h6" />
      <path d="M14 18l1 2 2-3-3 1-1-2.5z" fill="currentColor" stroke="none" opacity="0.4" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 7s2.5-4.5 6-4.5S13 7 13 7s-2.5 4.5-6 4.5S1 7 1 7z" />
      <circle cx="7" cy="7" r="1.8" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 2l10 10M6 3.3A6.8 6.8 0 017 3c3.5 0 6 4 6 4a12 12 0 01-2.1 2.5M4.3 4.3A11.6 11.6 0 001 7s2.5 4 6 4a6.5 6.5 0 003.7-1.3" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 1L2 3v3.5c0 2.5 1.9 4.7 4.5 5.5C9.1 11.2 11 9 11 6.5V3L6.5 1z" />
    </svg>
  );
}

type InputMode = "text" | "pdf" | "image";
type GenState = "idle" | "generating" | "done" | "error";

function EditorPreviewSection() {
  const [apiKey, setApiKey] = useState("");
  const [apiKeyVisible, setApiKeyVisible] = useState(false);
  const [mode, setMode] = useState<InputMode>("text");
  const [jobText, setJobText] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [genState, setGenState] = useState<GenState>("idle");
  const [result, setResult] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const acceptTypes = mode === "pdf" ? ".pdf,application/pdf" : "image/*";

  const handleFileDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        resolve(dataUrl.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const generate = async () => {
    if (!apiKey.trim()) {
      setErrorMsg("Insira sua chave da API Anthropic para continuar.");
      setGenState("error");
      return;
    }
    const hasInput = mode === "text" ? jobText.trim().length > 20 : uploadedFile !== null;
    if (!hasInput) {
      setErrorMsg(mode === "text" ? "Cole o texto da vaga para continuar." : "Selecione um arquivo para continuar.");
      setGenState("error");
      return;
    }

    setGenState("generating");
    setResult("");
    setErrorMsg("");

    try {
      const client = new Anthropic({ apiKey: apiKey.trim(), dangerouslyAllowBrowser: true });

      const systemPrompt = `Você é um especialista em redação de currículos profissionais em português brasileiro.
Gere um currículo completo, compatível com ATS (Applicant Tracking System), baseado na descrição da vaga fornecida.
O currículo deve ser estruturado, profissional e otimizado para as palavras-chave da vaga.
Formato: use texto simples com seções claras (DADOS PESSOAIS, OBJETIVO, COMPETÊNCIAS, EXPERIÊNCIA PROFISSIONAL, FORMAÇÃO ACADÊMICA, IDIOMAS).
Crie conteúdo realista e profissional. Deixe placeholders como [Nome Completo], [Email], [Telefone], [LinkedIn] para dados pessoais.`;

      let userContent: Anthropic.MessageParam["content"];

      if (mode === "text") {
        userContent = `Analise esta vaga e gere um currículo completo e profissional em português adaptado para ela:\n\n${jobText}`;
      } else if (mode === "image" && uploadedFile) {
        const b64 = await toBase64(uploadedFile);
        const mimeType = uploadedFile.type as "image/jpeg" | "image/png" | "image/gif" | "image/webp";
        userContent = [
          {
            type: "image",
            source: { type: "base64", media_type: mimeType, data: b64 },
          },
          {
            type: "text",
            text: "Analise esta imagem de vaga de emprego e gere um currículo completo e profissional em português adaptado para ela.",
          },
        ];
      } else if (mode === "pdf" && uploadedFile) {
        const b64 = await toBase64(uploadedFile);
        userContent = [
          {
            type: "document",
            source: { type: "base64", media_type: "application/pdf", data: b64 },
          } as Anthropic.DocumentBlockParam,
          {
            type: "text",
            text: "Analise este PDF de vaga de emprego e gere um currículo completo e profissional em português adaptado para ele.",
          },
        ];
      } else {
        throw new Error("Modo inválido");
      }

      const stream = await client.messages.stream({
        model: "claude-opus-5",
        max_tokens: 4096,
        thinking: { type: "adaptive" },
        system: systemPrompt,
        messages: [{ role: "user", content: userContent }],
      });

      for await (const chunk of stream) {
        if (
          chunk.type === "content_block_delta" &&
          chunk.delta.type === "text_delta"
        ) {
          const textDelta = chunk.delta as { type: "text_delta"; text: string };
          setResult((prev) => prev + textDelta.text);
          if (resultRef.current) {
            resultRef.current.scrollTop = resultRef.current.scrollHeight;
          }
        }
      }

      setGenState("done");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro desconhecido";
      setErrorMsg(msg);
      setGenState("error");
    }
  };

  const reset = () => {
    setGenState("idle");
    setResult("");
    setErrorMsg("");
    setUploadedFile(null);
    setJobText("");
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
  };

  const MODES: { id: InputMode; label: string; icon: React.ReactNode }[] = [
    { id: "text", label: "Colar texto", icon: <TextIcon /> },
    { id: "pdf", label: "Subir PDF", icon: <PdfIcon /> },
    { id: "image", label: "Print da vaga", icon: <ImageIcon /> },
  ];

  return (
    <section id="editor" className="py-20 lg:py-28 bg-surface-subtle border-y border-border-default">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-[0.08em] uppercase text-ink-400 mb-3">Gerador por IA</p>
            <h2 className="font-display text-[clamp(26px,3.5vw,36px)] font-bold tracking-[-0.02em] text-ink-950 max-w-xl">
              Cole a vaga. Receba o currículo.
            </h2>
            <p className="text-[15px] text-ink-600 mt-2 max-w-lg leading-relaxed">
              A IA analisa a descrição da vaga e gera um currículo completo, com palavras-chave alinhadas e estrutura compatível com ATS.
            </p>
          </div>
          {/* API key input */}
          <div className="flex flex-col gap-1.5 min-w-[280px] max-w-[340px]">
            <label className="text-[12px] font-semibold text-ink-400 uppercase tracking-[0.06em]">
              Chave API Anthropic
            </label>
            <div className="relative">
              <input
                type={apiKeyVisible ? "text" : "password"}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-ant-..."
                className="w-full rounded-[var(--radius-md)] border border-border-default bg-surface-paper px-3.5 py-2.5 pr-10 text-[13px] font-mono-custom text-ink-950 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-core/25 focus:border-brand-core transition-colors"
              />
              <button
                type="button"
                onClick={() => setApiKeyVisible((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-600 transition-colors"
                aria-label={apiKeyVisible ? "Ocultar chave" : "Mostrar chave"}
              >
                {apiKeyVisible ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            <p className="text-[11px] text-ink-400">
              Sua chave é usada apenas localmente, nunca é enviada a servidores do Currículo Core.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Input panel */}
          <div className="bg-surface-paper border border-border-default rounded-[var(--radius-xl)] p-6 flex flex-col gap-5">
            {/* Mode tabs */}
            <div className="flex gap-1 bg-surface-subtle rounded-[var(--radius-md)] p-1">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  onClick={() => { setMode(m.id); setUploadedFile(null); }}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-[var(--radius-sm)] text-[13px] font-semibold transition-all duration-150 ${
                    mode === m.id
                      ? "bg-surface-paper text-brand-core shadow-card"
                      : "text-ink-400 hover:text-ink-600"
                  }`}
                >
                  {m.icon}
                  <span className="hidden sm:inline">{m.label}</span>
                </button>
              ))}
            </div>

            {/* Text mode */}
            {mode === "text" && (
              <div className="flex flex-col gap-2 flex-1">
                <label className="text-[13px] font-semibold text-ink-800">
                  Descrição da vaga
                </label>
                <textarea
                  value={jobText}
                  onChange={(e) => setJobText(e.target.value)}
                  className="flex-1 min-h-[280px] w-full rounded-[var(--radius-md)] border border-border-default bg-surface-canvas px-4 py-3 text-[14px] text-ink-950 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-core/25 focus:border-brand-core resize-none transition-colors leading-relaxed"
                  placeholder="Cole aqui o texto completo da vaga de emprego — título, requisitos, responsabilidades, empresa..."
                />
                <p className="text-[12px] text-ink-400">
                  {jobText.length} caracteres
                  {jobText.length > 20 && jobText.length < 100 && " — adicione mais detalhes para melhor resultado"}
                </p>
              </div>
            )}

            {/* Upload mode (PDF or image) */}
            {(mode === "pdf" || mode === "image") && (
              <div className="flex flex-col gap-3 flex-1">
                <label className="text-[13px] font-semibold text-ink-800">
                  {mode === "pdf" ? "Arquivo PDF da vaga" : "Imagem / print da vaga"}
                </label>
                {!uploadedFile ? (
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleFileDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`flex-1 min-h-[240px] flex flex-col items-center justify-center gap-4 rounded-[var(--radius-lg)] border-2 border-dashed cursor-pointer transition-all duration-150 ${
                      dragOver
                        ? "border-brand-core bg-brand-core-soft"
                        : "border-border-default bg-surface-canvas hover:border-brand-core/60 hover:bg-brand-core-soft/40"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-[var(--radius-md)] flex items-center justify-center ${dragOver ? "bg-brand-core text-white" : "bg-surface-subtle text-ink-400"}`}>
                      <UploadCloudIcon />
                    </div>
                    <div className="text-center">
                      <p className="text-[14px] font-semibold text-ink-800">
                        {dragOver ? "Solte o arquivo aqui" : "Arraste ou clique para selecionar"}
                      </p>
                      <p className="text-[12px] text-ink-400 mt-1">
                        {mode === "pdf" ? "Arquivo PDF — máx. 10 MB" : "JPG, PNG, WEBP — máx. 5 MB"}
                      </p>
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept={acceptTypes}
                      className="hidden"
                      onChange={handleFileInput}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-3 p-4 bg-brand-core-soft rounded-[var(--radius-md)] border border-brand-core/20">
                    <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-brand-core flex items-center justify-center text-white flex-shrink-0">
                      {mode === "pdf" ? <PdfIcon /> : <ImageIcon />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-ink-950 truncate">{uploadedFile.name}</p>
                      <p className="text-[12px] text-ink-400">{(uploadedFile.size / 1024).toFixed(0)} KB</p>
                    </div>
                    <button
                      onClick={() => setUploadedFile(null)}
                      className="text-ink-400 hover:text-ink-800 transition-colors flex-shrink-0"
                      aria-label="Remover arquivo"
                    >
                      <XIcon />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Error */}
            {genState === "error" && (
              <div className="flex items-start gap-2.5 p-3.5 bg-[#FFF0EE] border border-[#FFCCC7] rounded-[var(--radius-md)]">
                <AlertIcon />
                <p className="text-[13px] text-[#C0392B] leading-relaxed">{errorMsg}</p>
              </div>
            )}

            {/* CTA */}
            <button
              onClick={genState === "done" || genState === "error" ? reset : generate}
              disabled={genState === "generating"}
              className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-[var(--radius-md)] text-[15px] font-bold transition-all duration-150 ${
                genState === "done" || genState === "error"
                  ? "bg-surface-subtle text-ink-600 border border-border-default hover:bg-surface-canvas"
                  : genState === "generating"
                  ? "bg-brand-core/70 text-white cursor-not-allowed"
                  : "bg-brand-core text-white hover:bg-brand-core-hover shadow-sm"
              }`}
            >
              {genState === "generating" ? (
                <>
                  <SpinnerIcon />
                  Gerando currículo...
                </>
              ) : genState === "done" ? (
                <>
                  <ResetIcon />
                  Gerar outro
                </>
              ) : genState === "error" ? (
                <>
                  <ResetIcon />
                  Tentar novamente
                </>
              ) : (
                <>
                  <SparkleIcon />
                  Gerar currículo com IA
                </>
              )}
            </button>
          </div>

          {/* Result panel */}
          <div className="bg-surface-paper border border-border-default rounded-[var(--radius-xl)] flex flex-col overflow-hidden" style={{ minHeight: 480 }}>
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-default">
              <div className="flex items-center gap-2">
                <span className="text-[13px] font-semibold text-ink-800">Currículo gerado</span>
                {genState === "done" && (
                  <span className="text-[11px] font-semibold text-brand-pulse-strong bg-brand-pulse/20 px-2 py-0.5 rounded-[var(--radius-round)]">
                    Pronto
                  </span>
                )}
                {genState === "generating" && (
                  <span className="text-[11px] font-semibold text-brand-core bg-brand-core-soft px-2 py-0.5 rounded-[var(--radius-round)] animate-pulse">
                    Gerando...
                  </span>
                )}
              </div>
              {result && (
                <button
                  onClick={copyResult}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold text-ink-600 border border-border-default rounded-[var(--radius-md)] hover:bg-surface-subtle transition-colors"
                >
                  <CopyIcon />
                  Copiar
                </button>
              )}
            </div>

            {/* Result content */}
            {genState === "idle" ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="w-14 h-14 rounded-[var(--radius-lg)] bg-surface-subtle flex items-center justify-center">
                  <DocumentStarIcon />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-ink-800">O currículo aparecerá aqui</p>
                  <p className="text-[13px] text-ink-400 mt-1.5 max-w-[240px] leading-relaxed">
                    Cole a vaga, selecione sua chave da API e clique em gerar.
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[260px] mt-2">
                  {["Objetivo profissional", "Competências técnicas", "Experiências", "Formação e idiomas"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 px-3 py-2 rounded-[var(--radius-md)] bg-surface-subtle">
                      <div className="w-2 h-2 rounded-full bg-border-strong flex-shrink-0" />
                      <span className="text-[12px] text-ink-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div
                ref={resultRef}
                className="flex-1 overflow-y-auto p-6"
              >
                {result ? (
                  <pre
                    className="font-mono-custom text-[13px] text-ink-800 leading-[1.8] whitespace-pre-wrap break-words"
                  >
                    {result}
                    {genState === "generating" && (
                      <span className="inline-block w-2 h-4 bg-brand-core ml-0.5 align-text-bottom animate-pulse rounded-[2px]" />
                    )}
                  </pre>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center gap-3 text-ink-400">
                      <SpinnerIcon />
                      <p className="text-[13px]">Analisando a vaga...</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {[
            { icon: <ShieldIcon />, label: "Chave da API processada só no seu navegador" },
            { icon: <CheckCircleIcon />, label: "Nenhum dado enviado aos servidores do Currículo Core" },
            { icon: <SparkleIcon />, label: "Powered by Claude Opus 5" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-1.5 text-[12px] text-ink-400">
              <span className="text-ink-400">{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-core-soft">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-6">
        <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.03em] text-ink-950 max-w-lg">
          A próxima versão da sua trajetória começa aqui.
        </h2>
        <p className="text-[16px] text-ink-600 max-w-md">
          Sem cadastro. Seus dados ficam com você. Pronto para usar agora.
        </p>
        <a
          href="#editor"
          className="inline-flex items-center gap-2 px-8 py-4 text-[15px] font-bold text-ink-950 bg-brand-pulse rounded-[var(--radius-md)] hover:bg-brand-pulse-strong transition-colors shadow-sm"
        >
          Criar meu currículo
          <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Produto", links: ["Como funciona", "Editor", "Adaptar para vaga", "Exportar PDF"] },
    { title: "Recursos", links: ["Documentação", "FAQ", "Open source", "Licença MIT"] },
    { title: "Legal", links: ["Privacidade", "Termos de uso"] },
  ];
  return (
    <footer className="bg-ink-950 pt-14 pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-[1fr_auto_auto_auto] gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-[13px] text-[#5D5B70] leading-relaxed max-w-[280px]">
              Seu currículo no ponto para a próxima oportunidade.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#343245] mb-4">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-[#5D5B70] hover:text-[#B9B7C8] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-[#1E1D2C] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#343245]">© 2025 Currículo Core. Licença MIT.</p>
          <p className="text-[12px] text-[#343245] font-mono-custom">v0.1.0-beta</p>
        </div>
      </div>
    </footer>
  );
}

// Icon components
function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function CheckCircleIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="7" cy="7" r="6" />
      <path d="M4.5 7l2 2 3-3" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <path d="M3 5h14M3 10h14M3 15h14" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function AtsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="2" width="14" height="16" rx="2" />
      <path d="M7 6h6M7 10h6M7 14h4" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8" />
      <path d="M2 10h16M10 2c-2 2-3 5-3 8s1 6 3 8M10 2c2 2 3 5 3 8s-1 6-3 8" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 6L3 10l4 4M13 6l4 4-4 4M11 4l-2 12" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <KeywordsSection />
        <EditorPreviewSection />
        <PrivacySection />
        <OpenSourceSection />
      </main>
      <Footer />
    </div>
  );
}
