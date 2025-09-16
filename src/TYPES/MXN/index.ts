// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'es-MX',
  currency: 'MXN',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
