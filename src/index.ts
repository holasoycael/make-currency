import * as TYPES from '@TYPES/index'

// modules
import { currency } from '@models/currency'
import { currencyFn } from '@models/currencyFn'

// modules
import { configure } from '@modules/Configure'

// types and interfaces
export type { TCurrency } from '@models/currencyFn/types'
import type { CONFIGUREProps } from '@typings/Make'

const CONFIGURE = ({ money }: CONFIGUREProps) => {
  configure.setMoney(money)
}

const Make = { currency, currencyFn, TYPES, CONFIGURE }

export { Make as default, currency, currencyFn, TYPES, CONFIGURE }
