// client/src/context/authContext.js

import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginService, logout as logoutService, getUserProfile } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = () => {
            try {
                const userProfile = getUserProfile();
                setUser(userProfile);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const handleLogin = async (username, password) => {
        try {
            const response = await loginService(username, password);
            console.log('Login response:', response);
            setUser(response.user);
            return response.user; // Retorna el usuario para que LoginPage pueda manejar la redirección
        } catch (error) {
            console.error('Error en el inicio de sesión', error);
            throw error;
        }
    };

    const handleLogout = () => {
        logoutService();
        setUser(null);
        navigate('/login');
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
