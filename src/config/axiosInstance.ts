import axios from "axios";

const baseUrl = 'http://206.189.58.109:8000/api';

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export default api;