const API_URL = 'http://localhost:8080/api';

const post = async (url, data) => {
    const response = await fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return { status: response.status, data: responseData };
};

const get = async (url, token) => {
    const response = await fetch(`${API_URL}${url}`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }),
    });
    const responseData = await response.json();
    return { status: response.status, data: responseData };
};

const authenticatedPost = async (url, data, token) => {
    console.log(token)
    const response = await fetch(`${API_URL}${url}`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }),
        body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return { status: response.status, data: responseData };
};

export default {
    post,
    get,
    authenticatedPost
};
