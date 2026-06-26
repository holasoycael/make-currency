// modules
import { currency } from '@models/currency'

// currecy
import AOA from '@TYPES/AOA'

describe('[pt-AO]', () => {
  it('should float value 0.01 to equal 1 Kz', () => {
    expect(currency(0.01, { symbol: false, money: AOA })).toBe('1 Kz')
    expect(currency(0.01, { money: AOA })).toBe('0,01 Kz')
  })

  it('should float value 0.12 to equal 2 Kz', () => {
    expect(currency(0.12, { symbol: false, money: AOA })).toBe('2 Kz')
    expect(currency(0.12, { money: AOA })).toBe('0,12 Kz')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: AOA })).toBe('0 Kz')
    expect(currency(1, { money: AOA })).toBe('1,00 Kz')
  })

  it('should float value 1.23 to equal 3 Kz', () => {
    expect(currency(1.23, { symbol: false, money: AOA })).toBe('3 Kz')
    expect(currency(1.23, { money: AOA })).toBe('1,23 Kz')
  })

  it('should float value 748.99 to equal ,99 Kz', () => {
    expect(currency(748.99, { symbol: false, money: AOA })).toBe(',99 Kz')
    expect(currency(748.99, { money: AOA })).toBe('748,99 Kz')
  })

  it('should float value 1234.56 to equal 34,56 Kz', () => {
    expect(currency(1234.56, { symbol: false, money: AOA })).toBe('34,56 Kz')
    expect(currency(1234.56, { money: AOA })).toBe('1 234,56 Kz')
  })

  it('should float value 12345.67 to equal 345,67 Kz', () => {
    expect(currency(12345.67, { symbol: false, money: AOA })).toBe('345,67 Kz')
    expect(currency(12345.67, { money: AOA })).toBe('12 345,67 Kz')
  })

  it('should float value 123456.78 to equal  456,78 Kz', () => {
    expect(currency(123456.78, { symbol: false, money: AOA })).toBe(
      ' 456,78 Kz'
    )
    expect(currency(123456.78, { money: AOA })).toBe('123 456,78 Kz')
  })

  it('should float value 1234567.89 to equal 34 567,89 Kz', () => {
    expect(currency(1234567.89, { symbol: false, money: AOA })).toBe(
      '34 567,89 Kz'
    )
    expect(currency(1234567.89, { money: AOA })).toBe('1 234 567,89 Kz')
  })
})
