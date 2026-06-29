import * as TYPES from '@TYPES/index'

// modules
import { currency } from '@models/currency'
import { currencyFn } from '@models/currencyFn'

// modules
import { configure } from '@modules/Configure'

// types and interfaces
export type { ICurrencyProps } from '@models/currencyFn/types'
import type { CONFIGUREProps, TExportTypes } from '@typings/Make'

const CONFIGURE = ({ money }: CONFIGUREProps) => {
  configure.setMoney(money)
}

const Make = {
  currency,
  currencyFn,
  TYPES: TYPES satisfies TExportTypes,
  CONFIGURE
}

export { Make as default, currency, currencyFn, TYPES, CONFIGURE }
