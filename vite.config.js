// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'ca921e4ab69f.ngrok-free.app', // libera o host do ngrok
    ],
  },
});
