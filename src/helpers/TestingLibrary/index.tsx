import { useState } from 'react'

// models
import { currency } from '@models/currency'
import { currencyFn } from '@models/currencyFn'

// types and interfaces
import { ICurrencyProps } from '@models/currencyFn/types'
import { AppProps } from './types'

function App({ current }: AppProps) {
  const [value, setValue] = useState(current)

  const inputFn = ({ floatValue }: ICurrencyProps) => setValue(floatValue)

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
