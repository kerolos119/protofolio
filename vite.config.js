import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const base='/kerllos-portfolio/'
    
// https://vite.dev/config/
export default defineConfig({
  plugins: [
[react()],
  tailwindcss(),
  base,
  
  ],
})



