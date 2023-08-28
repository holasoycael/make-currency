// models
import { currency } from '@models/currency'

// types and interfaces
import { TCurrency } from './types'
import { TCurrencyOptions } from '@typings/Models'

/**
 * Returns string and float value of currency.
 *
 * @example
 * Here's a simple example:
 * ```
 * currencyFn('29,99') // Prints { floatValue: 29.99, stringValue: '29,99' }:
 * ```
 * @param {string} value
 * @param {object} options
 * @returns {string}
 */
const currencyFn = (value: string, options?: TCurrencyOptions): TCurrency => {
  let currenctValue = value.padStart(3, '0')
  currenctValue = currenctValue.replace(/\D/g, '')
  currenctValue = currenctValue.replace(/(\d)(\d{2})$/, '$1,$2')
  currenctValue = currenctValue.replace(/(?=(\d{3})+(\D))\B/g, '.')

  const [thousand, decimal] = currenctValue
    .padStart(3, '0')
    .replace(/(\d)(\d{2})$/, '$1,$2')
    .split(',')

  const parseThousand = thousand.replace(/\D/g, '')
  const parseFloatValue = `${parseThousand}.${decimal}`
  const floatValue = parseFloat(parseFloatValue)

  const __options: TCurrencyOptions = {
    symbol: options?.symbol ?? false,
    isEmpty: options?.isEmpty ?? true,
    money: options?.money
  }

  return { floatValue, stringValue: currency(floatValue, __options) }
}

export { currencyFn }
