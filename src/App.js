import './App.css';

import { Routes, Route } from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './page/Home';
import Cart from './page/Cart';
import Catalog from './page/Catalog';
import NotFounde from './page/NotFounde';
import Test from './components/Test';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/test' element={<Test />} />
        <Route path='*' element={<NotFounde />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
