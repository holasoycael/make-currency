// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'pt-CV',
  currency: 'CVE',
  removePrefix: (value: string) => value.slice(0, -4)
} satisfies TExchange
