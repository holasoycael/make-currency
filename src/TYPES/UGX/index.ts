// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-GB',
  currency: 'UGX',
  removePrefix: (value: string) => value.slice(3)
} satisfies TExchange
