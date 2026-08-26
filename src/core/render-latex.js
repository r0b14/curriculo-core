import { escapeLatex, latexHref } from './latex.js';

const LABELS = {
  'pt-BR': {
    summary: 'Resumo Profissional', skills: 'Competências', experience: 'Experiência Profissional',
    projects: 'Projetos', education: 'Formação', languages: 'Idiomas', present: 'Atual'
  },
  en: {
    summary: 'Professional Summary', skills: 'Skills', experience: 'Experience',
    projects: 'Projects', education: 'Education', languages: 'Languages', present: 'Present'
  }
};

const lines = (values) => values.filter(Boolean).join('\n');

function renderPeriod(item, labels) {
  if (!item.start && !item.end && !item.current) return '';
  const end = item.current ? labels.present : item.end;
  return [item.start, end].filter(Boolean).map(escapeLatex).join(' -- ');
}

function renderHighlights(highlights = []) {
  if (!highlights.length) return '';
  return `\\begin{itemize}\n${highlights.map((item) => `  \\item ${escapeLatex(item)}`).join('\n')}\n\\end{itemize}`;
}

function renderEntries(items, labels, kind) {
  return items.map((item) => {
    const title = kind === 'experience' ? item.role : kind === 'education' ? item.course : item.name;
    const owner = kind === 'experience' ? item.organization : kind === 'education' ? item.institution : (item.organization ?? '');
    return lines([
      `\\entry{${escapeLatex(title)}}{${escapeLatex(owner)}}{${renderPeriod(item, labels)}}`,
      item.description ? escapeLatex(item.description) : '',
      renderHighlights(item.highlights)
    ]);
  }).join('\n\n');
}

function renderContact(resume) {
  const { basics, privacy } = resume;
  const contact = [];
  if (privacy.showLocation && basics.location) contact.push(escapeLatex(basics.location));
  if (privacy.showEmail && basics.email) contact.push(latexHref(`mailto:${basics.email}`, basics.email));
  if (privacy.showPhone && basics.phone) contact.push(escapeLatex(basics.phone));
  for (const link of basics.links ?? []) contact.push(latexHref(link.url, link.label));
  return contact.join(' \\textbar{} ');
}

function section(title, content) {
  return content ? `\\section{${title}}\n${content}` : '';
}

export function renderLatex(resume) {
  const labels = LABELS[resume.locale] ?? LABELS['pt-BR'];
  const color = resume.options.primaryColor;
  const skills = resume.skills
    .map((skill) => `\\skillline{${escapeLatex(skill.category)}}{${skill.items.map(escapeLatex).join(', ')}}`)
    .join('\n');
  const languages = resume.languages
    .map((language) => `${escapeLatex(language.name)} (${escapeLatex(language.level)})`)
    .join(' \\textbar{} ');

  const content = [
    section(labels.summary, escapeLatex(resume.summary)),
    section(labels.skills, skills),
    section(labels.experience, renderEntries(resume.experience, labels, 'experience')),
    section(labels.projects, renderEntries(resume.projects, labels, 'project')),
    section(labels.education, renderEntries(resume.education, labels, 'education')),
    section(labels.languages, languages)
  ].filter(Boolean).join('\n\n');

  return `\\documentclass[a4paper,10.5pt]{article}
\\usepackage[T1]{fontenc}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage[left=1.25cm,right=1.25cm,top=1cm,bottom=1cm]{geometry}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{xcolor}
\\usepackage{tabularx}
\\usepackage[hidelinks]{hyperref}

\\definecolor{primary}{HTML}{${color}}
\\definecolor{muted}{HTML}{444444}
\\hypersetup{colorlinks=true,urlcolor=primary}
\\titleformat{\\section}{\\normalfont\\large\\bfseries\\color{primary}}{}{0em}{}[\\vspace{-0.65em}\\color{primary}\\rule{\\textwidth}{0.7pt}]
\\titlespacing*{\\section}{0pt}{0.9em}{0.45em}
\\setlist[itemize]{leftmargin=1.15em,topsep=2pt,itemsep=1.5pt,parsep=0pt}
\\pagestyle{empty}
\\setlength{\\parindent}{0pt}
\\newcommand{\\entry}[3]{\\vspace{2pt}\\begin{tabularx}{\\textwidth}{@{}Xr@{}}\\textbf{#1}\\if\\relax\\detokenize{#2}\\relax\\else{} \\textnormal{\\textbar{} #2}\\fi & \\textcolor{muted}{#3}\\end{tabularx}\\vspace{1pt}}
\\newcommand{\\skillline}[2]{\\textbf{#1:} #2\\\\}

\\begin{document}
\\begin{center}
  {\\LARGE\\bfseries\\color{primary} ${escapeLatex(resume.basics.name)}}\\\\[3pt]
  {\\large ${escapeLatex(resume.basics.headline)}}\\\\[5pt]
  \\small ${renderContact(resume)}
\\end{center}
\\vspace{-0.35em}

${content}
\\end{document}
`;
}
