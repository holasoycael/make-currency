// modules
import { currency } from '@models/currency'
import pt from '@locale/pt-BR'

test('use placeholder string', () => {
  const placeholder = 'Valor indefinido'

  expect(currency(0)).toBe('')
  expect(currency(0, { placeholder })).toBe(placeholder)
  expect(currency(0.0, { placeholder })).toBe(placeholder)
})

describe('[en-US]', () => {
  it('should float value 0.01 to equal 0.01', () => {
    expect(currency(0.01)).toBe('0.01')
    expect(currency(0.01, { addPrefix: true })).toBe('$0.01')
  })

  it('should float value 0.12 to equal 0.12', () => {
    expect(currency(0.12)).toBe('0.12')
    expect(currency(0.12, { addPrefix: true })).toBe('$0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1)).toBe('1.00')
    expect(currency(1, { addPrefix: true })).toBe('$1.00')
  })

  it('should float value 1.23 to equal 1.23', () => {
    expect(currency(1.23)).toBe('1.23')
    expect(currency(1.23, { addPrefix: true })).toBe('$1.23')
  })

  it('should float value 748.99 to equal 748.99', () => {
    expect(currency(748.99)).toBe('748.99')
    expect(currency(748.99, { addPrefix: true })).toBe('$748.99')
  })

  it('should float value 1234.56 to equal 1,234.56', () => {
    expect(currency(1234.56)).toBe('1,234.56')
    expect(currency(1234.56, { addPrefix: true })).toBe('$1,234.56')
  })

  it('should float value 12345.67 to equal 12,345.67', () => {
    expect(currency(12345.67)).toBe('12,345.67')
    expect(currency(12345.67, { addPrefix: true })).toBe('$12,345.67')
  })

  it('should float value 123456.78 to equal 123,456.78', () => {
    expect(currency(123456.78)).toBe('123,456.78')
    expect(currency(123456.78, { addPrefix: true })).toBe('$123,456.78')
  })

  it('should float value 12345678.9 to equal 1,234,567.89', () => {
    expect(currency(1234567.89)).toBe('1,234,567.89')
    expect(currency(1234567.89, { addPrefix: true })).toBe('$1,234,567.89')
  })
})

describe('[pt-BR]', () => {
  it('should float value 0.01 to equal 0,01', () => {
    expect(currency(0.01, { locale: pt })).toBe('0,01')
    expect(currency(0.01, { addPrefix: true, locale: pt })).toBe('R$ 0,01')
  })

  it('should float value 0.12 to equal 0,12', () => {
    expect(currency(0.12, { locale: pt })).toBe('0,12')
    expect(currency(0.12, { addPrefix: true, locale: pt })).toBe('R$ 0,12')
  })

  it('should float value 1 to equal 1,00', () => {
    expect(currency(1, { locale: pt })).toBe('1,00')
    expect(currency(1, { addPrefix: true, locale: pt })).toBe('R$ 1,00')
  })

  it('should float value 1.23 to equal 1,23', () => {
    expect(currency(1.23, { locale: pt })).toBe('1,23')
    expect(currency(1.23, { addPrefix: true, locale: pt })).toBe('R$ 1,23')
  })

  it('should float value 748.99 to equal 748,99', () => {
    expect(currency(748.99, { locale: pt })).toBe('748,99')
    expect(currency(748.99, { addPrefix: true, locale: pt })).toBe('R$ 748,99')
  })

  it('should float value 1234.56 to equal 1.234,56', () => {
    expect(currency(1234.56, { locale: pt })).toBe('1.234,56')
    expect(currency(1234.56, { addPrefix: true, locale: pt })).toBe(
      'R$ 1.234,56'
    )
  })

  it('should float value 12345.67 to equal 12.345,67', () => {
    expect(currency(12345.67, { locale: pt })).toBe('12.345,67')
    expect(currency(12345.67, { addPrefix: true, locale: pt })).toBe(
      'R$ 12.345,67'
    )
  })

  it('should float value 123456.78 to equal 123.456,78', () => {
    expect(currency(123456.78, { locale: pt })).toBe('123.456,78')
    expect(currency(123456.78, { addPrefix: true, locale: pt })).toBe(
      'R$ 123.456,78'
    )
  })

  it('should float value 12345678.9 to equal 1.234.567,89', () => {
    expect(currency(1234567.89, { locale: pt })).toBe('1.234.567,89')
    expect(currency(1234567.89, { addPrefix: true, locale: pt })).toBe(
      'R$ 1.234.567,89'
    )
  })
})
