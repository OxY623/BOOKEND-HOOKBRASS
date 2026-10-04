type ServiceWorkerConfig = {
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
};

export function register(config?: ServiceWorkerConfig) {
  if (!import.meta.env.PROD || !("serviceWorker" in navigator)) {
    return;
  }

  const appUrl = new URL(import.meta.env.BASE_URL, window.location.href);
  if (appUrl.origin !== window.location.origin) {
    console.error("The service worker must be served from the app's origin.");
    return;
  }

  const serviceWorkerUrl = new URL("service-worker.js", appUrl);

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register(serviceWorkerUrl, { scope: appUrl.pathname })
      .then((registration) => {
        registration.addEventListener("updatefound", () => {
          const installingWorker = registration.installing;
          if (!installingWorker) {
            return;
          }

          installingWorker.addEventListener("statechange", () => {
            if (installingWorker.state !== "installed") {
              return;
            }

            if (navigator.serviceWorker.controller) {
              config?.onUpdate?.(registration);
            } else {
              config?.onSuccess?.(registration);
            }
          });
        });
      })
      .catch((error: unknown) => {
        console.error("Service worker registration failed:", error);
      });
  });
}

export async function unregister() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  try {
    const appUrl = new URL(import.meta.env.BASE_URL, window.location.href);
    const registration = await navigator.serviceWorker.getRegistration(
      appUrl.pathname,
    );
    await registration?.unregister();
  } catch (error) {
    console.error("Service worker unregistration failed:", error);
  }
}
