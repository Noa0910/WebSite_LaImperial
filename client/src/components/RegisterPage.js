// src/components/RegisterPage.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/RegisterPage.css'; // Asegúrate de crear este archivo para estilos adicionales

const RegisterPage = () => {
    return (
        <div className="container register-page">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <h2 className="text-center mb-4">Registro de Usuario</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Nombre de Usuario:</label>
                            <input type="text" id="username" name="username" className="form-control" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input type="password" id="password" name="password" className="form-control" required />
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
