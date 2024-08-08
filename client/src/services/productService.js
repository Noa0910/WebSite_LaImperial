// client/src/services/productService.js
const API_URL = 'http://localhost:5000/api/products'; // Ajusta la URL según sea necesario

export const getProducts = async (page, limit, search) => {
    try {
        const response = await fetch(`${API_URL}?page=${page}&limit=${limit}&search=${search}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw error;
    }
};

export const addProduct = async (product) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Failed to add product:', error);
        throw error;
    }
};

export const updateProduct = async (productId, product) => {
    try {
        const response = await fetch(`${API_URL}/${productId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Failed to update product:', error);
        throw error;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await fetch(`${API_URL}/${productId}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Network response was not ok');
    } catch (error) {
        console.error('Failed to delete product:', error);
        throw error;
    }
};
