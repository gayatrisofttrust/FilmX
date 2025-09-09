import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for React + TypeScript
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Optional: add custom path aliases if needed
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173, // Default Vite port, change if needed
    open: true, // Opens browser on dev start
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
