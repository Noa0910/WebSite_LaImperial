import React, { useState } from 'react';
import AdminUserManagement from './AdminUserManagement';
import AdminProductManagement from './AdminProductManagement';
import AdminDailyMenu from './AdminDailyMenu';
import AdminOrderManagement from './AdminOrderManagement'; // Importa el nuevo componente
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const [currentSection, setCurrentSection] = useState('users');

    const renderSection = () => {
        switch (currentSection) {
            case 'users':
                return <AdminUserManagement />;
            case 'products':
                return <AdminProductManagement />;
            case 'menu':
                return <AdminDailyMenu />;
            case 'orders':
                return <AdminOrderManagement />;
            default:
                return <AdminUserManagement />;
        }
    };

    return (
        <div className="admin-dashboard">
            <nav>
                <button onClick={() => setCurrentSection('users')}>Registro de Usuarios</button>
                <button onClick={() => setCurrentSection('products')}>Registro de Productos</button>
                <button onClick={() => setCurrentSection('menu')}>Registro de Menús Diarios</button>
                <button onClick={() => setCurrentSection('orders')}>Gestión de Pedidos</button> 
            </nav>
            <div className="admin-content">
                {renderSection()}
            </div>
        </div>
    );
};

export default AdminDashboard;
