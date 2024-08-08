import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/productService';
import '../styles/AdminProductManagement.css';

const AdminProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        async function fetchProducts() {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        }
        fetchProducts();
    }, []);

    const handleDelete = async (productId) => {
        try {
            await deleteProduct(productId);
            setProducts(products.filter(product => product._id !== productId));
        } catch (error) {
            console.error("Failed to delete product", error);
        }
    };

    const handleChange = (e) => {
        if (isEditing) {
            setSelectedProduct({ ...selectedProduct, [e.target.name]: e.target.value });
        } else {
            setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateProduct(selectedProduct._id, selectedProduct);
                setIsEditing(false);
                setSelectedProduct(null);
            } else {
                await addProduct(newProduct);
                setNewProduct({ name: '', price: '', description: '' });
            }
            const productsData = await getProducts();
            setProducts(productsData);
        } catch (error) {
            console.error("Failed to update or add product", error);
        }
    };

    return (
        <div className="admin-product-management">
            <h1>Product Management</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.description}</td>
                            <td>
                                <button onClick={() => {
                                    setSelectedProduct(product);
                                    setIsEditing(true);
                                }}>Edit</button>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <h2>{isEditing ? 'Edit Product' : 'Add Product'}</h2>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={isEditing ? selectedProduct.name : newProduct.name}
                    onChange={handleChange}
                />
                <label>Price:</label>
                <input
                    type="number"
                    name="price"
                    value={isEditing ? selectedProduct.price : newProduct.price}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea
                    name="description"
                    value={isEditing ? selectedProduct.description : newProduct.description}
                    onChange={handleChange}
                />
                <button type="submit">{isEditing ? 'Save' : 'Add'}</button>
            </form>
        </div>
    );
};

export default AdminProductManagement;
