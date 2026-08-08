import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      models: path.resolve(__dirname, './src/models'),
      modules: path.resolve(__dirname, './src/modules'),
      public: path.resolve(__dirname, './public'),
      services: path.resolve(__dirname, './src/services'),
      shared: path.resolve(__dirname, './src/modules/shared'),
      src: path.resolve(__dirname, './src'),
    },
  },

  base: '/react-app_phone-catalog/',
});
