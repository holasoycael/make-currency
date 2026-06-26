// modules
import { currency } from '@models/currency'

// currecy
import PYG from '@TYPES/PYG'

describe('[es-ES]', () => {
  it('should float value 0.01 to equal 01 PYG', () => {
    expect(currency(0.01, { symbol: false, money: PYG })).toBe('01 PYG')
    expect(currency(0.01, { money: PYG })).toBe('0,01 PYG')
  })

  it('should float value 0.12 to equal 12 PYG', () => {
    expect(currency(0.12, { symbol: false, money: PYG })).toBe('12 PYG')
    expect(currency(0.12, { money: PYG })).toBe('0,12 PYG')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: PYG })).toBe('00 PYG')
    expect(currency(1, { money: PYG })).toBe('1,00 PYG')
  })

  it('should float value 1.23 to equal 23 PYG', () => {
    expect(currency(1.23, { symbol: false, money: PYG })).toBe('23 PYG')
    expect(currency(1.23, { money: PYG })).toBe('1,23 PYG')
  })

  it('should float value 748.99 to equal 8,99 PYG', () => {
    expect(currency(748.99, { symbol: false, money: PYG })).toBe('8,99 PYG')
    expect(currency(748.99, { money: PYG })).toBe('748,99 PYG')
  })

  it('should float value 1234.56 to equal 234,56 PYG', () => {
    expect(currency(1234.56, { symbol: false, money: PYG })).toBe('234,56 PYG')
    expect(currency(1234.56, { money: PYG })).toBe('1.234,56 PYG')
  })

  it('should float value 12345.67 to equal .345,67 PYG', () => {
    expect(currency(12345.67, { symbol: false, money: PYG })).toBe(
      '.345,67 PYG'
    )
    expect(currency(12345.67, { money: PYG })).toBe('12.345,67 PYG')
  })

  it('should float value 123456.78 to equal 3.456,78 PYG', () => {
    expect(currency(123456.78, { symbol: false, money: PYG })).toBe(
      '3.456,78 PYG'
    )
    expect(currency(123456.78, { money: PYG })).toBe('123.456,78 PYG')
  })

  it('should float value 1234567.89 to equal 234.567,89 PYG', () => {
    expect(currency(1234567.89, { symbol: false, money: PYG })).toBe(
      '234.567,89 PYG'
    )
    expect(currency(1234567.89, { money: PYG })).toBe('1.234.567,89 PYG')
  })
})
