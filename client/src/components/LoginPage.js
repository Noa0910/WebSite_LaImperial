import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/RegisterPage.css';
import { AuthContext } from '../context/authContext';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        try {
            const user = await login(username, password);
            if (user.role === 'admin') {
                navigate('/admin/users');
            } else if (user.role === 'client') {
                navigate('/');
            } else {
                console.error('Unknown user role:', user.role);
            }
        } catch (error) {
            setError('Error al iniciar sesión. Verifica tu nombre de usuario y contraseña.');
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    return (
        <div className="container register-page">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <h2 className="text-center mb-4">Inicio de Sesión</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Nombre de Usuario:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                        </div>
                        <div className="text-center mt-3">
                            <button type="button" className="btn btn-secondary" onClick={handleRegisterRedirect}>
                                Crear una Cuenta
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;