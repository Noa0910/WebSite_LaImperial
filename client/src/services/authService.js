const API_URL = 'http://localhost:5000/api';

// Función para decodificar el token
function decodeToken(token) {
    try {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    } catch (error) {
        console.error('Error decoding token:', error);
        throw new Error('Invalid token');
    }
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
        logout(); // Verifica que logout esté accesible aquí
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
    console.log('User data stored after login:', data.user); // Confirmar que los datos del usuario se guardan
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
    if (!userStr) {
        console.warn('No user found in localStorage');
        throw new Error('No user found in localStorage');
    }
    try {
        return JSON.parse(userStr);
    } catch (error) {
        console.error('Error parsing user data:', error);
        throw new Error('Invalid user data');
    }
}

// Funciones adicionales...

// Función para verificar si el token ha expirado
export function isTokenExpired() {
    const token = localStorage.getItem('token');
    if (!token) return true;

    const decodedToken = decodeToken(token);
    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
}
