import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'textImage',
      fileName: (format) => `text-image.${format}.js`,
      formats: ['umd', 'iife', 'es', 'cjs'],
    },
  },
});
