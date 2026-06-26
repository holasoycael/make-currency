// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-BW',
  currency: 'BWP',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
