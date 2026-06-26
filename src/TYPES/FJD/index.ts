// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-FJ',
  currency: 'FJD',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
