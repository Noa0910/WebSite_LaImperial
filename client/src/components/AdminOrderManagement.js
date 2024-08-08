import React, { useState, useEffect } from 'react';
import { getOrders, updateOrderStatus, deleteOrder } from '../services/orderService';
import '../styles/AdminOrderManagement.css';

const AdminOrderManagement = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        async function fetchOrders() {
            try {
                const ordersData = await getOrders();
                setOrders(ordersData);
            } catch (error) {
                console.error("Failed to fetch orders", error);
            }
        }
        fetchOrders();
    }, []);

    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    const handleUpdateStatus = async (orderId) => {
        try {
            await updateOrderStatus(orderId, status);
            const updatedOrders = await getOrders();
            setOrders(updatedOrders);
            setSelectedOrder(null);
            setStatus('');
        } catch (error) {
            console.error("Failed to update order status", error);
        }
    };

    const handleDelete = async (orderId) => {
        try {
            await deleteOrder(orderId);
            const updatedOrders = await getOrders();
            setOrders(updatedOrders);
        } catch (error) {
            console.error("Failed to delete order", error);
        }
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
                            <td>${order.total}</td>
                            <td>
                                {selectedOrder && selectedOrder._id === order._id ? (
                                    <>
                                        <select value={status} onChange={handleStatusChange}>
                                            <option value="">Select status</option>
                                            <option value="pending">Pending</option>
                                            <option value="completed">Completed</option>
                                            <option value="canceled">Canceled</option>
                                        </select>
                                        <button onClick={() => handleUpdateStatus(order._id)}>Update Status</button>
                                    </>
                                ) : (
                                    order.status
                                )}
                            </td>
                            <td>
                                <button onClick={() => {
                                    setSelectedOrder(order);
                                    setStatus(order.status);
                                }}>Edit</button>
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
