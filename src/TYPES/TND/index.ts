// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'ar-EG',
  currency: 'TND',
  removePrefix: (value: string) => value.slice(0, -4)
} satisfies TExchange
