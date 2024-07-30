import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, logout as logoutService, getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await getCurrentUser();
                setUser(response.data);
            } catch (error) {
                setUser(null);
            }
        };
        fetchUser();
    }, []);

    const handleLogin = async (username, password) => {
        try {
            const response = await login(username, password);
            setUser(response.data.user);
            navigate('/');
        } catch (error) {
            console.error('Error en el inicio de sesión', error);
        }
    };

    const handleLogout = () => {
        logoutService();
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login: handleLogin, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};
