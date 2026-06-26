// types and interfaces
import { TExchange } from '@typings/Locale'

export default {
  lang: 'ar-EG', // Usando 'ar-EG' que é um valor válido de TLanguage para representar árabe
  currency: 'JOD',
  removePrefix: (value: string) => value.slice(0, -4)
} satisfies TExchange
