import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css'; // Asegúrate de importar el archivo de estilos
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
