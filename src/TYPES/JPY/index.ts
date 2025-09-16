// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-US',
  currency: 'USD',
  removePrefix: (value: string) => value.slice(1),
  replaceSymbol: (value: string) => value.replace('$', '¥')
} satisfies TExchange
