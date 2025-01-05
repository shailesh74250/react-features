import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/products' element={<Products />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App
