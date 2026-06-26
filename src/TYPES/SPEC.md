# SPEC — TExchange Technical Specification

This document defines the technical contract and behavioral rules for every currency configuration in `src/TYPES/`.

---

## 1. TExchange Contract

```ts
// src/typings/Locale.ts

export type TExchange = {
  lang: TLanguage
  currency: TCurrency
  removePrefix: (value: string) => string
  replaceSymbol?: (value: string) => string
}
```

### Fields

| Field           | Type                        | Required | Description                                                                                                       |
| :-------------- | :-------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------- |
| `lang`          | `TLanguage`                 | ✅       | BCP 47 locale tag used as the first argument to `Intl.NumberFormat`                                               |
| `currency`      | `TCurrency`                 | ✅       | ISO 4217 currency code passed to `Intl.NumberFormat`                                                              |
| `removePrefix`  | `(value: string) => string` | ✅       | Strips the currency symbol from the fully formatted string. Called when `symbol: false` is passed to `currency()` |
| `replaceSymbol` | `(value: string) => string` | ❌       | Normalizes the symbol produced by `Intl.NumberFormat`. Applied before `removePrefix`                              |

---

## 2. Formatting Pipeline

The `currency(floatValue, options)` model in `src/models/currency/index.ts` applies the following pipeline:

```
floatValue
  │
  ▼
Intl.NumberFormat(lang, {
  style: 'currency',
  currency: currency,
  useGrouping: true,
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(floatValue)
  │
  ▼
.replace(/[\u00A0]/g, ' ')      ← normalize non-breaking spaces → regular space
  │
  ▼
replaceSymbol(value)            ← [optional] normalize the symbol string
  │
  ▼
primaryPrice                    ← value with symbol (returned when symbol: true)
  │
  ▼
removePrefix(primaryPrice)      ← strip the symbol
  │
  ▼
formatValue                     ← value without symbol (returned when symbol: false)
```

### Return value

```ts
// symbol: true  (default)
return primaryPrice // e.g. "R$ 1.234,56"

// symbol: false
return formatValue // e.g. "1.234,56"

// floatValue === 0 && isEmpty: true
return ''
```

---

## 3. removePrefix Rules

`removePrefix` receives the `primaryPrice` string (after `replaceSymbol` has been applied) and must return the numeric portion only — no symbol, no extra whitespace.

### 3.1 Prefix symbol (symbol comes before the number)

Use `value.slice(N)` where `N` equals the number of leading characters occupied by the symbol and its separator.

```ts
// USD → "$1,234.56"      → slice(1)  → "1,234.56"
// BRL → "R$ 1.234,56"   → slice(3)  → "1.234,56"
// CHF → "Fr. 1'234.56"  → slice(4)  → "1'234.56"
```

### 3.2 Suffix symbol (symbol comes after the number)

Use `value.slice(0, -N)` where `N` equals the number of trailing characters occupied by the symbol and its separator.

```ts
// ALL  → "1 234,56 L"    → slice(0, -2)  → "1 234,56"
// RUB  → "1 234,56 ₽"    → slice(0, -2)  → "1 234,56"
// PLN  → "1 234,56 zł"   → slice(0, -3)  → "1 234,56"
```

### 3.3 Chains with Unicode cleanup

When the locale produces invisible Unicode control characters (e.g. RTL mark `\u200F`), the chain must remove them explicitly.

```ts
// AED (ar-AE) — RTL mark is embedded in the formatted value
removePrefix: (value: string) =>
  value
    .slice(0, -4)
    .replace(/\u200F/g, '')
    .trim()
```

---

## 4. replaceSymbol Rules

`replaceSymbol` is **optional** and must only be used when the raw `Intl.NumberFormat` output requires correction before further processing. It is applied to the raw formatted string **before** `removePrefix`.

### When to use it

| Situation                                                             | Example                                            |
| :-------------------------------------------------------------------- | :------------------------------------------------- |
| `Intl` outputs a longer or dotted symbol that should be shortened     | `AED`: `د.إ.` → `د.إ`                              |
| `Intl` outputs the ISO code instead of the conventional symbol        | `CHF`: `CHF` → `Fr.`                               |
| `Intl` uses a different encoding for a separator character            | `CHF`: `'` (apostrophe) → `'` (right single quote) |
| A proxy locale is used for a currency `Intl` doesn't natively support | `JPY`: uses `en-US/USD` then replaces `$` → `¥`    |
| `Intl` outputs a long word as the symbol                              | `ALL`: `Lekë` → `L`                                |

### When NOT to use it

- When the raw `Intl` symbol is already correct.
- For numeric formatting differences (grouping, decimal separator) — those are determined by `lang`.
- For whitespace normalization — use `.trim()` inside `removePrefix` instead.

---

## 5. Proxy Locale Pattern

Some currencies are not well-supported by `Intl.NumberFormat` in all environments. The workaround is to use a well-supported locale/currency pair and then correct the symbol via `replaceSymbol`.

```ts
// JPY — uses en-US/USD internally, then swaps the symbol
export default {
  lang: 'en-US',
  currency: 'USD',
  removePrefix: (value: string) => value.slice(1),
  replaceSymbol: (value: string) => value.replace('$', '¥')
} satisfies TExchange
```

> **Caution:** When using a proxy locale, `removePrefix` must be written against the **post-`replaceSymbol`** string, not the raw `Intl` output.

---

## 6. Naming & File Conventions

| File       | Responsibility                                                        |
| :--------- | :-------------------------------------------------------------------- |
| `index.ts` | Currency configuration — exports the `TExchange`-satisfying object    |
| `test.ts`  | Unit tests — one `describe` block per locale, one `it` per test value |

No other files are allowed inside a currency folder. Business logic and helpers belong in `src/models/` or `src/utils/`.

---

## 7. Test Specification

Every `test.ts` must cover the following 9 numeric inputs:

| Input        | Purpose                                      |
| :----------- | :------------------------------------------- |
| `0.01`       | Smallest non-zero value — two decimal places |
| `0.12`       | Two significant decimal digits               |
| `1`          | Integer — forces two-decimal display         |
| `1.23`       | Simple float                                 |
| `748.99`     | Three-digit integer part                     |
| `1234.56`    | First value with thousands separator         |
| `12345.67`   | Five-digit integer part                      |
| `123456.78`  | Six-digit integer part                       |
| `1234567.89` | Seven-digit integer part                     |

Each test case must assert **two expectations**:

```ts
// 1. Without symbol
expect(currency(value, { symbol: false, money: XYZ })).toBe('...')

// 2. With symbol (default)
expect(currency(value, { money: XYZ })).toBe('...')
```

The `describe` label must use the locale tag in brackets: `'[pt-BR]'`.

---

## 8. Supported Currencies (139 total)

| Code | Name                              | Locale          |
| :--- | :-------------------------------- | :-------------- |
| AED  | Dirham dos Emirados Árabes Unidos | `ar-AE`         |
| ALL  | Lek albanês                       | `sq-AL`         |
| AMD  | Dram armênio                      | `hy-AM`         |
| ANG  | Florim das Antilhas Holandesas    | `nl-NL`         |
| AOA  | Kwanza angolano                   | `pt-AO`         |
| ARS  | Peso argentino                    | `es-AR`         |
| AUD  | Dólar australiano                 | `en-AU`         |
| AWG  | Florim arubano                    | `nl-AW`         |
| AZN  | Manat azeri                       | `az-AZ`         |
| BAM  | Marco bósnio-herzegovino          | `bs-BA`         |
| BBD  | Dólar barbadense                  | `en-BB`         |
| BDT  | Taka bengali                      | `bn-BD`         |
| BGN  | Lev búlgaro                       | `bg-BG`         |
| BHD  | Dinar bareinita                   | `ar-BH`         |
| BMD  | Dólar bermudense                  | `en-BM`         |
| BND  | Dólar bruneíno                    | `ms-BN`         |
| BOB  | Boliviano                         | `es-BO`         |
| BRL  | Real brasileiro                   | `pt-BR`         |
| BSD  | Dólar bahamense                   | `en-BS`         |
| BTN  | Ngultrum butanês                  | `dz-BT`         |
| BWP  | Pula de Botsuana                  | `en-BW`         |
| BZD  | Dólar belizenho                   | `en-BZ`         |
| CAD  | Dólar canadense                   | `en-CA`         |
| CHF  | Franco suíço                      | `de-CH`         |
| CLP  | Peso chileno                      | `es-CL`         |
| CNY  | Iuane chinês                      | `zh-CN`         |
| COP  | Peso colombiano                   | `es-CO`         |
| CRC  | Colón costarriquenho              | `es-CR`         |
| CVE  | Escudo cabo-verdiano              | `pt-CV`         |
| CZK  | Coroa tcheca                      | `cs-CZ`         |
| DJF  | Franco djiboutiense               | `fr-DJ`         |
| DKK  | Coroa dinamarquesa                | `da-DK`         |
| DOP  | Peso dominicano                   | `es-DO`         |
| DZD  | Dinar argelino                    | `ar-DZ`         |
| EGP  | Libra egípcia                     | `ar-EG`         |
| ETB  | Birr etíope                       | `am-ET`         |
| EUR  | Euro                              | `pt-PT`         |
| FJD  | Dólar fijiano                     | `en-FJ`         |
| FKP  | Libra das Malvinas                | `en-FK`         |
| GBP  | Libra esterlina                   | `en-GB`         |
| GEL  | Lari georgiano                    | `ka-GE`         |
| GGP  | Libra de Guernsey                 | `en-GB`         |
| GHS  | Cedi ganês                        | `ak-GH`         |
| GIP  | Libra de Gibraltar                | `en-GB`         |
| GMD  | Dalasi gambiano                   | `en-GB`         |
| GNF  | Franco guineense                  | `fr-FR`         |
| GTQ  | Quetzal guatemalteco              | `es-GT`         |
| GYD  | Dólar guianense                   | `en-GB`         |
| HKD  | Dólar de Hong Kong                | `zh-CN`         |
| HNL  | Lempira hondurenha                | `es-HN`         |
| HRK  | Kuna croata                       | `hr-HR`         |
| HTG  | Gourde haitiano                   | `ht-HT`         |
| HUF  | Forint húngaro                    | `hu-HU`         |
| IDR  | Rupia indonésia                   | `id-ID`         |
| ILS  | Novo shekel israelense            | `he-IL`         |
| IMP  | Libra de Man                      | `en-GB`         |
| INR  | Rúpia indiana                     | `hi-IN`         |
| ISK  | Coroa islandesa                   | `is-IS`         |
| JEP  | Libra de Jersey                   | `en-GB`         |
| JMD  | Dólar jamaicano                   | `en-GB`         |
| JOD  | Dinar jordaniano                  | `ar-EG`         |
| JPY  | Iene japonês                      | `en-US` (proxy) |
| KES  | Xelim queniano                    | `en-GB`         |
| KGS  | Som quirguiz                      | `ru-RU`         |
| KHR  | Riel cambojano                    | `en-US`         |
| KMF  | Franco comoriano                  | `fr-FR`         |
| KRW  | Won sul-coreano                   | `ko-KR`         |
| KWD  | Dinar kuwaitiano                  | `ar-EG`         |
| KYD  | Dólar das Ilhas Cayman            | `en-GB`         |
| KZT  | Tenge cazaque                     | `ru-RU`         |
| LAK  | Kip laosiano                      | `en-US`         |
| LBP  | Libra libanesa                    | `ar-EG`         |
| LKR  | Rupia do Sri Lanka                | `en-GB`         |
| LRD  | Dólar liberiano                   | `en-US`         |
| LSL  | Loti lesotiano                    | `en-US`         |
| MAD  | Dirham marroquino                 | `fr-FR`         |
| MDL  | Leu moldávio                      | `ru-RU`         |
| MGA  | Ariary malgaxe                    | `fr-FR`         |
| MKD  | Dinar macedônio                   | `en-GB`         |
| MNT  | Tugrik mongol                     | `en-US`         |
| MOP  | Pataca macaense                   | `zh-CN`         |
| MRU  | Ouguiya mauritana                 | `fr-FR`         |
| MUR  | Rupia mauriciana                  | `en-GB`         |
| MVR  | Rufia maldiva                     | `en-US`         |
| MWK  | Kwacha malauiano                  | `en-GB`         |
| MXN  | Peso mexicano                     | `es-MX`         |
| MYR  | Ringgit malaio                    | `en-US`         |
| MZN  | Metical moçambicano               | `pt-PT`         |
| NAD  | Dólar namibiano                   | `en-GB`         |
| NGN  | Naira nigeriana                   | `en-GB`         |
| NIO  | Córdoba nicaraguense              | `es-ES`         |
| NOK  | Coroa norueguesa                  | `da-DK`         |
| NPR  | Rupia nepalesa                    | `hi-IN`         |
| NZD  | Dólar neozelandês                 | `en-GB`         |
| OMR  | Rial omanense                     | `ar-EG`         |
| PAB  | Balboa panamenho                  | `es-ES`         |
| PEN  | Sol peruano                       | `es-ES`         |
| PGK  | Kina papuásia                     | `en-AU`         |
| PHP  | Peso filipino                     | `en-US`         |
| PKR  | Rupia paquistanesa                | `en-GB`         |
| PLN  | Zloty polonês                     | `pl-PL`         |
| PYG  | Guarani paraguaio                 | `es-ES`         |
| QAR  | Rial catariano                    | `ar-EG`         |
| RON  | Leu romeno                        | `en-GB`         |
| RSD  | Dinar sérvio                      | `en-GB`         |
| RUB  | Rublo russo                       | `ru-RU`         |
| RWF  | Franco ruandês                    | `fr-FR`         |
| SAR  | Rial saudita                      | `ar-EG`         |
| SBD  | Dólar das Ilhas Salomão           | `en-AU`         |
| SCR  | Rupia seichelense                 | `en-GB`         |
| SEK  | Coroa sueca                       | `is-IS`         |
| SGD  | Dólar de Singapura                | `en-US`         |
| SHP  | Libra de Santa Helena             | `en-GB`         |
| SLL  | Leone de Serra Leoa               | `en-GB`         |
| SRD  | Dólar surinamês                   | `nl-NL`         |
| SVC  | Colón salvadorenho                | `es-ES`         |
| SZL  | Lilangeni suazi                   | `en-GB`         |
| THB  | Baht tailandês                    | `th-TH`         |
| TJS  | Somoni tadjique                   | `ru-RU`         |
| TMT  | Manat turcomeno                   | `ru-RU`         |
| TND  | Dinar tunisiano                   | `ar-EG`         |
| TOP  | Pa'anga tonganesa                 | `en-AU`         |
| TRY  | Lira turca                        | `tr-TR`         |
| TTD  | Dólar de Trinidad e Tobago        | `en-GB`         |
| TWD  | Novo dólar taiwanês               | `zh-CN`         |
| TZS  | Xelim tanzaniano                  | `en-GB`         |
| UAH  | Hryvnia ucraniano                 | `uk-UA`         |
| UGX  | Xelim ugandês                     | `en-GB`         |
| USD  | Dólar americano                   | `en-US`         |
| UYU  | Peso uruguaio                     | `es-ES`         |
| UZS  | Som uzbeque                       | `ru-RU`         |
| VND  | Dong vietnamita                   | `vi-VN`         |
| VUV  | Vatu de Vanuatu                   | `en-AU`         |
| WST  | Tala samoana                      | `en-AU`         |
| XCD  | Dólar do Caribe Oriental          | `en-GB`         |
| XOF  | Franco CFA Ocidental              | `fr-FR`         |
| XPF  | Franco CFP                        | `fr-FR`         |
| ZAR  | Rand sul-africano                 | `af-ZA`         |
| ZMW  | Kwacha zambiano                   | `en-GB`         |
