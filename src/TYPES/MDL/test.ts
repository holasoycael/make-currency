// modules
import { currency } from '@models/currency'

// currecy
import MDL from '@TYPES/MDL'

describe('[ru-RU]', () => {
  it('should float value 0.01 to equal 0,01 ', () => {
    expect(currency(0.01, { symbol: false, money: MDL })).toBe('0,01 ')
    expect(currency(0.01, { money: MDL })).toBe('0,01 MDL')
  })

  it('should float value 0.12 to equal 0,12 ', () => {
    expect(currency(0.12, { symbol: false, money: MDL })).toBe('0,12 ')
    expect(currency(0.12, { money: MDL })).toBe('0,12 MDL')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: MDL })).toBe('1,00 ')
    expect(currency(1, { money: MDL })).toBe('1,00 MDL')
  })

  it('should float value 1.23 to equal 1,23 ', () => {
    expect(currency(1.23, { symbol: false, money: MDL })).toBe('1,23 ')
    expect(currency(1.23, { money: MDL })).toBe('1,23 MDL')
  })

  it('should float value 748.99 to equal 748,99 ', () => {
    expect(currency(748.99, { symbol: false, money: MDL })).toBe('748,99 ')
    expect(currency(748.99, { money: MDL })).toBe('748,99 MDL')
  })

  it('should float value 1234.56 to equal 1 234,56 ', () => {
    expect(currency(1234.56, { symbol: false, money: MDL })).toBe('1 234,56 ')
    expect(currency(1234.56, { money: MDL })).toBe('1 234,56 MDL')
  })

  it('should float value 12345.67 to equal 12 345,67 ', () => {
    expect(currency(12345.67, { symbol: false, money: MDL })).toBe('12 345,67 ')
    expect(currency(12345.67, { money: MDL })).toBe('12 345,67 MDL')
  })

  it('should float value 123456.78 to equal 123 456,78 ', () => {
    expect(currency(123456.78, { symbol: false, money: MDL })).toBe(
      '123 456,78 '
    )
    expect(currency(123456.78, { money: MDL })).toBe('123 456,78 MDL')
  })

  it('should float value 1234567.89 to equal 1 234 567,89 ', () => {
    expect(currency(1234567.89, { symbol: false, money: MDL })).toBe(
      '1 234 567,89 '
    )
    expect(currency(1234567.89, { money: MDL })).toBe('1 234 567,89 MDL')
  })
})
