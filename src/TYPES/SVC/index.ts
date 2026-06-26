// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'es-ES',
  currency: 'SVC',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
