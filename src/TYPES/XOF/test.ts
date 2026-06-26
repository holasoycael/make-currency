// modules
import { currency } from '@models/currency'

// currecy
import XOF from '@TYPES/XOF'

describe('[fr-FR]', () => {
  it('should float value 0.01 to equal 0,01 F', () => {
    expect(currency(0.01, { symbol: false, money: XOF })).toBe('0,01 F')
    expect(currency(0.01, { money: XOF })).toBe('0,01 F CFA')
  })

  it('should float value 0.12 to equal 0,12 F', () => {
    expect(currency(0.12, { symbol: false, money: XOF })).toBe('0,12 F')
    expect(currency(0.12, { money: XOF })).toBe('0,12 F CFA')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: XOF })).toBe('1,00 F')
    expect(currency(1, { money: XOF })).toBe('1,00 F CFA')
  })

  it('should float value 1.23 to equal 1,23 F', () => {
    expect(currency(1.23, { symbol: false, money: XOF })).toBe('1,23 F')
    expect(currency(1.23, { money: XOF })).toBe('1,23 F CFA')
  })

  it('should float value 748.99 to equal 748,99 F', () => {
    expect(currency(748.99, { symbol: false, money: XOF })).toBe('748,99 F')
    expect(currency(748.99, { money: XOF })).toBe('748,99 F CFA')
  })

  it('should float value 1234.56 to equal 1 234,56 F', () => {
    expect(currency(1234.56, { symbol: false, money: XOF })).toBe('1 234,56 F')
    expect(currency(1234.56, { money: XOF })).toBe('1 234,56 F CFA')
  })

  it('should float value 12345.67 to equal 12 345,67 F', () => {
    expect(currency(12345.67, { symbol: false, money: XOF })).toBe(
      '12 345,67 F'
    )
    expect(currency(12345.67, { money: XOF })).toBe('12 345,67 F CFA')
  })

  it('should float value 123456.78 to equal 123 456,78 F', () => {
    expect(currency(123456.78, { symbol: false, money: XOF })).toBe(
      '123 456,78 F'
    )
    expect(currency(123456.78, { money: XOF })).toBe('123 456,78 F CFA')
  })

  it('should float value 1234567.89 to equal 1 234 567,89 F', () => {
    expect(currency(1234567.89, { symbol: false, money: XOF })).toBe(
      '1 234 567,89 F'
    )
    expect(currency(1234567.89, { money: XOF })).toBe('1 234 567,89 F CFA')
  })
})
