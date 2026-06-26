// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'de-CH',
  currency: 'CHF',
  removePrefix: (value: string) => value.slice(4),
  replaceSymbol: (value: string) =>
    value.replace('CHF', 'Fr.').replace(/'/g, '’')
} satisfies TExchange
