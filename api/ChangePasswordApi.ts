import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { TestData } from '../utils/test-data';

export class ChangePasswordApi extends BaseApi {
    constructor(request: APIRequestContext) {
        super(request);
    }

    async changePassword(data: TestData): Promise<APIResponse> {
        const headers = { 'X-Auth-Token': data.token || '' };
        const body = { currentPassword: data.password, newPassword: data.passwordNew };
        const response = await this.request.post('users/change-password', { headers, data: body });
        this.printRequest('POST', 'users/change-password', headers, body);
        return response;
    }

    async validate(response: APIResponse, data: TestData) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(200);
        expect(body.success).toBe(true);
        expect(body.status).toBe(200);
        expect(body.message).toBe('The password was successfully updated');
        data.password = data.passwordNew;
    }
}
