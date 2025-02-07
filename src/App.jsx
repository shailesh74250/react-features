import React, { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-loaded components for Code Splitting
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
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


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary fallback={<h2>OOps something went wrong!</h2>}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-us' element={<About />} />
              <Route path='/contact-us' element={<Contact />} />
              <Route path='/products' element={<Products />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </QueryClientProvider>
    
  );
}

export default App
