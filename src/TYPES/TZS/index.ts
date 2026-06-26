// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-GB',
  currency: 'TZS',
  removePrefix: (value: string) => value.slice(3)
} satisfies TExchange
