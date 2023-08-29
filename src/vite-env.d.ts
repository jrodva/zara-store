/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PRODUCTS_API_URL: string
  readonly VITE_GRID_API_URL: string
  readonly VITE_TEMPLATES_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
