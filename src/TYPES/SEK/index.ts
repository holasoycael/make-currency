// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'is-IS',
  currency: 'SEK',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
