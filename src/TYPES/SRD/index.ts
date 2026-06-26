// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'nl-NL',
  currency: 'SRD',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
