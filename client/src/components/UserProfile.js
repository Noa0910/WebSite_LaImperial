// client/src/components/UserProfile.js

import React, { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../services/authService';
import '../styles/UserProfile.css';

const UserProfile = () => {
    const [user, setUser] = useState({ username: '', name: '', phone: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        async function fetchUserProfile() {
            const userData = await getUserProfile();
            setUser(userData);
        }
        fetchUserProfile();
    }, []);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateUserProfile(user);
        setIsEditing(false);
    };

    return (
        <div className="user-profile">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        disabled
                    />
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <h1>{user.username}</h1>
                    <p>Name: {user.name}</p>
                    <p>Phone: {user.phone}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
