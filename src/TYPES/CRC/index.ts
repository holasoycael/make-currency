// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'es-CR',
  currency: 'CRC',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
