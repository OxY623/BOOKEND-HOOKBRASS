import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './shared/i18n/config';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.tsx';
import { ThemeProvider } from './shared/context/ThemeContext.tsx';
//import { WaveLoader } from './shared/ui/WaveLoader/WaveLoader';
import Loader from './shared/ui/Loader/Loader.tsx';

const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <HelmetProvider>
      <ThemeProvider>
        <Suspense fallback={
          (<div className="min-h-screen flex-col flex items-center justify-center bg-[#f9f6f0] dark:bg-[#0a0a0a]">
            <Loader/>
          </div>)
        }>
          <App />
        </Suspense>
      </ThemeProvider>
    </HelmetProvider>
  </ErrorBoundary>
);
