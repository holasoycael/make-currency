// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'nl-AW',
  currency: 'AWG',
  removePrefix: (value: string) => value.slice(3)
} satisfies TExchange
