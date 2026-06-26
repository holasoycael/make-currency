// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-FK',
  currency: 'FKP',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
