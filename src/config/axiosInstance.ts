import axios from "axios";
import { baseUrl } from ".";


export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export default api;