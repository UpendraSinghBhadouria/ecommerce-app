import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom'
import Product from './components/Product';
import Products from './pages/Products';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/products' element={<Products />} />
        <Route path='/categories/:name' element={<CategoryProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
