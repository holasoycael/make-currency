// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'hi-IN',
  currency: 'INR',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
