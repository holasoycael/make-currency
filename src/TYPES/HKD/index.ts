// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'zh-CN', // Usando 'zh-CN' que é um valor válido de TLanguage para representar chinês
  currency: 'HKD',
  removePrefix: (value: string) => value.slice(2)
} satisfies TExchange
