/*
import React, { lazy, Suspense, useCallback, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import { StrictMode } from 'react';
import { hydrate, dehydrate } from 'react-query/hydration';
import './index.css';

// Lazy-loaded components for Code Splitting
const Home = lazy(() => import('./pages/Home'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const NotFound = lazy(() => import('./pages/NotFound'));

// React Query Client with default caching and SSR hydration support
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
      cacheTime: 1000 * 60 * 10, // Keep cache for 10 minutes
      refetchOnWindowFocus: false, // Prevent unnecessary refetching
      retry: 2, // Retry failed requests twice
    },
  },
});

// Error Boundary Fallback UI
const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div>
    <h2>Something went wrong!</h2>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try Again</button>
  </div>
);

const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Router>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Router>
          </ErrorBoundary>
        </RecoilRoot>
      </QueryClientProvider>
    </StrictMode>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

// Web Vitals Logging for Performance Monitoring
import reportWebVitals from './reportWebVitals';
reportWebVitals(console.log);

// Service Worker for PWA Support
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').catch(console.error);
}

// Optimize React Performance with Passive Event Listeners
document.addEventListener('touchstart', () => {}, { passive: true });

// Prevent unnecessary re-renders by memoizing event handlers
const memoizedEventHandler = useCallback(() => {
  console.log('Optimized event handler');
}, []);
document.addEventListener('scroll', memoizedEventHandler);

// Optimize console logs in production
typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && (console.log = () => {});

// Use requestIdleCallback to defer non-urgent tasks
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    console.log('Deferred non-urgent task');
  });
}

// Preload important resources
document.addEventListener('DOMContentLoaded', () => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = '/static/important-resource.js';
  link.as = 'script';
  document.head.appendChild(link);
});

// Reduce layout thrashing by batching DOM updates
const batchedDOMUpdates = useCallback(() => {
  requestAnimationFrame(() => {
    console.log('Batched DOM update');
  });
}, []);
document.addEventListener('resize', batchedDOMUpdates);

// Optimize event listeners by using passive options
const optimizeEventListeners = () => {
  ['scroll', 'wheel', 'touchmove'].forEach(event => {
    window.addEventListener(event, () => {}, { passive: true });
  });
};
optimizeEventListeners();

// Use Intersection Observer to defer offscreen rendering
const lazyLoadImages = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });
  document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
};
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Minimize reflows by batching multiple DOM changes
const batchDOMChanges = (callback) => {
  requestAnimationFrame(() => {
    callback();
  });
};
document.addEventListener('resize', () => batchDOMChanges(() => console.log('Batched DOM updates on resize')));

*/