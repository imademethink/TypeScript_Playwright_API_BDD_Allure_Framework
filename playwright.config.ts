import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import './steps/fixtures';

const testDir = defineBddConfig({
    features: 'features/**/*.feature',
    steps: 'steps/**/*.ts'
});

export default defineConfig({
    testDir,                     // for all BDD tests
    // testDir: '.',             // for api-independent.spec.ts
    timeout: 30000,
    fullyParallel: false,
    workers: 1,
    retries: 0,
    reporter: [
        ['line'],
        ['allure-playwright', { resultsDir: 'allure-results' }]
    ],
    use: {
        baseURL: process.env.BASE_URL || 'https://practice.expandtesting.com/notes/api/',
        trace: 'retain-on-failure',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    }
});
