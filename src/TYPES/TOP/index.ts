// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-AU',
  currency: 'TOP',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
