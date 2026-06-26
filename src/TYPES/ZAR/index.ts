// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'af-ZA',
  currency: 'ZAR',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
