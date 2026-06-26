// modules
import { currency } from '@models/currency'

// currecy
import KZT from '@TYPES/KZT'

describe('[ru-RU]', () => {
  it('should float value 0.01 to equal 0,01 K', () => {
    expect(currency(0.01, { symbol: false, money: KZT })).toBe('0,01 K')
    expect(currency(0.01, { money: KZT })).toBe('0,01 KZT')
  })

  it('should float value 0.12 to equal 0,12 K', () => {
    expect(currency(0.12, { symbol: false, money: KZT })).toBe('0,12 K')
    expect(currency(0.12, { money: KZT })).toBe('0,12 KZT')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: KZT })).toBe('1,00 K')
    expect(currency(1, { money: KZT })).toBe('1,00 KZT')
  })

  it('should float value 1.23 to equal 1,23 K', () => {
    expect(currency(1.23, { symbol: false, money: KZT })).toBe('1,23 K')
    expect(currency(1.23, { money: KZT })).toBe('1,23 KZT')
  })

  it('should float value 748.99 to equal 748,99 K', () => {
    expect(currency(748.99, { symbol: false, money: KZT })).toBe('748,99 K')
    expect(currency(748.99, { money: KZT })).toBe('748,99 KZT')
  })

  it('should float value 1234.56 to equal 1 234,56 K', () => {
    expect(currency(1234.56, { symbol: false, money: KZT })).toBe('1 234,56 K')
    expect(currency(1234.56, { money: KZT })).toBe('1 234,56 KZT')
  })

  it('should float value 12345.67 to equal 12 345,67 K', () => {
    expect(currency(12345.67, { symbol: false, money: KZT })).toBe(
      '12 345,67 K'
    )
    expect(currency(12345.67, { money: KZT })).toBe('12 345,67 KZT')
  })

  it('should float value 123456.78 to equal 123 456,78 K', () => {
    expect(currency(123456.78, { symbol: false, money: KZT })).toBe(
      '123 456,78 K'
    )
    expect(currency(123456.78, { money: KZT })).toBe('123 456,78 KZT')
  })

  it('should float value 1234567.89 to equal 1 234 567,89 K', () => {
    expect(currency(1234567.89, { symbol: false, money: KZT })).toBe(
      '1 234 567,89 K'
    )
    expect(currency(1234567.89, { money: KZT })).toBe('1 234 567,89 KZT')
  })
})
