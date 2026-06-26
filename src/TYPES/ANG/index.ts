// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'nl-NL',
  currency: 'ANG',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
