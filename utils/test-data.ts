import { faker } from '@faker-js/faker';
import { config, endpoints } from '../config/config';

export interface TestData {
    name: string;
    email: string;
    password: string;
    passwordNew: string;
    token?: string;
}

export function createTestData(): TestData {
    return {
        name: config.name,
        email: faker.internet.email(),
        password: config.password,
        passwordNew: config.newPassword
    };
}

export { endpoints };
