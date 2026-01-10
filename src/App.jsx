import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";

import Footer from "./components/Footer";
import { AuthProvider } from "./auth/AuthContext";
import Login from "./pages/Login";
import "./App.css";


import { useState } from 'react'


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />

        {/* Main Content */}

        <div className="">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/ProductDetail" element={<ProductDetail />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
<Route path="/product/:id" element={<ProductDetail />} />


          </Routes>
        </div>

        <Footer />
      </Router>

    </AuthProvider >
  );
}

export default App;
