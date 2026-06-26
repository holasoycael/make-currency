// modules
import { currency } from '@models/currency'

// currecy
import UYU from '@TYPES/UYU'

describe('[es-ES]', () => {
  it('should float value 0.01 to equal 01 UYU', () => {
    expect(currency(0.01, { symbol: false, money: UYU })).toBe('01 UYU')
    expect(currency(0.01, { money: UYU })).toBe('0,01 UYU')
  })

  it('should float value 0.12 to equal 12 UYU', () => {
    expect(currency(0.12, { symbol: false, money: UYU })).toBe('12 UYU')
    expect(currency(0.12, { money: UYU })).toBe('0,12 UYU')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: UYU })).toBe('00 UYU')
    expect(currency(1, { money: UYU })).toBe('1,00 UYU')
  })

  it('should float value 1.23 to equal 23 UYU', () => {
    expect(currency(1.23, { symbol: false, money: UYU })).toBe('23 UYU')
    expect(currency(1.23, { money: UYU })).toBe('1,23 UYU')
  })

  it('should float value 748.99 to equal 8,99 UYU', () => {
    expect(currency(748.99, { symbol: false, money: UYU })).toBe('8,99 UYU')
    expect(currency(748.99, { money: UYU })).toBe('748,99 UYU')
  })

  it('should float value 1234.56 to equal 234,56 UYU', () => {
    expect(currency(1234.56, { symbol: false, money: UYU })).toBe('234,56 UYU')
    expect(currency(1234.56, { money: UYU })).toBe('1.234,56 UYU')
  })

  it('should float value 12345.67 to equal .345,67 UYU', () => {
    expect(currency(12345.67, { symbol: false, money: UYU })).toBe(
      '.345,67 UYU'
    )
    expect(currency(12345.67, { money: UYU })).toBe('12.345,67 UYU')
  })

  it('should float value 123456.78 to equal 3.456,78 UYU', () => {
    expect(currency(123456.78, { symbol: false, money: UYU })).toBe(
      '3.456,78 UYU'
    )
    expect(currency(123456.78, { money: UYU })).toBe('123.456,78 UYU')
  })

  it('should float value 1234567.89 to equal 234.567,89 UYU', () => {
    expect(currency(1234567.89, { symbol: false, money: UYU })).toBe(
      '234.567,89 UYU'
    )
    expect(currency(1234567.89, { money: UYU })).toBe('1.234.567,89 UYU')
  })
})
