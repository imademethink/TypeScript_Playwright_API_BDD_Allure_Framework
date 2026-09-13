// import { test as base } from '@playwright/test';
import { TestData, createTestData } from '../utils/test-data';
import { APIResponse } from '@playwright/test';
import { test as base, createBdd } from 'playwright-bdd';

export type ScenarioState = {
    data: TestData;
    response?: APIResponse;
};

export const test = base.extend<{ scenarioState: ScenarioState }>({
    scenarioState: async ({}, use) => {
        await use({ data: createTestData() });
    }
});

export const { Given, When, Then, Before } = createBdd(test);
