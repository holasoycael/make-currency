// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-US',
  currency: 'MYR',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
