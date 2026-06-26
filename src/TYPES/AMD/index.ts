// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'hy-AM',
  currency: 'AMD',
  removePrefix: (value: string) => value.slice(0, -2)
} satisfies TExchange
