// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'ar-AE',
  currency: 'AED',
  removePrefix: (value: string) =>
    value
      .slice(0, -4)
      .replace(/\u200F/g, '')
      .trim(),
  replaceSymbol: (value: string) =>
    value.replace('د.إ.', 'د.إ').replace(/\u200F/g, '')
} satisfies TExchange
