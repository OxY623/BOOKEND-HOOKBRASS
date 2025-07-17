import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.tsx';
//import { WaveLoader } from './shared/ui/WaveLoader/WaveLoader';
import Loader from './shared/ui/Loader/Loader.tsx';

const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Suspense fallback={
      (<div className="min-h-screen flex-col flex items-center justify-center bg-black">
        {/* <div className="text-blue-600 text-2xl font-bold tracking-wider animate-pulse">
           Loading
         </div> 
        <WaveLoader /> */}
        <Loader/>
      </div>)
    }>
      <App />
    </Suspense>
  </ErrorBoundary>
);
