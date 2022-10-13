import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Delivery from './Delivery';
import './App.css';
import ContactUs from './ContactUs';
import Shop from './Shop';
import Olafa from './Olafa';


function App() {
  return <Router>
    <nav>
      <Link to="/olafa" className='name'>OLAFA</Link>
      <Link to="/shop" className='link'>КАТАЛОГ</Link>
      <Link to="/delivery" className='link'>ДОСТАВКА</Link>
      <Link to="/contactus" className='link'>КОНТАКТЫ</Link>
      
    </nav>
    <Routes>
      <Route path="/olafa" element={<Olafa/>} />
      <Route path="/delivery" element={<Delivery/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path="/contactus" element={<ContactUs/>} />
      
    </Routes>
  </Router>
}

export default App;
