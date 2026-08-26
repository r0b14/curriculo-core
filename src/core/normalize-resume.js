import { rankItems } from './rank-items.js';

export function normalizeResume(input) {
  const options = {
    primaryColor: '1F3A5F',
    maxExperiences: input.experience?.length ?? 0,
    maxProjects: input.projects?.length ?? 0,
    ...input.options
  };
  const privacy = {
    showEmail: true,
    showPhone: false,
    showLocation: true,
    ...input.privacy
  };
  const keywords = input.targetKeywords ?? [];

  return {
    ...input,
    locale: input.locale ?? 'pt-BR',
    basics: { ...input.basics, links: input.basics.links ?? [] },
    privacy,
    options,
    skills: input.skills ?? [],
    experience: rankItems(input.experience ?? [], keywords, options.maxExperiences),
    projects: rankItems(input.projects ?? [], keywords, options.maxProjects),
    education: input.education ?? [],
    languages: input.languages ?? []
  };
}
