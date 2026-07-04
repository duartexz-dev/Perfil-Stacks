import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'Perfil-Stacks'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
