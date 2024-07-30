import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/RegisterPage.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook para redireccionar

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/auth/register', {
                username,
                password,
                name,
                phone
            });
            navigate('/login'); // Redirige a la página de inicio de sesión
        } catch (error) {
            setError('Error al registrar el usuario. Verifica los datos e intenta nuevamente.');
        }
    };

    return (
        <div className="container register-page">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <h2 className="text-center mb-4">Registro de Usuario</h2>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleSubmit}>
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

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre Completo:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Número de Teléfono:</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                className="form-control"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
