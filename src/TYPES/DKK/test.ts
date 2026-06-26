// modules
import { currency } from '@models/currency'

// currecy
import DKK from '@TYPES/DKK'

describe('[da-DK]', () => {
  it('should float value 0.01 to equal 0,01 ', () => {
    expect(currency(0.01, { symbol: false, money: DKK })).toBe('0,01 ')
    expect(currency(0.01, { money: DKK })).toBe('0,01 kr.')
  })

  it('should float value 0.12 to equal 0,12 ', () => {
    expect(currency(0.12, { symbol: false, money: DKK })).toBe('0,12 ')
    expect(currency(0.12, { money: DKK })).toBe('0,12 kr.')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: DKK })).toBe('1,00 ')
    expect(currency(1, { money: DKK })).toBe('1,00 kr.')
  })

  it('should float value 1.23 to equal 1,23 ', () => {
    expect(currency(1.23, { symbol: false, money: DKK })).toBe('1,23 ')
    expect(currency(1.23, { money: DKK })).toBe('1,23 kr.')
  })

  it('should float value 748.99 to equal 748,99 ', () => {
    expect(currency(748.99, { symbol: false, money: DKK })).toBe('748,99 ')
    expect(currency(748.99, { money: DKK })).toBe('748,99 kr.')
  })

  it('should float value 1234.56 to equal 1.234,56 ', () => {
    expect(currency(1234.56, { symbol: false, money: DKK })).toBe('1.234,56 ')
    expect(currency(1234.56, { money: DKK })).toBe('1.234,56 kr.')
  })

  it('should float value 12345.67 to equal 12.345,67 ', () => {
    expect(currency(12345.67, { symbol: false, money: DKK })).toBe('12.345,67 ')
    expect(currency(12345.67, { money: DKK })).toBe('12.345,67 kr.')
  })

  it('should float value 123456.78 to equal 123.456,78 ', () => {
    expect(currency(123456.78, { symbol: false, money: DKK })).toBe(
      '123.456,78 '
    )
    expect(currency(123456.78, { money: DKK })).toBe('123.456,78 kr.')
  })

  it('should float value 1234567.89 to equal 1.234.567,89 ', () => {
    expect(currency(1234567.89, { symbol: false, money: DKK })).toBe(
      '1.234.567,89 '
    )
    expect(currency(1234567.89, { money: DKK })).toBe('1.234.567,89 kr.')
  })
})
