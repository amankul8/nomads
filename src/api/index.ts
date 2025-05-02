import axios from "axios";
import { BASE_IMAGE_ULR } from "../config";

class ApiClient {

    

    constructor(baseUrl: string) {
        
    }
}

export const api = axios.create({
    baseURL: BASE_IMAGE_ULR,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export default api;