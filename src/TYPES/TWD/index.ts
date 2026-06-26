// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'zh-CN',
  currency: 'TWD',
  removePrefix: (value: string) => value.slice(3)
} satisfies TExchange
