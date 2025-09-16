// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-GB',
  currency: 'GBP',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
