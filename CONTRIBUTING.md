# Contributing to make-currency

First off, thank you for taking the time to contribute! We welcome all contributions, whether it's fixing a bug, adding support for a new currency, improving documentation, or suggesting new features.

To make the contribution process smooth and predictable, please follow these guidelines.

---

## 1. Local Development Setup

Before making any changes, please read the [Development Guide](./DEVELOPMENT.md) to set up the project on your machine, learn about the available commands, and understand the project structure.

---

## 2. Contribution Workflow

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/make-currency.git
   cd make-currency
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your work:
   ```bash
   git checkout -b feature/my-new-feature
   # or
   git checkout -b fix/bug-description
   ```
5. **Make your changes**. If you are adding a new currency, please review the rules in [src/TYPES/SPEC.md](./src/TYPES/SPEC.md).
6. **Format and lint** your code:
   ```bash
   npm run lint
   ```
7. **Run the test suite** to ensure everything is correct and nothing is broken:
   ```bash
   npm run test
   ```
8. **Commit your changes** using Conventional Commit messages (see below).
9. **Push to your branch**:
   ```bash
   git push origin feature/my-new-feature
   ```
10. **Open a Pull Request** (PR) against the main repository.

---

## 3. Branch Naming Conventions

To keep history clear, please prefix your branch names based on the type of change:

- `feature/` or `feat/` for new features or currency configurations.
- `fix/` or `bugfix/` for bug fixes.
- `docs/` for documentation changes.
- `refactor/` for code restructuring without feature/bug changes.
- `chore/` for build scripts, dependency updates, configuration changes, etc.

Example: `feature/add-kzt-currency`

---

## 4. Commit Message Guidelines

We follow the **Conventional Commits** specification. Commit messages should be structured as follows:

```
<type>: <description>
```

### Types
- **feat**: Support for a new currency, options, or features.
- **fix**: A bug fix.
- **docs**: Changes to documentation.
- **style**: Code styling adjustments (whitespace, formatting, semi-colons, etc.) that do not affect logic.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **test**: Adding or updating tests.
- **chore**: Updating build processes, configurations, package versioning, or dependencies.

Examples:
- `feat: add Russian Ruble (RUB) support`
- `fix: correct decimal separator for CHF`
- `docs: update supported currencies table`

---

## 5. Pull Request Checklist

Before submitting a Pull Request, please ensure:
- [ ] Your code passes the linter (`npm run lint`).
- [ ] All 140+ test suites pass successfully (`npm run test`).
- [ ] You have updated the [CHANGELOG.md](./CHANGELOG.md) with details of your changes.
- [ ] If you modified or added a currency configuration, ensure it has 100% test coverage and satisfies the contract rules in [SPEC.md](./src/TYPES/SPEC.md).
- [ ] The build succeeds (`npm run build`) without errors.

*Note: We use pre-commit git hooks that will run the linter and tests on staged files to prevent broken or unformatted code from being committed.*

---

**After your pull request is merged**, you can safely delete your branch.
