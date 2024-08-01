import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, logout as logoutService, getUserProfile } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getUserProfile();
                console.log('Fetched user profile:', response); // Verifica la estructura de `response`
                setUser(response); // Ajusta según la estructura de la respuesta del backend
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleLogin = async (username, password) => {
        try {
            const response = await login(username, password);
            console.log('Login response:', response);
            setUser(response.user); // Asegúrate de que `response.user` tenga el rol
            if (response.user.role === 'admin') {
                navigate('/admin/users');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión', error);
        }
    };

    const handleLogout = () => {
        logoutService();
        setUser(null);
        navigate('/login');
    };

    if (loading) {
        return <div>Loading...</div>; // Puedes usar un spinner de carga aquí
    }

    return (
        <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
