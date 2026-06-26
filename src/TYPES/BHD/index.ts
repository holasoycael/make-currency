// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'ar-BH',
  currency: 'BHD',
  removePrefix: (value: string) => value.slice(0, -4)
} satisfies TExchange
