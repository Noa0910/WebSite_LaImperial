// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import VisitVirtualPage from './components/VisitVirtualPage';
import ShoppingCart from './components/ShoppingCart';
import CheckoutPage from './components/CheckoutPage';
import RegisterPage from './components/RegisterPage'; // Importa la página de registro

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/visitavirtual" element={<VisitVirtualPage />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/register" element={<RegisterPage />} /> {/* Añade la ruta para la página de registro */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
