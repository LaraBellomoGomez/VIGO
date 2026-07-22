import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => ({
  // GitHub Pages sirve este proyecto en /VIGO/ (no es un sitio <usuario>.github.io raíz).
  // En desarrollo local seguimos usando "/" para no romper el servidor de Vite.
  base: command === 'build' ? '/VIGO/' : '/',
  plugins: [react()],
}));
