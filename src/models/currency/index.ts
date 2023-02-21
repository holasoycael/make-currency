// modules
import en from '@locale/en-US'
export { default as pt } from '@locale/pt-BR'

// types and interfaces
import { TCurrencyProps } from './types'

const defaultValues = {
  addPrefix: false,
  placeholder: '',
  locale: en
}

const currency: TCurrencyProps = (floatValue, options) => {
  const currentOptions = options ?? defaultValues
  const addPrefix = currentOptions.addPrefix ?? false
  const placeholder = currentOptions.placeholder ?? ''
  const locale = currentOptions.locale ?? en

  const defaultPrice = floatValue.toLocaleString(locale.lang, {
    style: 'currency',
    currency: locale.currency
  })
  const primaryPrice = defaultPrice.replace(/[\u00A0]/g, ' ')
  const formatValue = locale.removePrefix(primaryPrice)

  return floatValue ? (addPrefix ? primaryPrice : formatValue) : placeholder
}

export { currency }
