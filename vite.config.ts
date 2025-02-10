import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
// import imagemin from 'vite-plugin-imagemin';
import viteImagemin from '@vheemstra/vite-plugin-imagemin'

// The minifiers you want to use:
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminWebp from 'imagemin-webp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 
    svgr(), 
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg(),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp(),
        },
      },
    }),
    viteCompression({ 
    algorithm: 'gzip', // или 'brotli'
    threshold: 10240, // минимальный размер файла для сжатия
  }),],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
  minify: 'terser',
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return id.split('node_modules/')[1].split('/')[0]; 
        }
      },
    },
  },
  },
});
