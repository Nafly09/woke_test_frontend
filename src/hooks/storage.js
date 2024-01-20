export const getToken = () => {
    return localStorage.getItem('token'); // Retrieve the token from localStorage
};

export const saveToken = (token) => {
    localStorage.setItem('token', token); // Save the token to localStorage
};

export const removeToken = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
};
