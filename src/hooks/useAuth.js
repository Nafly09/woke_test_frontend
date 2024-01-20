import { getToken } from '../utils/storage';

const useAuth = () => {
    const token = getToken();
    return {
        isAuthenticated: !!token,
        token,
        // ... more auth-related logic
    };
};

export default useAuth;
