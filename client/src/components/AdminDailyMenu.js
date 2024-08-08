import React, { useState, useEffect } from 'react';
import { getDailyMenu, addMenuItem, updateMenuItem, deleteMenuItem } from '../services/menuService';
import '../styles/AdminProductManagement.css';

const AdminDailyMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newItem, setNewItem] = useState({ name: '', description: '', price: '' });

    useEffect(() => {
        async function fetchMenuItems() {
            try {
                const menuData = await getDailyMenu();
                setMenuItems(menuData);
            } catch (error) {
                console.error("Failed to fetch menu items", error);
            }
        }
        fetchMenuItems();
    }, []);

    const handleDelete = async (itemId) => {
        try {
            await deleteMenuItem(itemId);
            setMenuItems(menuItems.filter(item => item._id !== itemId));
        } catch (error) {
            console.error("Failed to delete menu item", error);
        }
    };

    const handleChange = (e) => {
        if (isEditing) {
            setSelectedItem({ ...selectedItem, [e.target.name]: e.target.value });
        } else {
            setNewItem({ ...newItem, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateMenuItem(selectedItem._id, selectedItem);
                setIsEditing(false);
                setSelectedItem(null);
            } else {
                await addMenuItem(newItem);
                setNewItem({ name: '', description: '', price: '' });
            }
            const menuData = await getDailyMenu();
            setMenuItems(menuData);
        } catch (error) {
            console.error("Failed to update or add menu item", error);
        }
    };

    return (
        <div className="admin-daily-menu">
            <h1>Daily Menu Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.map(item => (
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => {
                                    setSelectedItem(item);
                                    setIsEditing(true);
                                }}>Edit</button>
                                <button onClick={() => handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <h2>{isEditing ? 'Edit Menu Item' : 'Add Menu Item'}</h2>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={isEditing ? selectedItem.name : newItem.name}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea
                    name="description"
                    value={isEditing ? selectedItem.description : newItem.description}
                    onChange={handleChange}
                />
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={isEditing ? selectedItem.price : newItem.price}
                    onChange={handleChange}
                />
                <button type="submit">{isEditing ? 'Save' : 'Add'}</button>
            </form>
        </div>
    );
};

export default AdminDailyMenu;
