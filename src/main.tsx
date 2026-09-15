import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary.tsx";
import "./index.css";
import { ThemeProvider } from "./shared/context/ThemeProvider.tsx";
import "./shared/i18n/config";
import Loader from "./shared/ui/Loader/Loader.tsx";

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
