type TExchange = {
  lang: string | 'pt-BR' | 'en-US'
  currency: string | 'BRL' | 'USD'
  removePrefix: (value: string) => string
}
type TTYPES = {
  USD: TExchange
  BRL: TExchange
}
export const TYPES: TTYPES
export type TCurrencyOptions = {
  symbol?: boolean
  isEmpty?: boolean
  money?: TExchange
}
type TOptions = TCurrencyOptions | 'INPUT'
type TCurrencyProps = (floatValue: number, options?: TOptions) => string

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
export interface CurrencyProps {
  floatValue: number
  stringValue: string
}

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
) => CurrencyProps
type CONFIGUREProps = {
  money: TExchange
}
declare const CONFIGURE: ({ money }: CONFIGUREProps) => void
declare const Make: {
  currency: typeof currency
  currencyFn: (
    value: string,
    options?: TCurrencyOptions | undefined
  ) => CurrencyProps
  TYPES: TTYPES
  CONFIGURE: ({ money }: CONFIGUREProps) => void
}

declare module 'make-currency' {
  export { Make as default, currency, currencyFn, TYPES, CONFIGURE }
}
