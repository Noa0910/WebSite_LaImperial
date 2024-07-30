import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/RegisterPage.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook para redireccionar

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                username,
                password
            });
            localStorage.setItem('token', response.data.token);
            navigate('/'); // Redirige a la página principal o a una página protegida
        } catch (error) {
            setError('Error al iniciar sesión. Verifica tu nombre de usuario y contraseña.');
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register'); // Redirige a la página de registro
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
