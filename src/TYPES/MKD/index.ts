// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-GB',
  currency: 'MKD',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
