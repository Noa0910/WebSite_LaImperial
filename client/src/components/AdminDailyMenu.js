// src/components/AdminDailyMenu.js
import React, { useState, useEffect } from 'react';
import { getDailyMenu, addMenuItem, updateMenuItem, deleteMenuItem } from '../services/menuService';
import '../styles/AdminDailyMenu.css';

const AdminDailyMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newItem, setNewItem] = useState({ day: '', firstMenu: '', secondMenu: '', price: '' });

    useEffect(() => {
        async function fetchMenuItems() {
            try {
                const menuData = await getDailyMenu();
                setMenuItems(menuData);
            } catch (error) {
                console.error('Failed to fetch menu items', error);
            }
        }
        fetchMenuItems();
    }, []);

    const handleDelete = async (itemId) => {
        try {
            await deleteMenuItem(itemId);
            setMenuItems(menuItems.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Failed to delete menu item', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (isEditing) {
            setSelectedItem({ ...selectedItem, [name]: value });
        } else {
            setNewItem({ ...newItem, [name]: value });
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
                setNewItem({ day: '', firstMenu: '', secondMenu: '', price: '' });
            }
            const menuData = await getDailyMenu();
            setMenuItems(menuData);
        } catch (error) {
            console.error('Failed to update or add menu item', error);
        }
    };

    return (
        <div className="admin-daily-menu">
            <h1>Daily Menu Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>First Menu</th>
                        <th>Second Menu</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {menuItems.length > 0 ? (
                        menuItems.map(item => (
                            <tr key={item._id}>
                                <td>{item.day}</td>
                                <td>{item.firstMenu}</td>
                                <td>{item.secondMenu}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button className="edit-button" onClick={() => {
                                        setSelectedItem(item);
                                        setIsEditing(true);
                                    }}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No menu items available</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <h2>{isEditing ? 'Edit Menu Item' : 'Add Menu Item'}</h2>
                <label>Day:</label>
                <input
                    type="text"
                    name="day"
                    value={isEditing ? selectedItem.day : newItem.day}
                    onChange={handleChange}
                />
                <label>First Menu:</label>
                <input
                    type="text"
                    name="firstMenu"
                    value={isEditing ? selectedItem.firstMenu : newItem.firstMenu}
                    onChange={handleChange}
                />
                <label>Second Menu:</label>
                <input
                    type="text"
                    name="secondMenu"
                    value={isEditing ? selectedItem.secondMenu : newItem.secondMenu}
                    onChange={handleChange}
                />
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={isEditing ? selectedItem.price : newItem.price}
                    onChange={handleChange}
                />
                <button className="submit-button" type="submit">{isEditing ? 'Save' : 'Add'}</button>
            </form>
        </div>
    );
};

export default AdminDailyMenu;
