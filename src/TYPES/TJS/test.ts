// modules
import { currency } from '@models/currency'

// currecy
import TJS from '@TYPES/TJS'

describe('[ru-RU]', () => {
  it('should float value 0.01 to equal 0,01 T', () => {
    expect(currency(0.01, { symbol: false, money: TJS })).toBe('0,01 T')
    expect(currency(0.01, { money: TJS })).toBe('0,01 TJS')
  })

  it('should float value 0.12 to equal 0,12 T', () => {
    expect(currency(0.12, { symbol: false, money: TJS })).toBe('0,12 T')
    expect(currency(0.12, { money: TJS })).toBe('0,12 TJS')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: TJS })).toBe('1,00 T')
    expect(currency(1, { money: TJS })).toBe('1,00 TJS')
  })

  it('should float value 1.23 to equal 1,23 T', () => {
    expect(currency(1.23, { symbol: false, money: TJS })).toBe('1,23 T')
    expect(currency(1.23, { money: TJS })).toBe('1,23 TJS')
  })

  it('should float value 748.99 to equal 748,99 T', () => {
    expect(currency(748.99, { symbol: false, money: TJS })).toBe('748,99 T')
    expect(currency(748.99, { money: TJS })).toBe('748,99 TJS')
  })

  it('should float value 1234.56 to equal 1 234,56 T', () => {
    expect(currency(1234.56, { symbol: false, money: TJS })).toBe('1 234,56 T')
    expect(currency(1234.56, { money: TJS })).toBe('1 234,56 TJS')
  })

  it('should float value 12345.67 to equal 12 345,67 T', () => {
    expect(currency(12345.67, { symbol: false, money: TJS })).toBe(
      '12 345,67 T'
    )
    expect(currency(12345.67, { money: TJS })).toBe('12 345,67 TJS')
  })

  it('should float value 123456.78 to equal 123 456,78 T', () => {
    expect(currency(123456.78, { symbol: false, money: TJS })).toBe(
      '123 456,78 T'
    )
    expect(currency(123456.78, { money: TJS })).toBe('123 456,78 TJS')
  })

  it('should float value 1234567.89 to equal 1 234 567,89 T', () => {
    expect(currency(1234567.89, { symbol: false, money: TJS })).toBe(
      '1 234 567,89 T'
    )
    expect(currency(1234567.89, { money: TJS })).toBe('1 234 567,89 TJS')
  })
})
