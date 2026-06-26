// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-HT',
  currency: 'HTG',
  removePrefix: (value: string) => value.slice(2),
  replaceSymbol: (value: string) =>
    value.replace('HTG', 'G').replace(/\u200F/g, '')
} satisfies TExchange
