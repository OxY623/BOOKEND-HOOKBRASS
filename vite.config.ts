import viteImagemin from "@vheemstra/vite-plugin-imagemin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";

import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),

    svgr(),

    // Оптимизация изображений только для production build
    ...(mode === "production"
      ? [
          viteImagemin({
            plugins: {
              jpg: imageminMozjpeg({
                quality: 85,
              }),

              png: imageminPngquant({
                quality: [0.7, 0.9],
              }),
            },

            makeWebp: {
              plugins: {
                jpg: imageminWebp({
                  quality: 85,
                }),

                png: imageminWebp({
                  quality: 85,
                }),
              },
            },
          }),
        ]
      : []),

    // Gzip
    viteCompression({
      algorithm: "gzip",
      threshold: 1024,
      ext: ".gz",
    }),

    // Brotli
    viteCompression({
      algorithm: "brotliCompress",
      threshold: 1024,
      ext: ".br",
    }),
  ],

  /**
   * Pre-bundle dependencies
   */
  optimizeDeps: {
    include: ["react", "react-dom", "react-i18next", "i18next", "lucide-react"],
  },

  build: {
    // Минификация production
    minify: "terser",

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },

      format: {
        comments: false,
      },
    },

    // Разделение CSS
    cssCodeSplit: true,

    // Не отдавать sourcemap клиенту
    sourcemap: false,

    rollupOptions: {
      output: {
        /**
         * Разделение vendor кода
         */
        manualChunks: {
          "react-vendor": ["react", "react-dom"],

          "i18n-vendor": ["i18next", "react-i18next"],

          "ui-vendor": ["lucide-react"],
        },

        /**
         * Cache-friendly filenames
         */
        chunkFileNames: "assets/js/[name]-[hash].js",

        entryFileNames: "assets/js/[name]-[hash].js",

        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name ?? "";

          const ext = fileName.split(".").pop()?.toLowerCase();

          if (
            [
              "png",
              "jpg",
              "jpeg",
              "webp",
              "avif",
              "svg",
              "gif",
              "ico",
            ].includes(ext ?? "")
          ) {
            return "assets/images/" + "[name]-[hash][extname]";
          }

          if (["woff", "woff2", "eot", "ttf", "otf"].includes(ext ?? "")) {
            return "assets/fonts/" + "[name]-[hash][extname]";
          }

          return "assets/" + "[ext]/" + "[name]-[hash][extname]";
        },
      },
    },

    /**
     * Предупреждать только о реально больших чанках
     */
    chunkSizeWarningLimit: 1000,
  },
}));
