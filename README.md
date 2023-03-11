# Make Currency

[![npm](https://img.shields.io/npm/v/make-currency)](https://www.npmjs.com/package/make-currency) [![NPM](https://img.shields.io/npm/l/make-currency)](https://www.npmjs.com/package/make-currency)

Work with price values in JavaScript in a simplified way.\
Support for USD and BRL

## Install
```sh
npm install make-currency
```
or
```sh
yarn add make-currency
```

## Usage with VanillaJS
```js
const BRL = Make.TYPES.BRL;
Make.CONFIGURE({ money: BRL });

(() => {
  const app = document.querySelector('#app')
  const useMoney = 2.99

  app.innerHTML = `
    <div class="card">
      <span class="card__price">
        ${Make.currency(useMoney)}
      </span>
      <input
        class="card__input"
        type="tel"
        name="price"
        value="${Make.currency(useMoney, 'INPUT')}"
        placeholder="0,00"
      />
    </div>
  `
})()

const card__input = document.querySelector('[name="price"]')
const card__price = document.querySelector('.card__price')
card__input.addEventListener('input', function(e) {
  const currentTarget = e.target
  const { floatValue, stringValue } = Make.currencyFn(currentTarget.value)
  card__price.textContent = Make.currency(floatValue)
  currentTarget.value = stringValue
})
```

## Usage with JSX
```tsx
import { useState } from 'react'
import Make, { currency, currencyFn } from 'make-currency'

// types and interfaces
import { CurrencyProps } from 'make-currency'

const BRL = Make.TYPES.BRL
Make.CONFIGURE({ money: BRL })

function App() {
  const [value, setValue] = useState(2.99)

  const inputFn = ({ floatValue }: CurrencyProps) => setValue(floatValue)

  return (
    <div>
      <span>
        {currency(value)}
      </span>
      <input
        type="tel"
        value={currency(value, 'INPUT')}
        onChange={(e) => inputFn(currencyFn(e.currentTarget.value))}
        placeholder="0,00"
      />
    </div>
  )
}

export default App
```

## Display currency values
In the current version BRL for `floatValue` or `stringValue`


| typed      	| input value   	| float value 	| string value  	|
|------------	|---------------	|-------------	|---------------	|
|            	| 0,00          	| 0.00        	| 0,00          	|
| 1          	| 0,01          	| 0.01        	| 0,01          	|
| 12         	| 0,12          	| 0.12        	| 0,12          	|
| 123        	| 1,23          	| 1.23        	| 1,23          	|
| 1234       	| 12,34          	| 0.12        	| 0,12          	|
| 12345      	| 123,45        	| 123.45      	| 123,45        	|
| 123456     	| 1.234,56      	| 1234.56     	| 1.234,56      	|
| 1234567    	| 12.345,67      	| 12345.67    	| 12.345,67      	|
| 12345678   	| 123.456,78    	| 123456.78   	| 123,456,78    	|
| 123456789 	| 1.234.567,89 	  | 12345678.90 	| 1.234.567,89  	|


## Announcement

en: `More coins will be available soon!`

pt: `Em breve mais moedas estará disponível!`

es: `¡Más monedas estarán disponibles pronto!`

## Issues

Feel free to raise an issue on Github if you find a bug or have a feature request
