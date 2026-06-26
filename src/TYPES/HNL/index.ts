// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'es-HN',
  currency: 'HNL',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
