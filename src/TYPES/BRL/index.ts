// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'pt-BR',
  currency: 'BRL',
  removePrefix: (value: string) => value.slice(3)
} satisfies TExchange
