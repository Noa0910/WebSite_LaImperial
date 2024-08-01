import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AuthProvider } from './context/authContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <Router> {/* Asegúrate de que Router esté envolviendo AuthProvider */}
            <AuthProvider>
                <App />
            </AuthProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
