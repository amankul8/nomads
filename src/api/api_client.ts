import axios from "axios";
import { BASE_IMAGE_ULR } from "../config";

export abstract class ApiClient {
    protected constructor() {}

    private static instances = new Map<string, ApiClient>();

    protected static getInstance<T extends ApiClient>(
        this: new () => T
    ): T {
        const className = this.name;
        if (!ApiClient.instances.has(className)) {
        ApiClient.instances.set(className, new this());
        }
        return ApiClient.instances.get(className) as T;
    }
}
