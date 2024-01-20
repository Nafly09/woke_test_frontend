import { saveToken } from '../hooks/storage';
import api from '../utils/api';

export const login = async (email, password) => {
    const response = await api.post('/login', { email: email, password: password });
    if (response.status === 200) {
        saveToken(response.data.access_token);
        return response.data;
    } else {
        throw new Error(response.data.message || 'Login failed');
    }
};

export const signUp = async ({email, password, name, birthday, phone}) => {
    const response = await api.post('/sign_up', { email: email, password: password, name: name, birthday: birthday, phone: phone });
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.data.message || 'Login failed');
    }
};
