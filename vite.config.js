import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [react()],
  base: '/', // Garante que os arquivos sejam carregados corretamente
});