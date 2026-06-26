// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'is-IS',
  currency: 'ISK',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
