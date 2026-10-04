// Change this name (for example, to "...-v2") when you need to discard the
// old cache or change the caching rules.
const CACHE_NAME = "bookend-hookbrass-v1";
const APP_ROOT = self.registration.scope;

self.addEventListener("install", (event) => {
  // Save the app HTML and its entry JS/CSS now, not on a later visit. The
  // browser loaded these files before this worker had a chance to control it.
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        await cache.add(APP_ROOT);

        const appPage = await cache.match(APP_ROOT);
        const html = await appPage.text();
        const assetPaths = [...html.matchAll(/(?:src|href)=["']([^"']+\.(?:js|css)(?:\?[^"']*)?)["']/gi)]
          .map((match) => new URL(match[1], APP_ROOT))
          .filter((assetUrl) => assetUrl.origin === self.location.origin)
          .map((assetUrl) => assetUrl.href);

        await cache.addAll([...new Set(assetPaths)]);
      })
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  // Remove caches from older versions of this app, then control open pages.
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter(
              (cacheName) =>
                cacheName.startsWith("bookend-hookbrass-") &&
                cacheName !== CACHE_NAME,
            )
            .map((cacheName) => caches.delete(cacheName)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  // Only cache pages and static files from this site. Do not cache API calls.
  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    // Network-first: visitors get the newest page when online.
    // If offline, show the previously saved app page instead.
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          if (response.ok) {
            await caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(request, response.clone()));
          }
          return response;
        } catch {
          const cachedPage = await caches.match(request);
          return cachedPage ?? caches.match(APP_ROOT);
        }
      })(),
    );
    return;
  }

  // Cache-first for Vite's local JS, CSS, image, and font files. Hashed build
  // filenames let the browser keep old files while an already-open page uses
  // them, and download new files the next time they are requested.
  const staticDestinations = [
    "script",
    "style",
    "image",
    "font",
    "worker",
    "manifest",
  ];
  if (!staticDestinations.includes(request.destination)) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedFile) => {
      if (cachedFile) {
        return cachedFile;
      }

      return fetch(request).then(async (response) => {
        if (response.ok) {
          await caches
            .open(CACHE_NAME)
            .then((cache) => cache.put(request, response.clone()));
        }
        return response;
      });
    }),
  );
});
