# Development and Running Guide

This guide provides instructions on how to set up, run, test, and build the **make-currency** project locally.

---

## 1. Getting Started

### Prerequisites
- **Node.js**: Version **24.14.1** is specifically used and recommended for developing and running this project.
- **npm**: Standard Node package manager.

### Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/holasoycael/make-currency.git
cd make-currency
npm install
```

---

## 2. Available Scripts

Here are the scripts defined in `package.json` that you can run:

### Build for Production
To build the library for distribution, run:

```bash
npm run build
```
This builds both CJS (CommonJS) and UMD (minified) bundles into the `/lib` folder and copies critical files like `index.d.ts`, `package.json`, and documentation files.

### Development Mode (Watch)
To work on the codebase with automatic rebuilding on file changes, run:

```bash
npm run dev
```

### Running Tests
This project uses Jest for testing. To run the full test suite once:

```bash
npm run test
```

To run Jest in interactive watch mode (ideal during development):

```bash
npm run test:watch
```

### Linting
To check the code for syntax or styling violations using ESLint and Prettier, run:

```bash
npm run lint
```

---

## 3. Git Hooks (Husky & Lint-staged)

This project has Git hooks configured with **Husky** and **Lint-staged** to ensure code quality before commits are finalized:

- **Pre-commit**: Automatically runs `npm run lint -- --fix` and `npm run test` (only on modified files) to prevent broken or unformatted code from being committed.

---

## 4. Project Structure Overview

- `index.d.ts` — Main declaration file exposing the public TypeScript types.
- `src/` — Source code folder:
  - `src/TYPES/` — Configurations for all 139 supported currencies. Each currency has its own directory containing `index.ts` (locale settings) and `test.ts` (unit tests).
  - `src/models/` — Core business logic, formatting algorithms, and parser structures.
  - `src/typings/` — Internal TypeScript types and interfaces.
  - `src/index.ts` — Main entrypoint of the source code.

---

## 5. Publishing

To publish the package to npm, you must build the project first and then publish from the `/lib` directory, as all compiled bundles are generated there:

```bash
# 1. Build the production bundles
npm run build

# 2. Publish from the build directory
npm publish ./lib
```

Publishing from the root directory will fail to include the compiled JavaScript files because they are excluded by the root `.npmignore` rules.

### Dry-run Verification

Before publishing, it is highly recommended to verify the package contents to ensure all required files are present. This is a standard best practice for package maintainers:

```bash
# 1. Navigate to the build directory
cd lib

# 2. Run npm pack with --dry-run to list all files that will be packaged
npm pack --dry-run
```

Review the output file list to confirm that `index.js`, `index.js.map`, `dist/make.min.js`, and other assets are correctly listed. If everything is correct, you are ready to publish.
