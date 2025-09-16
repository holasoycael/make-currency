// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'pt-PT',
  currency: 'EUR',
  removePrefix: (value: string) => value.slice(0, -2)
} satisfies TExchange
