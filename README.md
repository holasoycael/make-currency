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
[Code example](https://stackblitz.com/edit/vanillajs-make-currency) || [Live preview](https://vanillajs-make-currency.stackblitz.io/)

## Usage with JSX
[Code example](https://stackblitz.com/edit/react-make-currency) || [Live preview](https://react-make-currency.stackblitz.io/)

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
