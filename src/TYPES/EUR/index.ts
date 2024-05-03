// types and interfaces
import { TExchange } from '@typings/Locale'

const USD: TExchange = {
  lang: 'es-ES',
  currency: 'EUR',
  removePrefix: (value: string) => value.slice(0, -2)
}

export default USD
