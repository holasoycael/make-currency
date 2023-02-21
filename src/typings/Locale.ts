export type TLocale = {
  lang: string | 'pt-BR' | 'en-US'
  currency: string | 'BRL' | 'USD'
  removePrefix: (value: string) => string
}
