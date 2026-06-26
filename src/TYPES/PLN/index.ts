// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'pl-PL',
  currency: 'PLN',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
