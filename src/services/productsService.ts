const getParams = (ids: string): string => {
  const idsArray = JSON.parse(ids.replace(/\s+/g, ''))
  const queryParams = idsArray.map((id: string) => `id=${id}`).join('&')

  return `?${queryParams}`
}

export const getProducts = (ids: string) =>
  fetch(import.meta.env.VITE_PRODUCTS_API_URL + getParams(ids), { method: 'GET', mode: 'cors' })
