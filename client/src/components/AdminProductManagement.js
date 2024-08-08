// client/src/components/AdminProductManagement.js
import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../services/productService';
import '../styles/AdminProductManagement.css';

const AdminProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '', image: '', category: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function fetchProducts() {
            try {
                const productsData = await getProducts(currentPage, 10, search);
                setProducts(productsData.products);
                setTotalPages(productsData.totalPages);
            } catch (error) {
                console.error("Failed to fetch products", error);
            }
        }
        fetchProducts();
    }, [currentPage, search]);

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
                setNewProduct({ name: '', price: '', description: '', image: '', category: '' });
            }
            const productsData = await getProducts(currentPage, 10, search);
            setProducts(productsData.products);
        } catch (error) {
            console.error("Failed to update or add product", error);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    return (
        <div className="admin-product-management">
            <h1>Product Management</h1>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                className="search-input"
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>${product.price}</td>
                            <td>{product.description}</td>
                            <td>{product.category}</td>
                            <td><img src={product.image} alt={product.name} style={{ width: '100px' }} /></td>
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
            <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={currentPage === index + 1 ? 'active' : ''}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <h2>{isEditing ? 'Edit Product' : 'Add Product'}</h2>
                <div className="form-group">
                    <label htmlFor="name">Title:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={isEditing ? selectedProduct.name : newProduct.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={isEditing ? selectedProduct.price : newProduct.price}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={isEditing ? selectedProduct.description : newProduct.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image URL:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={isEditing ? selectedProduct.image : newProduct.image}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={isEditing ? selectedProduct.category : newProduct.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{isEditing ? 'Update Product' : 'Add Product'}</button>
            </form>
        </div>
    );
};

export default AdminProductManagement;
