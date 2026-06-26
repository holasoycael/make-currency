// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'ar-EG',
  currency: 'EGP',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
