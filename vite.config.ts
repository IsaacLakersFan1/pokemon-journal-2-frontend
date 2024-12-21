// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // Binds to 0.0.0.0
    port: 4173, // Ensures the port is correct
  },
});
