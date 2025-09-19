
import React from 'react';
import Products from './components/Products'
import productsData from './components/data';
import PaymentSuccess from './components/PaymentSuccess';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products products={productsData}/>}/>
        <Route path="/paymentSuccess" element={<PaymentSuccess/>}/>
      </Routes>
    </Router>
  )
}

export default App