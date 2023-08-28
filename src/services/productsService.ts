export const getProducts = () => fetch(import.meta.env.VITE_PRODUCTS_API_URL, { method: 'GET', mode: 'cors' });
