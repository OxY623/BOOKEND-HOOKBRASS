import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
import imagemin from 'vite-plugin-imagemin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    svgr(), 
    imagemin({
      optipng: {
        optimizationLevel: 5,
      },
      mozjpeg: {
        quality: 80,
      },
    }),
    viteCompression({ 
    algorithm: 'gzip', // или 'brotli'
    threshold: 10240, // минимальный размер файла для сжатия
  }),],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
