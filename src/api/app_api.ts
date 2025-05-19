import { APP_BASE_URL } from "@/config";
import axios, { AxiosInstance } from 'axios';

class AppApi {
    private static instance: AppApi;
    private api: AxiosInstance;

    private constructor() {
        this.api = axios.create({
            baseURL: APP_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        });
    }

    static getInstance(): AppApi {
        if (!AppApi.instance) {
            AppApi.instance = new AppApi();
        }
        return AppApi.instance;
    }
}

export default AppApi.getInstance();