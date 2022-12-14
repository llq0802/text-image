import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'createTextImage',
      fileName: (format) => `text-to-image-video.${format}.js`,
      formats: ['umd', 'iife', 'es', 'cjs'],
    },
  },
});
