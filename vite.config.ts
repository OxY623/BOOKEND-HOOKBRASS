import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import viteCompression from 'vite-plugin-compression';
import viteImagemin from '@vheemstra/vite-plugin-imagemin'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminWebp from 'imagemin-webp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    viteImagemin({
      plugins: {
        jpg: imageminMozjpeg({
          quality: 85,
        }),
      },
      makeWebp: {
        plugins: {
          jpg: imageminWebp({
            quality: 85,
          }),
        },
      },
    }),
    // Gzip сжатие
    viteCompression({
      algorithm: 'gzip',
      threshold: 1024, // сжимать файлы больше 1KB
      ext: '.gz',
    }),
    // Brotli сжатие (лучше чем gzip)
    viteCompression({
      algorithm: 'brotliCompress',
      threshold: 1024,
      ext: '.br',
    }),
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-i18next', 'i18next'],
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Удалить console.log в продакшене
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      format: {
        comments: false, // Удалить комментарии
      },
    },
    cssCodeSplit: true, // Разделение CSS для лучшего кэширования
    sourcemap: false, // Отключить source maps в продакшене для уменьшения размера
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделение vendor chunks для лучшего кэширования
          'react-vendor': ['react', 'react-dom'],
          'i18n-vendor': ['i18next', 'react-i18next'],
          'ui-vendor': ['lucide-react'],
        },
        // Оптимизация имен файлов для кэширования
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[ext]/[name]-[hash][extname]`;
        },
      },
    },
    // Увеличить лимит предупреждений о размере чанков
    chunkSizeWarningLimit: 1000,
  },
  // Оптимизация для продакшена
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
