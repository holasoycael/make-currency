// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-BZ',
  currency: 'BZD',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
