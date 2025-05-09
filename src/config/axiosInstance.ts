import axios from "axios";
import { APP_BASE_URL } from ".";


export const api = axios.create({
    baseURL: APP_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export default api;