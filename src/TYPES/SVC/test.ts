// modules
import { currency } from '@models/currency'

// currecy
import SVC from '@TYPES/SVC'

describe('[es-ES]', () => {
  it('should float value 0.01 to equal ,01 SVC', () => {
    expect(currency(0.01, { symbol: false, money: SVC })).toBe(',01 SVC')
    expect(currency(0.01, { money: SVC })).toBe('0,01 SVC')
  })

  it('should float value 0.12 to equal ,12 SVC', () => {
    expect(currency(0.12, { symbol: false, money: SVC })).toBe(',12 SVC')
    expect(currency(0.12, { money: SVC })).toBe('0,12 SVC')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: SVC })).toBe(',00 SVC')
    expect(currency(1, { money: SVC })).toBe('1,00 SVC')
  })

  it('should float value 1.23 to equal ,23 SVC', () => {
    expect(currency(1.23, { symbol: false, money: SVC })).toBe(',23 SVC')
    expect(currency(1.23, { money: SVC })).toBe('1,23 SVC')
  })

  it('should float value 748.99 to equal 48,99 SVC', () => {
    expect(currency(748.99, { symbol: false, money: SVC })).toBe('48,99 SVC')
    expect(currency(748.99, { money: SVC })).toBe('748,99 SVC')
  })

  it('should float value 1234.56 to equal .234,56 SVC', () => {
    expect(currency(1234.56, { symbol: false, money: SVC })).toBe('.234,56 SVC')
    expect(currency(1234.56, { money: SVC })).toBe('1.234,56 SVC')
  })

  it('should float value 12345.67 to equal 2.345,67 SVC', () => {
    expect(currency(12345.67, { symbol: false, money: SVC })).toBe(
      '2.345,67 SVC'
    )
    expect(currency(12345.67, { money: SVC })).toBe('12.345,67 SVC')
  })

  it('should float value 123456.78 to equal 23.456,78 SVC', () => {
    expect(currency(123456.78, { symbol: false, money: SVC })).toBe(
      '23.456,78 SVC'
    )
    expect(currency(123456.78, { money: SVC })).toBe('123.456,78 SVC')
  })

  it('should float value 1234567.89 to equal .234.567,89 SVC', () => {
    expect(currency(1234567.89, { symbol: false, money: SVC })).toBe(
      '.234.567,89 SVC'
    )
    expect(currency(1234567.89, { money: SVC })).toBe('1.234.567,89 SVC')
  })
})
