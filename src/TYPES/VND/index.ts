// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'vi-VN',
  currency: 'VND',
  removePrefix: (value: string) => value.slice(0, -2)
} satisfies TExchange
