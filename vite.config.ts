import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require(`path`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, `./src`),
      '@apis': path.resolve(`./src/`, `apis`),
      '@assets': path.resolve(`./src/`, `assets`),
      '@components': path.resolve(`./src/`, `components`),
      '@pages': path.resolve(`./src/`, `pages`),
      '@styles': path.resolve(`./src/`, `styles`),
      '@utils': path.resolve(`./src/`, `utils`),
    },
  },
});
