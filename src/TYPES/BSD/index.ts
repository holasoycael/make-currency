// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-BS',
  currency: 'BSD',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
