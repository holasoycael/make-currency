// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'am-ET',
  currency: 'ETB',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
