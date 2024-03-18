import HomePage from './components/home/home';
// import About from './components/about';

import Navv from './components/nav';
// import Contact from './components/contact';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navv />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/store/:LinkCategory?' element={<Store storeData={storeData} setStoreData={setStoreData} setCartActive={setCartActive} fetchStoreData={fetchStoreData} cartCount={cartCount} fetchCartCount={fetchCartCount} />} />
          <Route path='/product/:category/:id' element={<ProductPage products={storeData?.products} setData={setStoreData} setCartActive={setCartActive} fetchStoreData={fetchStoreData} cartCount={cartCount} fetchCartCount={fetchCartCount} />} />
          <Route path='/checkout' element={<Checkout products={storeData?.products} fetchStoreData={fetchStoreData} />} />
          <Route path='/booking' element={<Booking />} /> */}
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/programs' element={<Programs />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;