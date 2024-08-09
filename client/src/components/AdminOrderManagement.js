import React from 'react';
import '../styles/AdminOrderManagement.css';

const AdminOrderManagement = () => {
    // Datos de ejemplo
    const orders = [
        {
            _id: '1',
            user: { name: 'John Doe' },
            items: [{ name: 'Bread' }, { name: 'Butter' }],
            total: 5.00,
            status: 'pending',
        },
        {
            _id: '2',
            user: { name: 'Jane Smith' },
            items: [{ name: 'Coffee' }, { name: 'Donut' }],
            total: 4.50,
            status: 'completed',
        },
        {
            _id: '3',
            user: { name: 'Alice Johnson' },
            items: [{ name: 'Bagel' }],
            total: 2.75,
            status: 'canceled',
        },
    ];

    // Funciones de ejemplo para los botones
    const handleEdit = (order) => {
        alert(`Edit order ${order._id}`);
    };

    const handleDelete = (orderId) => {
        alert(`Delete order ${orderId}`);
    };

    return (
        <div className="admin-order-management">
            <h1>Order Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>User</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.user.name}</td>
                            <td>{order.items.map(item => item.name).join(', ')}</td>
                            <td>${order.total.toFixed(2)}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => handleEdit(order)}>Edit</button>
                                <button onClick={() => handleDelete(order._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrderManagement;
