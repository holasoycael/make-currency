// modules
import { currency } from '@models/currency'

// currecy
import RWF from '@TYPES/RWF'

describe('[fr-FR]', () => {
  it('should float value 0.01 to equal 0,01 R', () => {
    expect(currency(0.01, { symbol: false, money: RWF })).toBe('0,01 R')
    expect(currency(0.01, { money: RWF })).toBe('0,01 RWF')
  })

  it('should float value 0.12 to equal 0,12 R', () => {
    expect(currency(0.12, { symbol: false, money: RWF })).toBe('0,12 R')
    expect(currency(0.12, { money: RWF })).toBe('0,12 RWF')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: RWF })).toBe('1,00 R')
    expect(currency(1, { money: RWF })).toBe('1,00 RWF')
  })

  it('should float value 1.23 to equal 1,23 R', () => {
    expect(currency(1.23, { symbol: false, money: RWF })).toBe('1,23 R')
    expect(currency(1.23, { money: RWF })).toBe('1,23 RWF')
  })

  it('should float value 748.99 to equal 748,99 R', () => {
    expect(currency(748.99, { symbol: false, money: RWF })).toBe('748,99 R')
    expect(currency(748.99, { money: RWF })).toBe('748,99 RWF')
  })

  it('should float value 1234.56 to equal 1 234,56 R', () => {
    expect(currency(1234.56, { symbol: false, money: RWF })).toBe('1 234,56 R')
    expect(currency(1234.56, { money: RWF })).toBe('1 234,56 RWF')
  })

  it('should float value 12345.67 to equal 12 345,67 R', () => {
    expect(currency(12345.67, { symbol: false, money: RWF })).toBe(
      '12 345,67 R'
    )
    expect(currency(12345.67, { money: RWF })).toBe('12 345,67 RWF')
  })

  it('should float value 123456.78 to equal 123 456,78 R', () => {
    expect(currency(123456.78, { symbol: false, money: RWF })).toBe(
      '123 456,78 R'
    )
    expect(currency(123456.78, { money: RWF })).toBe('123 456,78 RWF')
  })

  it('should float value 1234567.89 to equal 1 234 567,89 R', () => {
    expect(currency(1234567.89, { symbol: false, money: RWF })).toBe(
      '1 234 567,89 R'
    )
    expect(currency(1234567.89, { money: RWF })).toBe('1 234 567,89 RWF')
  })
})
