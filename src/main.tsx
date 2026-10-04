import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import "./index.css";
import { ThemeProvider } from "./shared/context/ThemeProvider";
import "./shared/i18n/config";
import Loader from "./shared/ui/Loader/Loader";
import * as serviceWorker from '../serviceWorker';



createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <HelmetProvider>
      <ThemeProvider>
        <Suspense
          fallback={
            <div className="min-h-screen flex-col flex items-center justify-center bg-[#f9f6f0] dark:bg-[#0a0a0a]">
              <Loader />
            </div>
          }
        >
          <App />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  </ErrorBoundary>,
);

// Service workers are enabled in production builds only.
serviceWorker.register({
  onSuccess: () => console.info("App files are cached for offline use."),
  onUpdate: () => console.info("A new app version is ready; reload to update."),
});
