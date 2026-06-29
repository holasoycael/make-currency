import { TCurrency, TExchange } from './Locale'

export type CONFIGUREProps = {
  money: TExchange
}

export type TExportTypes = {
  [key in TCurrency]: TExchange
}
