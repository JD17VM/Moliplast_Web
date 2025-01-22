import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: 'https://jd17vm.github.io/Moliplast_Web',
  base: '/Moliplast_Web/',
})
