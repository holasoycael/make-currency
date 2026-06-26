// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'hu-HU',
  currency: 'HUF',
  removePrefix: (value: string) => value.slice(0, -3)
} satisfies TExchange
