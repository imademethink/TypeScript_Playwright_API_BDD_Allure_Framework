import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { TestData } from '../utils/test-data';

export class ForgotPasswordApi extends BaseApi {
    constructor(request: APIRequestContext) {
        super(request);
    }

    async forgotPassword(data: TestData): Promise<APIResponse> {
        const headers = { 'X-Auth-Token': data.token || '' };
        const body = { email: data.email };
        const response = await this.request.post('users/forgot-password', { headers, data: body });
        this.printRequest('POST', 'users/forgot-password', headers, body);
        return response;
    }

    async validate(response: APIResponse) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(200);
        expect(body.success).toBe(true);
        expect(body.status).toBe(200);
        expect(body.message).toContain('Password reset link successfully sent to');
    }
}
