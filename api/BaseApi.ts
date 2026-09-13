import { APIRequestContext, APIResponse } from '@playwright/test';

export class BaseApi {
    protected request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    protected printRequest(method: string, url: string, headers: object, body: object) {
        console.log(`    Method: ${method}`);
        console.log(`    Url: ${url}`);
        console.log(`    Headers: ${JSON.stringify(headers, null, 2)}`);
        console.log(`    Body: ${JSON.stringify(body, null, 2)}`);
    }

    protected async readJson(response: APIResponse) {
        return await response.json();
    }
}
