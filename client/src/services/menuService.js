// src/services/menuService.js

export const getDailyMenu = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/days/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch daily menu:', error);
        throw error;
    }
};

export const addMenuItem = async (item) => {
    try {
        const response = await fetch('http://localhost:5000/api/days/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to add menu item:', error);
        throw error;
    }
};

export const updateMenuItem = async (id, item) => {
    try {
        const response = await fetch(`http://localhost:5000/api/days/${id}`, {
            method: 'PATCH', // Cambiado de PUT a PATCH
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to update menu item:', error);
        throw error;
    }
};

export const deleteMenuItem = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/api/days/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to delete menu item:', error);
        throw error;
    }
};
