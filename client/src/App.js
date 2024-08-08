import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import VisitVirtualPage from './components/VisitVirtualPage';
import ShoppingCart from './components/ShoppingCart';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import AdminDashboard from './components/AdminDashboard'; // Importa el nuevo componente
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/authContext';

const App = () => {
    return (
        <AuthProvider>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/visitavirtual" element={<VisitVirtualPage />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        {/* Ruta privada para el panel de administración */}
                        <Route path="/admin/*" element={<PrivateRoute element={AdminDashboard} roles={['admin']} />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
};

export default App;
