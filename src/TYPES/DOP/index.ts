// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'es-DO',
  currency: 'DOP',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
