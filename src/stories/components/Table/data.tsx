// types and interfaces
import type { TTableColumn, TTableRow } from './types'

export const currencyParamsCols: TTableColumn[] = [
  { key: 'parameter', label: 'Parameter' },
  { key: 'type', label: 'Type' },
  { key: 'required', label: 'Required' },
  { key: 'description', label: 'Description' }
]

export const currencyParamsRows: TTableRow[] = [
  {
    key: 'floatValue',
    parameter: <code>floatValue</code>,
    type: <code>number</code>,
    required: 'Yes',
    description: 'The numeric value to format'
  },
  {
    key: 'options',
    parameter: <code>options</code>,
    type: <code>TCurrencyOptions | 'INPUT'</code>,
    required: 'No',
    description: "Formatting options or 'INPUT' shortcut"
  }
]

export const currencyOptionsCols: TTableColumn[] = [
  { key: 'option', label: 'Option' },
  { key: 'type', label: 'Type' },
  { key: 'defaultVal', label: 'Default' },
  { key: 'description', label: 'Description' }
]

export const currencyOptionsRows: TTableRow[] = [
  {
    key: 'symbol',
    option: <code>symbol</code>,
    type: <code>boolean</code>,
    defaultVal: <code>true</code>,
    description: 'Include the currency symbol in the output'
  },
  {
    key: 'isEmpty',
    option: <code>isEmpty</code>,
    type: <code>boolean</code>,
    defaultVal: <code>false</code>,
    description: 'Return "" when the value is 0'
  },
  {
    key: 'money',
    option: <code>money</code>,
    type: <code>TExchange</code>,
    defaultVal: <code>TYPES.USD</code>,
    description: 'Currency configuration (locale + code + transforms)'
  }
]

export const currencyFnParamsCols: TTableColumn[] = [
  { key: 'parameter', label: 'Parameter' },
  { key: 'type', label: 'Type' },
  { key: 'required', label: 'Required' },
  { key: 'description', label: 'Description' }
]

export const currencyFnParamsRows: TTableRow[] = [
  {
    key: 'value',
    parameter: <code>value</code>,
    type: <code>string</code>,
    required: 'Yes',
    description: 'The raw string input (digits only, e.g. from an input field)'
  },
  {
    key: 'options',
    parameter: <code>options</code>,
    type: <code>TCurrencyOptions</code>,
    required: 'No',
    description:
      'Same options as currency(). Defaults: symbol: false, isEmpty: true'
  }
]

export const mappingCols: TTableColumn[] = [
  { key: 'typed', label: 'Typed' },
  { key: 'inputValue', label: 'Input Value' },
  { key: 'floatValue', label: 'floatValue' },
  { key: 'stringValue', label: 'stringValue' }
]

export const mappingRows: TTableRow[] = [
  {
    key: '0',
    typed: '',
    inputValue: '0,00',
    floatValue: '0.00',
    stringValue: '0,00'
  },
  {
    key: '1',
    typed: '1',
    inputValue: '0,01',
    floatValue: '0.01',
    stringValue: '0,01'
  },
  {
    key: '2',
    typed: '12',
    inputValue: '0,12',
    floatValue: '0.12',
    stringValue: '0,12'
  },
  {
    key: '3',
    typed: '123',
    inputValue: '1,23',
    floatValue: '1.23',
    stringValue: '1,23'
  },
  {
    key: '4',
    typed: '1234',
    inputValue: '12,34',
    floatValue: '12.34',
    stringValue: '12,34'
  },
  {
    key: '5',
    typed: '12345',
    inputValue: '123,45',
    floatValue: '123.45',
    stringValue: '123,45'
  },
  {
    key: '6',
    typed: '123456',
    inputValue: '1.234,56',
    floatValue: '1234.56',
    stringValue: '1.234,56'
  },
  {
    key: '7',
    typed: '1234567',
    inputValue: '12.345,67',
    floatValue: '12345.67',
    stringValue: '12.345,67'
  },
  {
    key: '8',
    typed: '12345678',
    inputValue: '123.456,78',
    floatValue: '123456.78',
    stringValue: '123.456,78'
  },
  {
    key: '9',
    typed: '123456789',
    inputValue: '1.234.567,89',
    floatValue: '1234567.89',
    stringValue: '1.234.567,89'
  }
]

export const configureParamsCols: TTableColumn[] = [
  { key: 'parameter', label: 'Parameter' },
  { key: 'type', label: 'Type' },
  { key: 'required', label: 'Required' },
  { key: 'description', label: 'Description' }
]

export const configureParamsRows: TTableRow[] = [
  {
    key: 'money',
    parameter: <code>money</code>,
    type: <code>TExchange</code>,
    required: 'Yes',
    description: 'The currency configuration to set as global default'
  }
]

export const popularCurrenciesCols: TTableColumn[] = [
  { key: 'currency1', label: 'Currency' },
  { key: 'symbol1', label: 'Symbol' },
  { key: 'currency2', label: 'Currency' },
  { key: 'symbol2', label: 'Symbol' }
]

export const popularCurrenciesRows: TTableRow[] = [
  {
    key: '1',
    currency1: <strong>USD</strong>,
    symbol1: '🇺🇸 $',
    currency2: <strong>BRL</strong>,
    symbol2: '🇧🇷 R$'
  },
  {
    key: '2',
    currency1: <strong>EUR</strong>,
    symbol1: '🇪🇺 €',
    currency2: <strong>GBP</strong>,
    symbol2: '🇬🇧 £'
  },
  {
    key: '3',
    currency1: <strong>JPY</strong>,
    symbol1: '🇯🇵 ¥',
    currency2: <strong>CAD</strong>,
    symbol2: '🇨🇦 $'
  },
  {
    key: '4',
    currency1: <strong>AUD</strong>,
    symbol1: '🇦🇺 $',
    currency2: <strong>CHF</strong>,
    symbol2: '🇨🇭 Fr.'
  },
  {
    key: '5',
    currency1: <strong>CNY</strong>,
    symbol1: '🇨🇳 ¥',
    currency2: <strong>INR</strong>,
    symbol2: '🇮🇳 ₹'
  },
  {
    key: '6',
    currency1: <strong>MXN</strong>,
    symbol1: '🇲🇽 $',
    currency2: <strong>KRW</strong>,
    symbol2: '🇰🇷 ₩'
  },
  {
    key: '7',
    currency1: <strong>TRY</strong>,
    symbol1: '🇹🇷 ₺',
    currency2: <strong>RUB</strong>,
    symbol2: '🇷🇺 ₽'
  },
  {
    key: '8',
    currency1: <strong>PLN</strong>,
    symbol1: '🇵🇱 zł',
    currency2: <strong>THB</strong>,
    symbol2: '🇹🇭 ฿'
  },
  {
    key: '9',
    currency1: <strong>ZAR</strong>,
    symbol1: '🇿🇦 R',
    currency2: <strong>SGD</strong>,
    symbol2: '🇸🇬 $'
  },
  {
    key: '10',
    currency1: <strong>COP</strong>,
    symbol1: '🇨🇴 $',
    currency2: <strong>ARS</strong>,
    symbol2: '🇦🇷 $'
  }
]

export const typescriptTypesCols: TTableColumn[] = [
  { key: 'type', label: 'Type' },
  { key: 'kind', label: 'Kind' },
  { key: 'description', label: 'Description' }
]

export const typescriptTypesRows: TTableRow[] = [
  {
    key: 'TCurrency',
    type: <code>TCurrency</code>,
    kind: 'Union',
    description: 'All 139 ISO 4217 currency codes'
  },
  {
    key: 'TLanguage',
    type: <code>TLanguage</code>,
    kind: 'Union',
    description: 'All supported locale strings'
  },
  {
    key: 'TExchange',
    type: <code>TExchange</code>,
    kind: 'Type',
    description: 'Currency configuration object'
  },
  {
    key: 'TTYPES',
    type: <code>TTYPES</code>,
    kind: 'Type',
    description: 'Map of all currency codes to their TExchange'
  },
  {
    key: 'TCurrencyOptions',
    type: <code>TCurrencyOptions</code>,
    kind: 'Type',
    description: 'Options for currency() and currencyFn()'
  },
  {
    key: 'TOptions',
    type: <code>TOptions</code>,
    kind: 'Type',
    description: <code>TCurrencyOptions | 'INPUT'</code>
  },
  {
    key: 'TCurrencyProps',
    type: <code>TCurrencyProps</code>,
    kind: 'Type',
    description: 'Function signature for currency()'
  },
  {
    key: 'ICurrencyProps',
    type: <code>ICurrencyProps</code>,
    kind: 'Interface',
    description: 'Return type of currencyFn()'
  },
  {
    key: 'CONFIGUREProps',
    type: <code>CONFIGUREProps</code>,
    kind: 'Type',
    description: 'Parameter type for CONFIGURE()'
  }
]
