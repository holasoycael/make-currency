// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'id-ID',
  currency: 'IDR',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
