import { useState } from 'react'

// models
import { currency } from '@models/currency'
import { currencyFn } from '@models/currencyFn'
import { CurrencyProps } from 'index'

// types and interfaces
import { AppProps } from './types'

function App({ current }: AppProps) {
  const [value, setValue] = useState(current)

  const inputFn = ({ floatValue }: CurrencyProps) => setValue(floatValue)

  return (
    <div>
      <span>{currency(value)}</span>
      <input
        type="tel"
        data-testid="input"
        value={currency(value, 'INPUT')}
        onChange={(e) => inputFn(currencyFn(e.currentTarget.value))}
        placeholder="0,00"
      />
    </div>
  )
}

export default App
