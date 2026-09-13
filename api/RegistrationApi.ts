import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { TestData } from '../utils/test-data';

export class RegistrationApi extends BaseApi {
    constructor(request: APIRequestContext) {
        super(request);
    }

    async register(data: TestData): Promise<APIResponse> {
        const headers = {};
        const body = { name: data.name, email: data.email, password: data.password };
        const response = await this.request.post('users/register', { headers, data: body });
        this.printRequest('POST', 'users/register', headers, body);
        return response;
    }

    async validate(response: APIResponse) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(201);
        expect(body.success).toBe(true);
        expect(body.status).toBe(201);
        expect(body.message).toBe('User account created successfully');
        expect(body.data.id).toBeDefined();
    }
}
