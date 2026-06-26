// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'bg-BG',
  currency: 'BGN',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
