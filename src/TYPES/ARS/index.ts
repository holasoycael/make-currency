// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'es-AR',
  currency: 'ARS',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
