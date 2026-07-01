## [0.1.5] - 2026-07-01

### Added

- **Library Documentation**: Created comprehensive documentation pages with live code examples and TypeScript type definitions.
- **Examples and Demos**: Enhanced the playground with additional examples and demos for all use cases.
- **README Improvements**: Updated `README.md` with installation and usage instructions.

### Changed

- **Dependencies**: Updated `storybook`, `heroui`, `typescript` and other development dependencies to latest versions.
- **Testing**: Updated `typescript-eslint` configuration to support the latest TypeScript features.

### Fixed

- **Configuration**: Fixed an issue where `tsConfig.json` was not correctly picked up by Storybook, causing type-related build errors in the documentation.
- **Dependencies**: Updated `package.json` to remove unused `dependencies` and fix `peerDependencies`.

---

## [0.1.4] - 2026-06-30

### Changed

- Replaced all reposi tory and workflow commands to use `npm` instead of `yarn`.
- Updated pre-commit hooks and package scripts to use `npm run`.
- Specified Node.js v24 as the development environment standard.

### Added

- Created `DEVELOPMENT.md` guide with local setup, running, and testing instructions.

### Fixed

- Fixed TypeScript declaration file `index.d.ts` to be fully self-contained for npm distribution, ensuring `TCurrency` and `TLanguage` resolve correctly for package consumers.
- Dynamically mapped all 139 supported currencies in `TTYPES` so they are fully accessible under `TYPES` in TypeScript.
- Renamed return interface from `TCurrency` to `ICurrencyProps` in internal models to avoid name collisions and conform to repository standards (`I` prefix for interfaces).
- Exported missing `LAK` (Kip laosiano) and `RUB` (Russian Ruble) configurations from the barrel file and types union.

---

## [0.0.1] - 2023-02-21

### Added

- `currency`
- `currencyFn`
