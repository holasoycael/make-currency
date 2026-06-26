## [0.1.3] - 2026-06-25

### Changed
- Replaced all repository and workflow commands to use `npm` instead of `yarn`.
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
