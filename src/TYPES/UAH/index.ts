// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'uk-UA',
  currency: 'UAH',
  removePrefix: (value: string) => value.slice(0, -2)
} satisfies TExchange
