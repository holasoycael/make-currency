// modules
import { currency } from '@models/currency'

// currecy
import GNF from '@TYPES/GNF'

describe('[fr-FR]', () => {
  it('should float value 0.01 to equal 0,01', () => {
    expect(currency(0.01, { symbol: false, money: GNF })).toBe('0,01')
    expect(currency(0.01, { money: GNF })).toBe('0,01 GNF')
  })

  it('should float value 0.12 to equal 0,12', () => {
    expect(currency(0.12, { symbol: false, money: GNF })).toBe('0,12')
    expect(currency(0.12, { money: GNF })).toBe('0,12 GNF')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: GNF })).toBe('1,00')
    expect(currency(1, { money: GNF })).toBe('1,00 GNF')
  })

  it('should float value 1.23 to equal 1,23', () => {
    expect(currency(1.23, { symbol: false, money: GNF })).toBe('1,23')
    expect(currency(1.23, { money: GNF })).toBe('1,23 GNF')
  })

  it('should float value 748.99 to equal 748,99', () => {
    expect(currency(748.99, { symbol: false, money: GNF })).toBe('748,99')
    expect(currency(748.99, { money: GNF })).toBe('748,99 GNF')
  })

  it('should float value 1234.56 to equal 1 234,56', () => {
    expect(currency(1234.56, { symbol: false, money: GNF })).toBe('1 234,56')
    expect(currency(1234.56, { money: GNF })).toBe('1 234,56 GNF')
  })

  it('should float value 12345.67 to equal 12 345,67', () => {
    expect(currency(12345.67, { symbol: false, money: GNF })).toBe('12 345,67')
    expect(currency(12345.67, { money: GNF })).toBe('12 345,67 GNF')
  })

  it('should float value 123456.78 to equal 123 456,78', () => {
    expect(currency(123456.78, { symbol: false, money: GNF })).toBe(
      '123 456,78'
    )
    expect(currency(123456.78, { money: GNF })).toBe('123 456,78 GNF')
  })

  it('should float value 1234567.89 to equal 1 234 567,89', () => {
    expect(currency(1234567.89, { symbol: false, money: GNF })).toBe(
      '1 234 567,89'
    )
    expect(currency(1234567.89, { money: GNF })).toBe('1 234 567,89 GNF')
  })
})
