// modules
import { currency } from '@models/currency'

// currecy
import DJF from '@TYPES/DJF'

describe('[fr-DJ]', () => {
  it('should float value 0.01 to equal 0,01', () => {
    expect(currency(0.01, { symbol: false, money: DJF })).toBe('0,01')
    expect(currency(0.01, { money: DJF })).toBe('0,01 Fdj')
  })

  it('should float value 0.12 to equal 0,12', () => {
    expect(currency(0.12, { symbol: false, money: DJF })).toBe('0,12')
    expect(currency(0.12, { money: DJF })).toBe('0,12 Fdj')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: DJF })).toBe('1,00')
    expect(currency(1, { money: DJF })).toBe('1,00 Fdj')
  })

  it('should float value 1.23 to equal 1,23', () => {
    expect(currency(1.23, { symbol: false, money: DJF })).toBe('1,23')
    expect(currency(1.23, { money: DJF })).toBe('1,23 Fdj')
  })

  it('should float value 748.99 to equal 748,99', () => {
    expect(currency(748.99, { symbol: false, money: DJF })).toBe('748,99')
    expect(currency(748.99, { money: DJF })).toBe('748,99 Fdj')
  })

  it('should float value 1234.56 to equal 1 234,56', () => {
    expect(currency(1234.56, { symbol: false, money: DJF })).toBe('1 234,56')
    expect(currency(1234.56, { money: DJF })).toBe('1 234,56 Fdj')
  })

  it('should float value 12345.67 to equal 12 345,67', () => {
    expect(currency(12345.67, { symbol: false, money: DJF })).toBe('12 345,67')
    expect(currency(12345.67, { money: DJF })).toBe('12 345,67 Fdj')
  })

  it('should float value 123456.78 to equal 123 456,78', () => {
    expect(currency(123456.78, { symbol: false, money: DJF })).toBe(
      '123 456,78'
    )
    expect(currency(123456.78, { money: DJF })).toBe('123 456,78 Fdj')
  })

  it('should float value 1234567.89 to equal 1 234 567,89', () => {
    expect(currency(1234567.89, { symbol: false, money: DJF })).toBe(
      '1 234 567,89'
    )
    expect(currency(1234567.89, { money: DJF })).toBe('1 234 567,89 Fdj')
  })
})
