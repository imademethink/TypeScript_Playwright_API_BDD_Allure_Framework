import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { BaseApi } from './BaseApi';
import { TestData } from '../utils/test-data';

export class LoginApi extends BaseApi {
    constructor(request: APIRequestContext) {
        super(request);
    }

    async login(data: TestData): Promise<APIResponse> {
        const headers = {};
        const body = { email: data.email, password: data.password };
        const response = await this.request.post('users/login', { headers, data: body });
        this.printRequest('POST', 'users/login', headers, body);
        return response;
    }

    async validate(response: APIResponse, validUser = true, data?: TestData) {
        const body = await this.readJson(response);

        if (validUser) {
            expect(response.status()).toBe(200);
            expect(body.success).toBe(true);
            expect(body.status).toBe(200);
            expect(body.message).toBe('Login successful');
            expect(body.data.id).toBeDefined();
            expect(body.data.name).toBeDefined();
            expect(body.data.email).toBeDefined();
            expect(body.data.token).toBeDefined();

            if (data) {
                data.token = body.data.token;
            }
        } else {
            expect(response.status()).toBe(401);
            expect(body.success).toBe(false);
            expect(body.status).toBe(401);
            expect(body.message).toBe('Incorrect email address or password');
        }
    }
}
