// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'fr-FR',
  currency: 'MAD',
  removePrefix: (value: string) => value.slice(0, -4)
} satisfies TExchange
