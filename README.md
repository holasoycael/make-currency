# `Make Currency`

[![npm](https://img.shields.io/npm/v/make-currency)](https://www.npmjs.com/package/make-currency) [![NPM](https://img.shields.io/npm/l/make-currency)](https://www.npmjs.com/package/make-currency)


| Statements                                                                               | Branches                                                                             | Functions                                                                              | Lines                                                                          |
|------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

---

Format, display and parse monetary values in JavaScript with support for **139 currencies** and locale-aware formatting powered by `Intl.NumberFormat`.

## Installing
Using npm:
```sh
npm install make-currency
```
Using yarn:
```sh
yarn add make-currency
```
Using jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/make-currency/dist/make.min.js"></script>
```
Using unpkg CDN:
```html
<script src="https://unpkg.com/make-currency/dist/make.min.js"></script>
```

## Usage
* [Vanilla JS](https://stackblitz.com/edit/vanillajs-make-currency) → [Preview](https://vanillajs-make-currency.stackblitz.io/)
* [React](https://stackblitz.com/edit/react-make-currency) → [Preview](https://react-make-currency.stackblitz.io/)

---

## `currency(floatValue, options?)`

Formats a numeric value into a locale-aware currency string.

```ts
import { currency, TYPES } from 'make-currency'

// Default (USD)
currency(1234.56)                                    // "$1,234.56"

// Without symbol
currency(1234.56, { symbol: false })                 // "1,234.56"

// With a specific currency
currency(1234.56, { money: TYPES.BRL })              // "R$ 1.234,56"
currency(1234.56, { symbol: false, money: TYPES.BRL }) // "1.234,56"

// Empty string when value is zero
currency(0, { isEmpty: true })                       // ""
currency(0, { isEmpty: false })                      // "$0.00"
```

### Options

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `symbol` | `boolean` | `true` | Include the currency symbol in the output |
| `isEmpty` | `boolean` | `false` | Return `""` when the value is `0` |
| `money` | `TExchange` | `USD` | Currency configuration (locale + code + transforms) |

### Signature

```ts
function currency(floatValue: number, options?: TCurrencyOptions | 'INPUT'): string
```

> Pass `'INPUT'` as options to use the global currency (`CONFIGURE`) with `symbol: false` and `isEmpty: true` — ideal for controlled input components.

---

## `currencyFn(value, options?)`

Parses a formatted currency **string** (e.g. from an input field) and returns both its numeric and formatted representations. Useful for building real-time currency inputs.

```ts
import { currencyFn } from 'make-currency'

currencyFn('123456')
// { floatValue: 1234.56, stringValue: '1,234.56' }

currencyFn('1')
// { floatValue: 0.01, stringValue: '0.01' }

currencyFn('')
// { floatValue: 0, stringValue: '' }
```

### Return type

```ts
interface TCurrency {
  floatValue: number   // The numeric value (e.g. 1234.56)
  stringValue: string  // The formatted string without symbol (e.g. '1,234.56')
}
```

### Options

Same as `currency()` — `symbol`, `isEmpty`, and `money`. Defaults to `symbol: false` and `isEmpty: true`.

---

## `CONFIGURE({ money })`

Sets the **global default currency** used by `currency()` and `currencyFn()` when no `money` option is provided.

```ts
import { CONFIGURE, TYPES, currency, currencyFn } from 'make-currency'

// Set BRL as the global currency
CONFIGURE({ money: TYPES.BRL })

// Now all calls without `money` use BRL
currency(1234.56)          // "R$ 1.234,56"
currencyFn('123456')       // { floatValue: 1234.56, stringValue: '1.234,56' }
```

> The default is `USD` if `CONFIGURE` is never called.

---

## Display currency values

How digits typed into an input field map to the formatted output (example using BRL):

| Typed      | Input value    | Float value  | String value   |
| :---       | :---           | :---         | :---           |
|            | 0,00           | 0.00         | 0,00           |
| 1          | 0,01           | 0.01         | 0,01           |
| 12         | 0,12           | 0.12         | 0,12           |
| 123        | 1,23           | 1.23         | 1,23           |
| 1234       | 12,34          | 12.34        | 12,34          |
| 12345      | 123,45         | 123.45       | 123,45         |
| 123456     | 1.234,56       | 1234.56      | 1.234,56       |
| 1234567    | 12.345,67      | 12345.67     | 12.345,67      |
| 12345678   | 123.456,78     | 123456.78    | 123.456,78     |
| 123456789  | 1.234.567,89   | 1234567.89   | 1.234.567,89   |

---

## Supported Currencies

<details>
<summary>See all 139 supported currencies</summary>

| # | Code | Symbol | Currency | Locale |
| :--- | :--- | :--- | :--- | :--- |
| 1 | AED | د.إ | Dirham dos Emirados Árabes Unidos | `ar-AE` |
| 2 | ALL | L | Lek albanês | `sq-AL` |
| 3 | AMD | ֏ | Dram armênio | `hy-AM` |
| 4 | ANG | ƒ | Florim das Antilhas Holandesas | `nl-NL` |
| 5 | AOA | Kz | Kwanza angolano | `pt-AO` |
| 6 | ARS | $ | Peso argentino | `es-AR` |
| 7 | AUD | $ | Dólar australiano | `en-AU` |
| 8 | AWG | Afl. | Florim arubano | `nl-AW` |
| 9 | AZN | ₼ | Manat azeri | `az-AZ` |
| 10 | BAM | KM | Marco bósnio-herzegovino | `bs-BA` |
| 11 | BBD | $ | Dólar barbadense | `en-BB` |
| 12 | BDT | ৳ | Taka bengali | `bn-BD` |
| 13 | BGN | лв. | Lev búlgaro | `bg-BG` |
| 14 | BHD | د.ب | Dinar bareinita | `ar-BH` |
| 15 | BMD | $ | Dólar bermudense | `en-BM` |
| 16 | BND | $ | Dólar bruneíno | `ms-BN` |
| 17 | BOB | Bs | Boliviano | `es-BO` |
| 18 | BRL | R$ | Real brasileiro | `pt-BR` |
| 19 | BSD | $ | Dólar bahamense | `en-BS` |
| 20 | BTN | Nu. | Ngultrum butanês | `dz-BT` |
| 21 | BWP | P | Pula de Botsuana | `en-BW` |
| 22 | BZD | $ | Dólar belizenho | `en-BZ` |
| 23 | CAD | $ | Dólar canadense | `en-CA` |
| 24 | CHF | Fr. | Franco suíço | `de-CH` |
| 25 | CLP | $ | Peso chileno | `es-CL` |
| 26 | CNY | ¥ | Iuane chinês | `zh-CN` |
| 27 | COP | $ | Peso colombiano | `es-CO` |
| 28 | CRC | ₡ | Colón costarriquenho | `es-CR` |
| 29 | CVE | $ | Escudo cabo-verdiano | `pt-CV` |
| 30 | CZK | Kč | Coroa tcheca | `cs-CZ` |
| 31 | DJF | Fdj | Franco djiboutiense | `fr-DJ` |
| 32 | DKK | kr. | Coroa dinamarquesa | `da-DK` |
| 33 | DOP | $ | Peso dominicano | `es-DO` |
| 34 | DZD | د.ج | Dinar argelino | `ar-DZ` |
| 35 | EGP | E£ | Libra egípcia | `ar-EG` |
| 36 | ETB | ብር | Birr etíope | `am-ET` |
| 37 | EUR | € | Euro | `pt-PT` |
| 38 | FJD | $ | Dólar fijiano | `en-FJ` |
| 39 | FKP | £ | Libra das Malvinas | `en-FK` |
| 40 | GBP | £ | Libra esterlina | `en-GB` |
| 41 | GEL | ₾ | Lari georgiano | `ka-GE` |
| 42 | GGP | £ | Libra de Guernsey | `en-GB` |
| 43 | GHS | GH₵ | Cedi ganês | `ak-GH` |
| 44 | GIP | £ | Libra de Gibraltar | `en-GB` |
| 45 | GMD | D | Dalasi gambiano | `en-GB` |
| 46 | GNF | FG | Franco guineense | `fr-FR` |
| 47 | GTQ | Q | Quetzal guatemalteco | `es-GT` |
| 48 | GYD | $ | Dólar guianense | `en-GB` |
| 49 | HKD | HK$ | Dólar de Hong Kong | `zh-CN` |
| 50 | HNL | L | Lempira hondurenha | `es-HN` |
| 51 | HRK | kn | Kuna croata | `hr-HR` |
| 52 | HTG | G | Gourde haitiano | `ht-HT` |
| 53 | HUF | Ft | Forint húngaro | `hu-HU` |
| 54 | IDR | Rp | Rupia indonésia | `id-ID` |
| 55 | ILS | ₪ | Novo shekel israelense | `he-IL` |
| 56 | IMP | £ | Libra de Man | `en-GB` |
| 57 | INR | ₹ | Rúpia indiana | `hi-IN` |
| 58 | ISK | kr. | Coroa islandesa | `is-IS` |
| 59 | JEP | £ | Libra de Jersey | `en-GB` |
| 60 | JMD | $ | Dólar jamaicano | `en-GB` |
| 61 | JOD | د.أ | Dinar jordaniano | `ar-EG` |
| 62 | JPY | ¥ | Iene japonês | `en-US` |
| 63 | KES | KSh | Xelim queniano | `en-GB` |
| 64 | KGS | сом | Som quirguiz | `ru-RU` |
| 65 | KHR | ៛ | Riel cambojano | `en-US` |
| 66 | KMF | FC | Franco comoriano | `fr-FR` |
| 67 | KRW | ₩ | Won sul-coreano | `ko-KR` |
| 68 | KWD | د.ك | Dinar kuwaitiano | `ar-EG` |
| 69 | KYD | $ | Dólar das Ilhas Cayman | `en-GB` |
| 70 | KZT | ₸ | Tenge cazaque | `ru-RU` |
| 71 | LAK | ₭ | Kip laosiano | `en-US` |
| 72 | LBP | L£ | Libra libanesa | `ar-EG` |
| 73 | LKR | Rs | Rupia do Sri Lanka | `en-GB` |
| 74 | LRD | $ | Dólar liberiano | `en-US` |
| 75 | LSL | L | Loti lesotiano | `en-US` |
| 76 | MAD | MAD | Dirham marroquino | `fr-FR` |
| 77 | MDL | MDL | Leu moldávio | `ru-RU` |
| 78 | MGA | Ar | Ariary malgaxe | `fr-FR` |
| 79 | MKD | ден | Dinar macedônio | `en-GB` |
| 80 | MNT | ₮ | Tugrik mongol | `en-US` |
| 81 | MOP | MOP$ | Pataca macaense | `zh-CN` |
| 82 | MRU | UM | Ouguiya mauritana | `fr-FR` |
| 83 | MUR | Rs | Rupia mauriciana | `en-GB` |
| 84 | MVR | Rf. | Rufia maldiva | `en-US` |
| 85 | MWK | MK | Kwacha malauiano | `en-GB` |
| 86 | MXN | $ | Peso mexicano | `es-MX` |
| 87 | MYR | RM | Ringgit malaio | `en-US` |
| 88 | MZN | MTn | Metical moçambicano | `pt-PT` |
| 89 | NAD | $ | Dólar namibiano | `en-GB` |
| 90 | NGN | ₦ | Naira nigeriana | `en-GB` |
| 91 | NIO | C$ | Córdoba nicaraguense | `es-ES` |
| 92 | NOK | kr. | Coroa norueguesa | `da-DK` |
| 93 | NPR | Rs | Rupia nepalesa | `hi-IN` |
| 94 | NZD | $ | Dólar neozelandês | `en-GB` |
| 95 | OMR | ر.ع | Rial omanense | `ar-EG` |
| 96 | PAB | B/. | Balboa panamenho | `es-ES` |
| 97 | PEN | S/ | Sol peruano | `es-ES` |
| 98 | PGK | K | Kina papuásia | `en-AU` |
| 99 | PHP | ₱ | Peso filipino | `en-US` |
| 100 | PKR | Rs | Rupia paquistanesa | `en-GB` |
| 101 | PLN | zł | Zloty polonês | `pl-PL` |
| 102 | PYG | ₲ | Guarani paraguaio | `es-ES` |
| 103 | QAR | ر.ق | Rial catariano | `ar-EG` |
| 104 | RON | lei | Leu romeno | `en-GB` |
| 105 | RSD | din. | Dinar sérvio | `en-GB` |
| 106 | RUB | ₽ | Rublo russo | `ru-RU` |
| 107 | RWF | FR | Franco ruandês | `fr-FR` |
| 108 | SAR | ر.س | Rial saudita | `ar-EG` |
| 109 | SBD | $ | Dólar das Ilhas Salomão | `en-AU` |
| 110 | SCR | Rs | Rupia seichelense | `en-GB` |
| 111 | SEK | kr. | Coroa sueca | `is-IS` |
| 112 | SGD | $ | Dólar de Singapura | `en-US` |
| 113 | SHP | £ | Libra de Santa Helena | `en-GB` |
| 114 | SLL | Le | Leone de Serra Leoa | `en-GB` |
| 115 | SRD | $ | Dólar surinamês | `nl-NL` |
| 116 | SVC | ₡ | Colón salvadorenho | `es-ES` |
| 117 | SZL | E | Lilangeni suazi | `en-GB` |
| 118 | THB | ฿ | Baht tailandês | `th-TH` |
| 119 | TJS | SM | Somoni tadjique | `ru-RU` |
| 120 | TMT | m. | Manat turcomeno | `ru-RU` |
| 121 | TND | د.ت | Dinar tunisiano | `ar-EG` |
| 122 | TOP | T$ | Pa'anga tonganesa | `en-AU` |
| 123 | TRY | ₺ | Lira turca | `tr-TR` |
| 124 | TTD | $ | Dólar de Trinidad e Tobago | `en-GB` |
| 125 | TWD | NT$ | Novo dólar taiwanês | `zh-CN` |
| 126 | TZS | TSh | Xelim tanzaniano | `en-GB` |
| 127 | UAH | ₴ | Hryvnia ucraniano | `uk-UA` |
| 128 | UGX | USh | Xelim ugandês | `en-GB` |
| 129 | USD | $ | Dólar americano | `en-US` |
| 130 | UYU | $ | Peso uruguaio | `es-ES` |
| 131 | UZS | сўм | Som uzbeque | `ru-RU` |
| 132 | VND | ₫ | Dong vietnamita | `vi-VN` |
| 133 | VUV | VT | Vatu de Vanuatu | `en-AU` |
| 134 | WST | WS$ | Tala samoana | `en-AU` |
| 135 | XCD | $ | Dólar do Caribe Oriental | `en-GB` |
| 136 | XOF | CFA | Franco CFA Ocidental | `fr-FR` |
| 137 | XPF | CFPF | Franco CFP | `fr-FR` |
| 138 | ZAR | R | Rand sul-africano | `af-ZA` |
| 139 | ZMW | ZK | Kwacha zambiano | `en-GB` |

</details>

---

## Quick Reference

```ts
import Make, { currency, currencyFn, TYPES, CONFIGURE } from 'make-currency'
```

| Export | Description |
| :--- | :--- |
| `currency` | Formats a number into a currency string |
| `currencyFn` | Parses a string input into `{ floatValue, stringValue }` |
| `TYPES` | Object containing all 139 currency configurations |
| `CONFIGURE` | Sets the global default currency |
| `Make` | Default export bundling all of the above |

---

## Issues

Feel free to raise an issue on [Github](https://github.com/holasoycael/make-currency/issues) if you find a bug or have a feature request.
