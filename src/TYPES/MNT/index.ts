// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-US',
  currency: 'MNT',
  removePrefix: (value: string) => value.slice(0, -1)
} satisfies TExchange
