export class ResumeValidationError extends Error {
  constructor(issues) {
    super(`Dados de currículo inválidos:\n- ${issues.join('\n- ')}`);
    this.name = 'ResumeValidationError';
    this.issues = issues;
  }
}
