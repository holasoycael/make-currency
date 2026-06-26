// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'bs-BA',
  currency: 'BAM',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
