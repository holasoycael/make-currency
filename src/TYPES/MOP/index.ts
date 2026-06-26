// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'zh-CN',
  currency: 'MOP',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
