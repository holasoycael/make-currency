// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'th-TH',
  currency: 'THB',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
