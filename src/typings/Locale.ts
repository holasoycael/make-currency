export type TCurrency = 'BRL' | 'USD' | 'EUR' | 'JPY' | 'MXN' | 'RUB' | 'GBP'
export type TLanguage =
  | 'pt-BR'
  | 'en-US'
  | 'pt-PT'
  | 'ja-JP'
  | 'es-MX'
  | 'ru-RU'
  | 'en-GB'

export type TExchange = {
  // eslint-disable-next-line prettier/prettier
  lang: TLanguage,
  currency: TCurrency
  removePrefix: (value: string) => string
  replaceSymbol?: (value: string) => string
}
