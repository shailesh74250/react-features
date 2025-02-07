import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-loaded components for Code Splitting
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const NotFound = lazy(() => import('./pages/NotFound'));


function App() {
  return (
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
  );
}

export default App
