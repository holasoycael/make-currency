// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-GB',
  currency: 'KES',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
