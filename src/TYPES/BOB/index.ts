// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'es-BO',
  currency: 'BOB',
  removePrefix: (value: string) => value.slice(3)
} satisfies TExchange
