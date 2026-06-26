// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'fr-DJ',
  currency: 'DJF',
  removePrefix: (value: string) => value.slice(0, -4)
} satisfies TExchange
