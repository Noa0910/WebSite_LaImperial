// client/src/services/authService.js

const API_URL = 'http://localhost:5000/api';

// Función para decodificar el token
function decodeToken(token) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
}

// Función para realizar solicitudes API con manejo de token
async function apiRequest(url, options = {}) {
    const token = localStorage.getItem('token');
    const headers = {
        ...options.headers,
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
    
    const response = await fetch(url, { ...options, headers });
    
    if (response.status === 401) {
        // Token inválido o expirado
        logout();
        throw new Error('Session expired. Please login again.');
    }
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'API request failed');
    }
    
    return response.json();
}

// Función para login
export async function login(username, password) {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error('Failed to login');
    const data = await response.json();
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    console.log('Token stored after login:', data.token);
    return data;
}

// Función para logout
export function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
}

// Función para obtener el perfil del usuario
export function getUserProfile() {
    const userStr = localStorage.getItem('user');
    if (!userStr) throw new Error('No user found');
    return JSON.parse(userStr);
}

// Función para obtener todos los usuarios
export async function getUsers() {
    return apiRequest(`${API_URL}/users`);
}

// Función para eliminar un usuario por ID
export async function deleteUser(userId) {
    return apiRequest(`${API_URL}/users/${userId}`, { method: 'DELETE' });
}

// Función para actualizar un usuario por ID
export async function updateUser(userId, userData) {
    return apiRequest(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(userData),
    });
}

// Función de prueba para verificar la autenticación
export async function testAuth() {
    return apiRequest(`${API_URL}/auth/test`);
}

// Función para verificar si el token ha expirado
export function isTokenExpired() {
    const token = localStorage.getItem('token');
    if (!token) return true;
    
    const decodedToken = decodeToken(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
}