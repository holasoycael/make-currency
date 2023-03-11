// modules
import { currency } from '@models/currency'

// money types
import BRL from '@TYPES/BRL'

test('use placeholder string', () => {
  expect(currency(0)).toBe('$0.00')
  expect(currency(0, { isEmpty: true })).toBe('')
  expect(currency(0, { isEmpty: false })).toBe('$0.00')
})

describe('[en-US]', () => {
  it('should float value 0.01 to equal 0.01', () => {
    expect(currency(0.01, { symbol: false })).toBe('0.01')
    expect(currency(0.01)).toBe('$0.01')
  })

  it('should float value 0.12 to equal 0.12', () => {
    expect(currency(0.12, { symbol: false })).toBe('0.12')
    expect(currency(0.12)).toBe('$0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false })).toBe('1.00')
    expect(currency(1)).toBe('$1.00')
  })

  it('should float value 1.23 to equal 1.23', () => {
    expect(currency(1.23, { symbol: false })).toBe('1.23')
    expect(currency(1.23)).toBe('$1.23')
  })

  it('should float value 748.99 to equal 748.99', () => {
    expect(currency(748.99, { symbol: false })).toBe('748.99')
    expect(currency(748.99)).toBe('$748.99')
  })

  it('should float value 1234.56 to equal 1,234.56', () => {
    expect(currency(1234.56, { symbol: false })).toBe('1,234.56')
    expect(currency(1234.56)).toBe('$1,234.56')
  })

  it('should float value 12345.67 to equal 12,345.67', () => {
    expect(currency(12345.67, { symbol: false })).toBe('12,345.67')
    expect(currency(12345.67)).toBe('$12,345.67')
  })

  it('should float value 123456.78 to equal 123,456.78', () => {
    expect(currency(123456.78, { symbol: false })).toBe('123,456.78')
    expect(currency(123456.78)).toBe('$123,456.78')
  })

  it('should float value 12345678.9 to equal 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false })).toBe('1,234,567.89')
    expect(currency(1234567.89)).toBe('$1,234,567.89')
  })
})

describe('[pt-BR]', () => {
  it('should float value 0.01 to equal 0,01', () => {
    expect(currency(0.01, { symbol: false, money: BRL })).toBe('0,01')
    expect(currency(0.01, { money: BRL })).toBe('R$ 0,01')
  })

  it('should float value 0.12 to equal 0,12', () => {
    expect(currency(0.12, { symbol: false, money: BRL })).toBe('0,12')
    expect(currency(0.12, { money: BRL })).toBe('R$ 0,12')
  })

  it('should float value 1 to equal 1,00', () => {
    expect(currency(1, { symbol: false, money: BRL })).toBe('1,00')
    expect(currency(1, { money: BRL })).toBe('R$ 1,00')
  })

  it('should float value 1.23 to equal 1,23', () => {
    expect(currency(1.23, { symbol: false, money: BRL })).toBe('1,23')
    expect(currency(1.23, { money: BRL })).toBe('R$ 1,23')
  })

  it('should float value 748.99 to equal 748,99', () => {
    expect(currency(748.99, { symbol: false, money: BRL })).toBe('748,99')
    expect(currency(748.99, { money: BRL })).toBe('R$ 748,99')
  })

  it('should float value 1234.56 to equal 1.234,56', () => {
    expect(currency(1234.56, { symbol: false, money: BRL })).toBe('1.234,56')
    expect(currency(1234.56, { money: BRL })).toBe('R$ 1.234,56')
  })

  it('should float value 12345.67 to equal 12.345,67', () => {
    expect(currency(12345.67, { symbol: false, money: BRL })).toBe('12.345,67')
    expect(currency(12345.67, { money: BRL })).toBe('R$ 12.345,67')
  })

  it('should float value 123456.78 to equal 123.456,78', () => {
    expect(currency(123456.78, { symbol: false, money: BRL })).toBe(
      '123.456,78'
    )
    expect(currency(123456.78, { money: BRL })).toBe('R$ 123.456,78')
  })

  it('should float value 12345678.9 to equal 1.234.567,89', () => {
    expect(currency(1234567.89, { symbol: false, money: BRL })).toBe(
      '1.234.567,89'
    )
    expect(currency(1234567.89, { money: BRL })).toBe('R$ 1.234.567,89')
  })
})
