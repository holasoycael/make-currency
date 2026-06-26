// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'es-ES',
  currency: 'PEN',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
