// modules
import { currency } from '@models/currency'

// currecy
import CLP from '@TYPES/CLP'

describe('[es-CL]', () => {
  it('should float value 0.01 to equal ,01', () => {
    expect(currency(0.01, { symbol: false, money: CLP })).toBe(',01')
    expect(currency(0.01, { money: CLP })).toBe('$0,01')
  })

  it('should float value 0.12 to equal ,12', () => {
    expect(currency(0.12, { symbol: false, money: CLP })).toBe(',12')
    expect(currency(0.12, { money: CLP })).toBe('$0,12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: CLP })).toBe(',00')
    expect(currency(1, { money: CLP })).toBe('$1,00')
  })

  it('should float value 1.23 to equal ,23', () => {
    expect(currency(1.23, { symbol: false, money: CLP })).toBe(',23')
    expect(currency(1.23, { money: CLP })).toBe('$1,23')
  })

  it('should float value 748.99 to equal 48,99', () => {
    expect(currency(748.99, { symbol: false, money: CLP })).toBe('48,99')
    expect(currency(748.99, { money: CLP })).toBe('$748,99')
  })

  it('should float value 1234.56 to equal .234,56', () => {
    expect(currency(1234.56, { symbol: false, money: CLP })).toBe('.234,56')
    expect(currency(1234.56, { money: CLP })).toBe('$1.234,56')
  })

  it('should float value 12345.67 to equal 2.345,67', () => {
    expect(currency(12345.67, { symbol: false, money: CLP })).toBe('2.345,67')
    expect(currency(12345.67, { money: CLP })).toBe('$12.345,67')
  })

  it('should float value 123456.78 to equal 23.456,78', () => {
    expect(currency(123456.78, { symbol: false, money: CLP })).toBe('23.456,78')
    expect(currency(123456.78, { money: CLP })).toBe('$123.456,78')
  })

  it('should float value 1234567.89 to equal .234.567,89', () => {
    expect(currency(1234567.89, { symbol: false, money: CLP })).toBe(
      '.234.567,89'
    )
    expect(currency(1234567.89, { money: CLP })).toBe('$1.234.567,89')
  })
})
