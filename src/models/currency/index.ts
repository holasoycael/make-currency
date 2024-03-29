// modules
import { configure } from '@modules/Configure'

// types and interfaces
import { TCurrencyProps } from './types'

function convert(numero: number) {
  const partes = numero.toString().split('.')
  let numeroFormatado = partes[0]

  if (partes[1]) {
    numeroFormatado += '.' + partes[1].substring(0, 2)
  } else {
    numeroFormatado += '.00'
  }

  return numeroFormatado
}

/**
 * Returns a formatted value of currency.
 *
 * @example
 * Here's a simple example:
 * ```
 * currency(2.99) // Prints "$2.99":
 * ```
 * @param {number} floatValue
 * @param {object} options - optional
 * @version 0.0.4
 * @see https://github.com/holasoycael/make-currency
 * @returns {string}
 */
const currency: TCurrencyProps = (floatValue, options) => {
  let symbol, isEmpty, money

  if (options === 'INPUT') {
    symbol = false
    isEmpty = true
    money = configure.CURRENT
  } else {
    symbol = options?.symbol ?? true
    isEmpty = options?.isEmpty ?? false
    money = options?.money ?? configure.CURRENT
  }

  const current = parseFloat(convert(floatValue))
  const defaultPrice = current.toLocaleString(money.lang, {
    style: 'currency',
    currency: money.currency
  })
  const primaryPrice = defaultPrice.replace(/[\u00A0]/g, ' ')
  const formatValue = money.removePrefix(primaryPrice)
  const value = symbol ? primaryPrice : formatValue

  return floatValue ? value : isEmpty ? '' : value
}

export { currency }
