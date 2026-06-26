// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'az-AZ',
  currency: 'AZN',
  removePrefix: (value: string) => value.slice(0, -2)
} satisfies TExchange
