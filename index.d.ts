export type TCurrency =
  | 'AUD'
  | 'AED'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BZD'
  | 'CAD'
  | 'CHF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EUR'
  | 'EGP'
  | 'ETB'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GGP'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'INR'
  | 'IDR'
  | 'ILS'
  | 'IMP'
  | 'ISK'
  | 'JEP'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'MXN'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SRD'
  | 'SVC'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'USD'
  | 'UAH'
  | 'UGX'
  | 'UYU'
  | 'UZS'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XCD'
  | 'XOF'
  | 'XPF'
  | 'ZAR'
  | 'ZMW'

export type TLanguage =
  | 'pt-BR'
  | 'en-US'
  | 'pt-PT'
  | 'ja-JP'
  | 'es-MX'
  | 'ru-RU'
  | 'en-GB'
  | 'en-AU'
  | 'ar-AE'
  | 'sq-AL'
  | 'hy-AM'
  | 'nl-NL'
  | 'pt-AO'
  | 'es-AR'
  | 'nl-AW'
  | 'az-AZ'
  | 'bs-BA'
  | 'en-BB'
  | 'bn-BD'
  | 'bg-BG'
  | 'ar-BH'
  | 'en-BM'
  | 'ms-BN'
  | 'es-BO'
  | 'en-BS'
  | 'dz-BT'
  | 'en-BW'
  | 'en-BZ'
  | 'fr-CA'
  | 'en-CA'
  | 'fr-CH'
  | 'de-CH'
  | 'it-CH'
  | 'es-CL'
  | 'zh-CN'
  | 'es-CO'
  | 'es-CR'
  | 'pt-CV'
  | 'cs-CZ'
  | 'fr-DJ'
  | 'da-DK'
  | 'es-DO'
  | 'ar-DZ'
  | 'ar-EG'
  | 'am-ET'
  | 'en-FJ'
  | 'en-FK'
  | 'ka-GE'
  | 'ak-GH'
  | 'es-GT'
  | 'es-HN'
  | 'hr-HR'
  | 'ht-HT'
  | 'hu-HU'
  | 'hi-IN'
  | 'id-ID'
  | 'he-IL'
  | 'is-IS'
  | 'it-IT'
  | 'pl-PL'
  | 'de-DE'
  | 'fr-FR'
  | 'es-ES'
  | 'ko-KR'
  | 'th-TH'
  | 'tr-TR'
  | 'uk-UA'
  | 'vi-VN'
  | 'af-ZA'
  | 'zu-ZA'

export type TExchange = {
  currency: TCurrency
  lang: string | TLanguage
  removePrefix: (value: string) => string
  replaceSymbol?: (value: string) => string
}

export type TTYPES = {
  [key in TCurrency]: TExchange
}

export declare const TYPES: TTYPES

export type TCurrencyOptions = {
  symbol?: boolean
  isEmpty?: boolean
  money?: TExchange
}

export type TOptions = TCurrencyOptions | 'INPUT'

export type TCurrencyProps = (floatValue: number, options?: TOptions) => string

/**
 * Returns a formatted value of currency.
 *
 * @example
 * Here's a simple example:
 * ```
 * currency(2.99) // Prints "$2.99":
 * ```
 * @param {number} floatValue
 * @returns {string}
 */
export declare const currency: (
  floatValue: number,
  options?: TOptions
) => string

export interface ICurrencyProps {
  floatValue: number
  stringValue: string
}

// For backwards compatibility
export type CurrencyProps = ICurrencyProps

/**
 * Returns string and float value of currency.
 *
 * @example
 * Here's a simple example:
 * ```
 * currencyFn('29,99') // Prints { floatValue: 29.99, stringValue: '29,99' }:
 * ```
 * @param {string} value
 * @returns {string}
 */
export declare const currencyFn: (
  value: string,
  options?: TCurrencyOptions
) => ICurrencyProps

export type CONFIGUREProps = {
  money: TExchange
}

export declare const CONFIGURE: ({ money }: CONFIGUREProps) => void

export declare const Make: {
  currency: typeof currency
  currencyFn: (
    value: string,
    options?: TCurrencyOptions | undefined
  ) => ICurrencyProps
  TYPES: TTYPES
  CONFIGURE: ({ money }: CONFIGUREProps) => void
}

declare module 'make-currency' {
  export {
    Make as default,
    currency,
    currencyFn,
    TYPES,
    CONFIGURE,
    TCurrency,
    TLanguage,
    TExchange,
    TTYPES,
    TCurrencyOptions,
    TOptions,
    TCurrencyProps,
    ICurrencyProps,
    CurrencyProps,
    CONFIGUREProps
  }
}
