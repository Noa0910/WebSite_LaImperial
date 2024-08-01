import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import VisitVirtualPage from './components/VisitVirtualPage';
import ShoppingCart from './components/ShoppingCart';
import CheckoutPage from './components/CheckoutPage';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import AdminUserManagement from './components/AdminUserManagement';
import { AuthContext } from './context/authContext';

const App = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={user?.role === 'admin' ? <Navigate to="/admin/users" /> : <MainPage />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/visitavirtual" element={<VisitVirtualPage />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/users" element={user?.role === 'admin' ? <AdminUserManagement /> : <Navigate to="/" />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
