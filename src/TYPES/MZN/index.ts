// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'pt-PT',
  currency: 'MZN',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
