import { getToken } from '../hooks/storage';
import api from '../utils/api';

export const signCompanies = async (listOfIds) => {
    const token = getToken()
    const response = await api.authenticatedPost('/users/assign_companies', {"companyIds": Array.from(listOfIds)}, token);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error(response.data.message || 'Company Assign Error');
    }
};

export const getUserData = async () => {
    const token = getToken()
    const response = await api.get('/get_user_info', token);
    if (response.status === 200) {
        return response.data.user;
    } else {
        throw new Error(response.data.message || 'User Data Fetching Error');
    }
};

export const getAvailableCompanies = async () => {
    const token = getToken()
    const response = await api.get('/companies', token);
    if (response.status === 200) {
        return response.data.companies;
    } else {
        throw new Error(response.data.message || 'User Data Fetching Error');
    }
};