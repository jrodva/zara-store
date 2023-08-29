export const updateGrid = () =>
  fetch(import.meta.env.VITE_GRID_API_URL, { method: 'POST', mode: 'cors' });
