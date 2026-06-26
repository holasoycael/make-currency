// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'sq-AL',
  currency: 'ALL',
  removePrefix: (value: string) => value.slice(0, -2),
  replaceSymbol: (value: string) => value.replace('Lekë', 'L')
} satisfies TExchange
