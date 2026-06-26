// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'es-CL',
  currency: 'CLP',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
