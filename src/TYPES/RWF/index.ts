// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'fr-FR',
  currency: 'RWF',
  removePrefix: (value: string) => value.slice(0, -2)
} satisfies TExchange
