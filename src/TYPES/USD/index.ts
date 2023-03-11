// types and interfaces
import { TExchange } from '@typings/Locale'

const USD: TExchange = {
  lang: 'en-US',
  currency: 'USD',
  removePrefix: (value: string) => value.slice(1)
}

export default USD
