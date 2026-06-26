// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'ht-HT',
  currency: 'HTG',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
