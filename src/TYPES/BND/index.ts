// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'ms-BN',
  currency: 'BND',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
