export const getTemplates = () =>
  fetch(import.meta.env.VITE_TEMPLATES_API_URL, { method: 'GET', mode: 'cors' })
