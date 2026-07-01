// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'hy-AM',
  currency: 'AMD',
  removePrefix: (value: string) => {
    if (value.includes('AMD')) return value.substring(4)
    return value.slice(0, -2)
  },
  replaceSymbol: (value: string) => {
    return value
  }
} satisfies TExchange
