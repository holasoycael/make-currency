// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'bn-BD',
  currency: 'BDT',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
