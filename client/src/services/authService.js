const API_URL = 'http://localhost:5000/api';

export async function getUserProfile() {
    const response = await fetch(`${API_URL}/profile`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) throw new Error('Failed to fetch profile');
    return response.json();
}

export async function updateUserProfile(user) {
    const response = await fetch(`${API_URL}/profile`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) throw new Error('Failed to update profile');
    return response.json();
}

export async function getUsers() {
    const response = await fetch(`${API_URL}/users`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
}

export async function deleteUser(userId) {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    if (!response.ok) throw new Error('Failed to delete user');
    return response.json();
}

export async function updateUser(user) {
    const response = await fetch(`${API_URL}/users/${user._id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (!response.ok) throw new Error('Failed to update user');
    return response.json();
}
