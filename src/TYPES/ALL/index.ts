// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'en-US',
  currency: 'ALL',
  removePrefix: (value: string) => value.substring(2),
  replaceSymbol: (value: string) =>
    value.replace('ALL ', 'L ').replace(/,/g, ' ').replace(/\./g, ',')
} satisfies TExchange
