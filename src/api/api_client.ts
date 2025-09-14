import { APP_BASE_URL } from "@/config";
import axios, { AxiosInstance } from 'axios';

class ApiClient {
    private static instance: ApiClient;
    private api: AxiosInstance;

    private constructor() {
        this.api = axios.create({
            baseURL: APP_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000,
        });
    }

    static getInstance(): ApiClient {
        if (!ApiClient.instance) {
            ApiClient.instance = new ApiClient();
        }
        return ApiClient.instance;
    }

    public getClient() {
        return this.api;
    }
}

export default ApiClient.getInstance();