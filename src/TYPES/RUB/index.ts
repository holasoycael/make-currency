// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'ru-RU',
  currency: 'RUB',
  removePrefix: (value: string) => value.slice(0, -2)
} satisfies TExchange
