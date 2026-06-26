// modules
import { currency } from '@models/currency'

// currecy
import PAB from '@TYPES/PAB'

describe('[es-ES]', () => {
  it('should float value 0.01 to equal ,01 PAB', () => {
    expect(currency(0.01, { symbol: false, money: PAB })).toBe(',01 PAB')
    expect(currency(0.01, { money: PAB })).toBe('0,01 PAB')
  })

  it('should float value 0.12 to equal ,12 PAB', () => {
    expect(currency(0.12, { symbol: false, money: PAB })).toBe(',12 PAB')
    expect(currency(0.12, { money: PAB })).toBe('0,12 PAB')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: PAB })).toBe(',00 PAB')
    expect(currency(1, { money: PAB })).toBe('1,00 PAB')
  })

  it('should float value 1.23 to equal ,23 PAB', () => {
    expect(currency(1.23, { symbol: false, money: PAB })).toBe(',23 PAB')
    expect(currency(1.23, { money: PAB })).toBe('1,23 PAB')
  })

  it('should float value 748.99 to equal 48,99 PAB', () => {
    expect(currency(748.99, { symbol: false, money: PAB })).toBe('48,99 PAB')
    expect(currency(748.99, { money: PAB })).toBe('748,99 PAB')
  })

  it('should float value 1234.56 to equal .234,56 PAB', () => {
    expect(currency(1234.56, { symbol: false, money: PAB })).toBe('.234,56 PAB')
    expect(currency(1234.56, { money: PAB })).toBe('1.234,56 PAB')
  })

  it('should float value 12345.67 to equal 2.345,67 PAB', () => {
    expect(currency(12345.67, { symbol: false, money: PAB })).toBe(
      '2.345,67 PAB'
    )
    expect(currency(12345.67, { money: PAB })).toBe('12.345,67 PAB')
  })

  it('should float value 123456.78 to equal 23.456,78 PAB', () => {
    expect(currency(123456.78, { symbol: false, money: PAB })).toBe(
      '23.456,78 PAB'
    )
    expect(currency(123456.78, { money: PAB })).toBe('123.456,78 PAB')
  })

  it('should float value 1234567.89 to equal .234.567,89 PAB', () => {
    expect(currency(1234567.89, { symbol: false, money: PAB })).toBe(
      '.234.567,89 PAB'
    )
    expect(currency(1234567.89, { money: PAB })).toBe('1.234.567,89 PAB')
  })
})
