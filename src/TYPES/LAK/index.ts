// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-US',
  currency: 'LAK',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
