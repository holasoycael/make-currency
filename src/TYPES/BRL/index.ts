// types and interfaces
import { TExchange } from '@typings/Locale'

const BRL: TExchange = {
  lang: 'pt-BR',
  currency: 'BRL',
  removePrefix: (value: string) => value.slice(3)
}

export default BRL
