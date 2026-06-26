// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'pt-AO',
  currency: 'AOA',
  removePrefix: (value: string) => value.slice(3)
} satisfies TExchange
