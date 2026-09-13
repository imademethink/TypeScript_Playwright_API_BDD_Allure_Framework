import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { TestData } from '../utils/test-data';

export class DeleteAccountApi extends BaseApi {
    constructor(request: APIRequestContext) {
        super(request);
    }

    async deleteAccount(data: TestData): Promise<APIResponse> {
        const headers = { 'X-Auth-Token': data.token || '' };
        const body = {};
        const response = await this.request.delete('users/delete-account', { headers, data: body });
        this.printRequest('DELETE', 'users/delete-account', headers, body);
        return response;
    }

    async validate(response: APIResponse) {
        const body = await this.readJson(response);
        expect(response.status()).toBe(200);
        expect(body.success).toBe(true);
        expect(body.status).toBe(200);
        expect(body.message).toBe('Account successfully deleted');
    }
}
