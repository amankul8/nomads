import { REST_COUNTRIES_API } from "@/config";
import axios, { AxiosInstance } from 'axios';

class RestCountriesApi {
    private static instance: RestCountriesApi;
    private api: AxiosInstance;

    private constructor() {
        this.api = axios.create({
            baseURL: REST_COUNTRIES_API,
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 5000,
        });
    }

    static getInstance(): RestCountriesApi {
        if (!RestCountriesApi.instance) {
            RestCountriesApi.instance = new RestCountriesApi();
        }
        return RestCountriesApi.instance;
    }
}

export default RestCountriesApi.getInstance();