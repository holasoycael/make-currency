// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-BB',
  currency: 'BBD',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
