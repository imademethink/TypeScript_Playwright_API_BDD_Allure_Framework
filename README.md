# 🚀 TypeScript Playwright API BDD Allure Reporting Automation Framework

### Beginner-Friendly TypeScript Playwright API BDD Automation Framework

Build reliable, maintainable, and reusable API automation using **TypeScript, Playwright APIRequest, BDD, Gherkin, playwright-bdd, and Allure Reporting**.

<img width="1672" height="941" alt="Ready To Use Automation Framework TypeScript, Playwright, API, BDDgen" src="https://github.com/user-attachments/assets/c270504e-acaa-4144-b6db-46041f58f034" />

# YouTube Video Link

# https://youtu.be/mDjHTF8UCLU

⭐ If this project helps you, please consider giving it a Star!

---

# 📖 About

This repository provides a simple and beginner-friendly **TypeScript Playwright API BDD Automation Framework**

The framework uses:

- 🟦 TypeScript
- 🌐 Playwright APIRequest
- 🥒 BDD / Gherkin
- 🧩 playwright-bdd
- 📊 Allure Reporting
- 🧱 Simple API Object Model
- 🧪 Playwright Test assertions
- 🎲 Faker test data
- 🌍 `.env` configuration
- 📎 API response attachments
- 🏷️ Tag-Based Test Execution
- 🚀 CI/CD Friendly

The framework intentionally focuses on:

> **Simplicity → Readability → Maintainability → Reusability**

No unnecessary design patterns or complicated TypeScript concepts are used.

---

# ✨ Features

- 🟦 TypeScript
- 🌐 Playwright API Automation
- 🥒 BDD using Gherkin
- 🧩 playwright-bdd
- 📝 Feature Files
- 🧱 Simple API Object Model
- 📊 Allure Reporting
- 📎 API Response Attachments
- 🎲 Random Test Data
- 🌍 Environment Configuration
- 🎯 Tag-Based Test Execution
- 🧪 Positive and Negative API Scenarios
- 🔐 Token-Based Authentication
- 🔄 Reusable API Classes
- 🚀 CI/CD Friendly
- 🧹 Easy Maintenance
- 📁 Clean Project Structure
- 🟢 Beginner-Friendly TypeScript

---

# 🏗 Framework Design

The framework intentionally follows a simple and practical architecture.

It uses:

- ✅ Playwright APIRequestContext
- ✅ Playwright Test
- ✅ playwright-bdd
- ✅ Gherkin language
- ✅ Simple API Object Model
- ✅ Reusable API classes
- ✅ Simple test data management
- ✅ Environment configuration
- ✅ Allure Reporting
- ✅ API response attachments

The goal is:

> **Simple to understand → Easy to maintain → Easy to extend → Ready for CI/CD**

---

# 💻 Prerequisites

Install the following before running the framework:

- Node.js LTS
- npm
- Git
- Google Chrome
- VS Code or another JavaScript IDE
- Allure Commandline

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

Check Allure:

```bash
allure --version
```

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/imademethink/TypeScript_Playwright_API_BDD_Allure_Framework.git
```

## 2. Navigate to the Project

```bash
cd TypeScript_Playwright_API_BDD_Allure_Framework
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Install Playwright Browsers

```bash
npx playwright install
```

For Linux CI environments:

```bash
npx playwright install --with-deps
```

---

# 🧪 Test Execution

## Run Specific Test with a specific tag

```bash
npm run test:smoke
```

## Run All Tests

```bash
npm run test
```

## Generate Allure (HTML) report

```bash
allure generate allure-results -o allure-report --clean
```

## Open Allure (HTML) report

```bash
allure open allure-report
```

---

## Run Regression Tests

```bash
npm run test:regression
```

---

# 🥒 BDD with Gherkin

BDD allows API scenarios to be written using business-readable Gherkin syntax.

Example:

```gherkin
@case1
Scenario: Registration and Login validation
  Given Complete formal registration
  When Process profile login
  Then Validate response for login
```

The execution flow is:

```text
┌──────────────────────────┐
│     Gherkin Feature      │
│          File            │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│      playwright-bdd      │
│       BDD Generator      │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     Step Definitions     │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│       API Classes        │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│ Playwright APIRequest    │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│       REST API           │
└────────────┬─────────────┘
             │
             ▼
┌──────────────────────────┐
│     Allure Reporting     │
└──────────────────────────┘
```

---

# 🧩 API Object Model

The framework uses a simple **API Object Model** approach.

Each API class is responsible for:

- Request headers
- Request payload
- API endpoint call
- HTTP method
- Response status validation
- Response body validation

The main API classes are:

```text
api/
├── BaseApi.ts
├── RegistrationApi.ts
├── LoginApi.ts
├── LogoutApi.ts
├── ProfileApi.ts
├── ForgotPasswordApi.ts
├── ChangePasswordApi.ts
└── DeleteAccountApi.ts
```

The classes intentionally use simple TypeScript.

---

# 📡 Playwright API Automation

Playwright provides `APIRequestContext` for Web API testing.

The framework uses Playwright directly instead of introducing another API library.

Example:

```typescript
const response = await request.post('users/login', {
    data: {
        email: email,
        password: password
    }
});

expect(response.status()).toBe(200);
```

This keeps browser and API automation technology consistent when the framework is extended later.

---

# 🔐 Authentication

The sample API uses an authentication token returned from login.

Example response data:

```text
Login
  ↓
Authentication Token
  ↓
X-Auth-Token Header
  ↓
Profile / Logout / Password / Delete APIs
```

Example:

```typescript
const headers = {
    'X-Auth-Token': data.token || ''
};
```

The token is stored in the simple scenario test data object and reused by subsequent API calls.

---

# 📊 Allure Reporting

Allure can provide:

- Test execution summary
- Passed scenarios
- Failed scenarios
- Skipped scenarios
- Feature names
- Scenario names
- BDD steps
- Execution duration
- Failure information
- API response attachments
- Playwright traces
- Test artifacts
---

# 📎 API Request / Response Reporting

The framework attaches API response JSON to the Playwright test when response validation is performed.

Example attachment:

```text
API Response
```

This makes it easier to investigate failures from the Allure report without opening the source code.

---

# 🏷 Tag-Based Test Execution

BDD tags can be used to organize and selectively execute scenarios.

Example:

```gherkin
@simple
Scenario: Registration validation
```

Run the simple smoke scenario:

```bash
npm run test:smoke
```

Run a specific case:

```bash
npm run test:case1
```

Run the complete BDD regression collection:

```bash
npm run test:regression
```

The framework uses `bddgen --tags` so that only matching scenarios are generated for the selected run.

---

# 📋 Test Scenarios

Current scenarios cover:

1. Registration
2. Registration + Login
3. Registration + Login + Logout
4. Registration + Login + Get Profile + Logout
5. Registration + Login + Forgot Password + Logout
6. Registration + Login + Change Password + Logout
7. Registration + Login + Delete Account
8. Invalid login validation

There is also a separate Playwright API test file under `tests/` that demonstrates the independent API coverage.

---

# 📂 Project Structure

```text
TypeScript_Playwright_API_BDD_Allure_Framework/
│
├── features/
│   ├── Demo.feature
│   └── DemoProfileMngt.feature
│
├── steps/
│   ├── fixtures.ts
│   ├── api_steps.ts
│   └── api_steps_profile_mngt.ts
│
├── api/
│   ├── BaseApi.ts
│   ├── RegistrationApi.ts
│   ├── LoginApi.ts
│   ├── LogoutApi.ts
│   ├── ProfileApi.ts
│   ├── ForgotPasswordApi.ts
│   ├── ChangePasswordApi.ts
│   └── DeleteAccountApi.ts
│
├── config/
│   └── config.ts
│
├── utils/
│   ├── test-data.ts
│   └── reporting.ts
│
├── tests/
│   └── api-independent.spec.ts
│
├── scripts/
│   └── clean.js
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .env.example
├── .gitignore
└── README.md
```

Generated folders such as `allure-results`, `allure-report`, `test-results`, and `.features-gen` are created during execution and are not source folders.

---

# 📄 Folder Responsibilities

## `features/`

Contains Gherkin feature files.

Feature files contain:

- Features
- Scenarios
- Tags
- Given / When / Then steps

---

## `steps/`

Contains TypeScript BDD step definitions.

The step definitions connect Gherkin steps with Playwright API classes.

---

## `api/`

Contains API Object classes.

Each class handles one API area and its validations.

---

## `config/`

Contains simple framework configuration such as:

- Base URL
- Default test name
- Default password
- New password
- API endpoints

---

## `utils/`

Contains reusable support functions such as:

- Test data generation
- Faker email generation
- Allure / Playwright response attachments

---

## `tests/`

Contains independent Playwright API tests.

These tests are useful for learning how the same API can be automated without BDD.

---

# 🌍 Environment Configuration

The framework supports `.env` configuration.

Create a local `.env` file from `.env.example`.

Example:

```text
BASE_URL=https://practice.expandtesting.com/notes/api/
NAME=Jon Doe
PASSWORD=Demo1234
NEW_PASSWORD=Demo9999
```

Do not commit real credentials or secrets.

The `.env` file is excluded through `.gitignore`.

---

# 🧹 Clean Framework

Remove generated execution and reporting files:

```bash
npm run clean
```

The command removes generated folders such as:

```text
allure-results/
allure-report/
test-results/
playwright-report/
.features-gen/
```

It does not remove source files.

---

# 📦 Main Dependencies

| Package | Purpose |
|---|---|
| `@playwright/test` | Playwright API automation and assertions |
| `playwright-bdd` | BDD / Gherkin integration with Playwright Test |
| `allure-playwright` | Allure reporting |
| `allure` | Allure report generation and viewing |
| `@faker-js/faker` | Random test data |
| `dotenv` | Environment variables |
| `typescript` | TypeScript compiler |

The framework uses current compatible versions selected for Playwright 1.62 and the current `playwright-bdd` / Allure integrations.

---

# 🟦 TypeScript Configuration

The main TypeScript configuration is located in:

```text
tsconfig.json
```

The configuration intentionally uses familiar TypeScript features and avoids advanced type programming.

Example TypeScript:

```typescript
const username: string = 'testuser';
```

Example interface:

```typescript
interface LoginData {
    username: string;
    password: string;
}
```

Interfaces are used only where they make the code easier to understand.

---

# 🧑‍🎓 Beginner TypeScript Approach

This framework is specifically designed for people who know programming but do not know much TypeScript.

The code focuses on:

- Variables
- Strings
- Objects
- Arrays
- Classes
- Constructors
- Functions
- `async` / `await`
- Basic interfaces
- Simple type annotations
- Imports and exports
- Basic conditional logic

The framework intentionally avoids:

- Complex generics
- Decorators
- Abstract classes
- Advanced utility types
- Dependency injection
- Complex inheritance
- Reflection
- Metaprogramming
- Excessive interfaces
- Complex functional programming
---

# 🧱 Simple API Architecture

The preferred architecture is:

```text
Feature
   ↓
Step Definition
   ↓
API Class
   ↓
Playwright APIRequest
   ↓
REST API
   ↓
Assertion
   ↓
Allure Report
```

No unnecessary layers are introduced.

---

# 🧪 Validation Strategy

The framework validates both:

### HTTP Response

```typescript
expect(response.status()).toBe(200);
```

### JSON Response

```typescript
expect(body.success).toBe(true);
expect(body.status).toBe(200);
expect(body.message).toBe('Login successful');
```

This keeps API validation clear for beginners.

---

# 🧹 Clean Framework Principles

The framework follows a few simple principles.

### Feature Files

Contain business-readable scenarios.

### Step Definitions

Contain BDD step implementations.

### API Classes

Contain API requests and response validation.

### Utilities

Contain reusable technical functionality.

### Configuration

Contains environment-specific settings.

### Reporting

Contains API response attachments and Allure execution results.

This separation prevents feature files from becoming tightly coupled with the API implementation.

---

# 📚 Learning Outcomes

This repository demonstrates:

- TypeScript API automation
- Playwright API automation
- BDD automation
- Gherkin
- playwright-bdd
- API Object Model
- Playwright Test
- APIRequestContext
- Request and response handling
- Authentication token handling
- Test data generation
- Environment configuration
- Allure Reporting
- API response attachments
- Tag-based execution
- Positive and negative API testing
- Maintainable automation framework design

---

# 🎓 Suitable For

This framework can be used by:

- Beginners learning TypeScript API automation
- Beginners learning Playwright API testing
- Beginners learning BDD
- QA Automation Engineers
- SDETs
- Software Engineers
- Test Automation Leads
- QA Managers
- Teams building BDD API automation frameworks

---

# 🤝 Contributing

Contributions are welcome!

Feel free to:

- ⭐ Star the repository
- 🍴 Fork the project
- 🐞 Report issues
- 💡 Suggest improvements
- 🚀 Submit Pull Requests

---

# 🗺️ Future Roadmap

Potential future enhancements:

- Database Validation
- Docker Support
- Parallel Execution
- Advanced Retry Mechanism
- GitHub Actions Pipeline
- Jenkins Pipeline
- Azure DevOps Pipeline
- Test Data Management
- Excel-Based Test Data
- JSON-Based Test Data
- Multiple Environment Support
- Advanced Failure Diagnostics
- API Schema Validation
- API Contract Testing
- API Performance Testing
- Centralized Logging
- CI/CD Allure Publishing

---

# 🌟 Why This Framework?

The framework is designed around a simple philosophy:

```text
Readable BDD
     +
Simple TypeScript
     +
Reusable API Classes
     +
Reliable Playwright API
     +
Useful Allure Reporting
     +
Simple Configuration
     =
Maintainable API Automation
```

No unnecessary framework complexity.

No excessive design patterns.

No complicated TypeScript abstractions.

Just a clean and practical API automation architecture that teams can understand, maintain, and extend.

---

# 📌 Useful Commands

| Purpose | Command |
|---|---|
| Install dependencies | `npm install` |
| Install Playwright | `npx playwright install` |
| Generate BDD tests | `npm run bddgen` |
| Run all BDD tests | `npm test` |
| Run smoke test | `npm run test:smoke` |
| Run case 1 | `npm run test:case1` |
| Run regression | `npm run test:regression` |
| Run independent API tests | `npm run test:independent` |
| Generate Allure report | `npm run allure:generate` |
| Open Allure report | `npm run allure:open` |
| Clean generated files | `npm run clean` |

---

# ❤️ Community

If you find this framework useful:

⭐ **Star the repository**

🍴 **Fork the repository**

🐞 **Report issues**

💡 **Suggest improvements**

🚀 **Contribute**

---

### Made with ❤️ for the Automation Testing Community

**TypeScript • Playwright API • BDD • Gherkin • playwright-bdd • Allure Reporting**
