# TYPES — Currency Exchange Configurations

This directory contains one folder per supported currency.
Each folder is an isolated, self-contained currency configuration used by the `currency()` function to format monetary values.

---

## Directory Structure

```
src/TYPES/
├── index.ts          ← barrel file that re-exports all currencies
├── README.md         ← this file
├── SPEC.md           ← technical specification
│
├── AED/
│   ├── index.ts      ← currency configuration
│   └── test.ts       ← unit tests for this currency
│
├── BRL/
│   ├── index.ts
│   └── test.ts
│
└── ...               ← one folder per currency (139 total)
```

---

## How It Works

Every currency folder exports a single object that satisfies the `TExchange` contract defined in [`src/typings/Locale.ts`](../typings/Locale.ts):

```ts
export type TExchange = {
  lang: TLanguage // BCP 47 locale tag
  currency: TCurrency // ISO 4217 currency code
  removePrefix: (value: string) => string // strips the symbol for symbol: false
  replaceSymbol?: (value: string) => string // optional symbol normalization
}
```

The `currency()` model runs the following pipeline over each formatted value:

```
Intl.NumberFormat(lang, { currency, ... }).format(floatValue)
  └─► replaceSymbol(formattedValue)    ← normalize symbol (optional)
  └─► removePrefix(normalizedValue)   ← strip symbol (for symbol: false)
```

---

## Adding a New Currency

1. **Create the folder** inside `src/TYPES/` using the ISO 4217 code in uppercase (e.g. `XYZ/`).

2. **Create `index.ts`** following the pattern below:

```ts
// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'xx-XX',
  currency: 'XYZ',
  removePrefix: (value: string) => value.slice(N)
} satisfies TExchange
```

3. **Add `lang` and `currency` to `TLanguage` / `TCurrency`** in [`src/typings/Locale.ts`](../typings/Locale.ts).

4. **Export from the barrel** in [`src/TYPES/index.ts`](./index.ts):

```ts
export { default as XYZ } from '@TYPES/XYZ'
```

5. **Create `test.ts`** covering at least the standard 9 test values:
   - `0.01`, `0.12`, `1`, `1.23`, `748.99`, `1234.56`, `12345.67`, `123456.78`, `1234567.89`

---

## Choosing the Right `removePrefix`

The `removePrefix` function strips the currency symbol from the formatted string when `symbol: false` is passed to `currency()`.

Use the browser or Node.js to inspect the raw `Intl.NumberFormat` output and determine how many characters to slice:

```js
new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(1.23)
// → "R$ 1,23"  → removePrefix: value.slice(3)   (removes "R$ ")
```

### Common Patterns

| Pattern              | Example currency   | Symbol position                                   |
| :------------------- | :----------------- | :------------------------------------------------ |
| `value.slice(1)`     | USD, GBP, INR      | Single-char prefix (`$`, `£`, `₹`)                |
| `value.slice(2)`     | EUR (`pt-PT`), MYR | Two-char prefix (`€\u00A0`, `RM`)                 |
| `value.slice(3)`     | BRL, TWD           | Three-char prefix (`R$ `, `NT$`)                  |
| `value.slice(4)`     | CHF                | Four-char prefix (`CHF `)                         |
| `value.slice(0, -N)` | ALL, RUB, PLN      | Suffix symbol (trimmed from end)                  |
| Custom chain         | AED                | Unicode chars need extra `.replace()` / `.trim()` |

---

## When to Use `replaceSymbol`

Use `replaceSymbol` when `Intl.NumberFormat` produces a symbol that differs from the conventional short form used in the project.

| Currency                   | Raw `Intl` output | After `replaceSymbol` |
| :------------------------- | :---------------- | :-------------------- |
| `AED` (`ar-AE`)            | `د.إ.`            | `د.إ`                 |
| `ALL` (`sq-AL`)            | `Lekë`            | `L`                   |
| `CHF` (`de-CH`)            | `CHF 1'234.56`    | `Fr. 1'234.56`        |
| `JPY` (uses `en-US`/`USD`) | `$`               | `¥`                   |

---

## Running Tests

```sh
# all currencies
npm run test

# single currency
npm run test -- src/TYPES/BRL/test.ts
```
