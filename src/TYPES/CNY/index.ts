// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'zh-CN',
  currency: 'CNY',
  removePrefix: (value: string) => value.slice(1)
} satisfies TExchange
