import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      'fe31af33daf8.ngrok-free.app', // coloque aqui o host que o erro mostrou
    ],
  },
});
