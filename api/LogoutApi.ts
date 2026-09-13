import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { TestData } from '../utils/test-data';

export class LogoutApi extends BaseApi {
    constructor(request: APIRequestContext) {
        super(request);
    }

    async logout(data: TestData): Promise<APIResponse> {
        const headers = { 'X-Auth-Token': data.token || '' };
        const body = { email: data.email, password: data.password };
        const response = await this.request.delete('users/logout', { headers, data: body });
        this.printRequest('DELETE', 'users/logout', headers, body);
        return response;
    }

    async validate(response: APIResponse) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(200);
        expect(body.success).toBe(true);
        expect(body.status).toBe(200);
        expect(body.message).toBe('User has been successfully logged out');
    }
}
