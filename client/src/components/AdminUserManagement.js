// client/src/components/AdminUserManagement.js
import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser, updateUser } from '../services/authService';
import '../styles/AdminUserManagement.css';

const AdminUserManagement = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                console.error("Failed to fetch users", error);
            }
        }
        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        try {
            await deleteUser(userId);
            setUsers(users.filter(user => user._id !== userId));
        } catch (error) {
            console.error("Failed to delete user", error);
        }
    };

    const handleChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateUser(selectedUser._id, selectedUser);
            setIsEditing(false);
            setSelectedUser(null);
            const usersData = await getUsers();
            setUsers(usersData);
        } catch (error) {
            console.error("Failed to update user", error);
        }
    };

    return (
        <div className="admin-user-management">
            <h1>User Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button onClick={() => {
                                    setSelectedUser(user);
                                    setIsEditing(true);
                                }}>Edit</button>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isEditing && selectedUser && (
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={selectedUser.username}
                        onChange={handleChange}
                        disabled
                    />
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={selectedUser.name}
                        onChange={handleChange}
                    />
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={selectedUser.phone}
                        onChange={handleChange}
                    />
                    <button type="submit">Save</button>
                </form>
            )}
        </div>
    );
};

export default AdminUserManagement;
