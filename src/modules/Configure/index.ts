//locale
import USD from '@TYPES/USD'

// types and interfaces
import { TExchange } from '@typings/Locale'

class Configure {
  CURRENT: TExchange = USD
  setMoney(money: TExchange) {
    this.CURRENT = money
  }
}

const configure = new Configure()

export { configure }
