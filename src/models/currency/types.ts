import { TCurrencyOptions } from '@typings/Models'

type TOptions = TCurrencyOptions | 'INPUT'

export type TCurrencyProps = (floatValue: number, options?: TOptions) => string
