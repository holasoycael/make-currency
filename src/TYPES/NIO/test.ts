// modules
import { currency } from '@models/currency'

// currecy
import NIO from '@TYPES/NIO'

describe('[es-ES]', () => {
  it('should float value 0.01 to equal ,01 NIO', () => {
    expect(currency(0.01, { symbol: false, money: NIO })).toBe(',01 NIO')
    expect(currency(0.01, { money: NIO })).toBe('0,01 NIO')
  })

  it('should float value 0.12 to equal ,12 NIO', () => {
    expect(currency(0.12, { symbol: false, money: NIO })).toBe(',12 NIO')
    expect(currency(0.12, { money: NIO })).toBe('0,12 NIO')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: NIO })).toBe(',00 NIO')
    expect(currency(1, { money: NIO })).toBe('1,00 NIO')
  })

  it('should float value 1.23 to equal ,23 NIO', () => {
    expect(currency(1.23, { symbol: false, money: NIO })).toBe(',23 NIO')
    expect(currency(1.23, { money: NIO })).toBe('1,23 NIO')
  })

  it('should float value 748.99 to equal 48,99 NIO', () => {
    expect(currency(748.99, { symbol: false, money: NIO })).toBe('48,99 NIO')
    expect(currency(748.99, { money: NIO })).toBe('748,99 NIO')
  })

  it('should float value 1234.56 to equal .234,56 NIO', () => {
    expect(currency(1234.56, { symbol: false, money: NIO })).toBe('.234,56 NIO')
    expect(currency(1234.56, { money: NIO })).toBe('1.234,56 NIO')
  })

  it('should float value 12345.67 to equal 2.345,67 NIO', () => {
    expect(currency(12345.67, { symbol: false, money: NIO })).toBe(
      '2.345,67 NIO'
    )
    expect(currency(12345.67, { money: NIO })).toBe('12.345,67 NIO')
  })

  it('should float value 123456.78 to equal 23.456,78 NIO', () => {
    expect(currency(123456.78, { symbol: false, money: NIO })).toBe(
      '23.456,78 NIO'
    )
    expect(currency(123456.78, { money: NIO })).toBe('123.456,78 NIO')
  })

  it('should float value 1234567.89 to equal .234.567,89 NIO', () => {
    expect(currency(1234567.89, { symbol: false, money: NIO })).toBe(
      '.234.567,89 NIO'
    )
    expect(currency(1234567.89, { money: NIO })).toBe('1.234.567,89 NIO')
  })
})
