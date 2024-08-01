export async function getUserProfile() {
    const response = await fetch(`${API_URL}/profile`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });

    if (!response.ok) throw new Error('Failed to fetch profile');
    const data = await response.json();

    // Imprime `data` para verificar su estructura
    console.log('Fetched user profile data:', data);

    // Verifica si `data` contiene el rol del usuario
    if (!data || !data.role) {
        throw new Error('Role not found in user profile');
    }

    return data;
}
