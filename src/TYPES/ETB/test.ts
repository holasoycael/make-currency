// modules
import { currency } from '@models/currency'

// currecy
import ETB from '@TYPES/ETB'

describe('[am-ET]', () => {
  it('should float value 0.01 to equal ብር 0', () => {
    expect(currency(0.01, { symbol: false, money: ETB })).toBe('ብር 0')
    expect(currency(0.01, { money: ETB })).toBe('ብር 0.01')
  })

  it('should float value 0.12 to equal ብር 0', () => {
    expect(currency(0.12, { symbol: false, money: ETB })).toBe('ብር 0')
    expect(currency(0.12, { money: ETB })).toBe('ብር 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: ETB })).toBe('ብር 1')
    expect(currency(1, { money: ETB })).toBe('ብር 1.00')
  })

  it('should float value 1.23 to equal ብር 1', () => {
    expect(currency(1.23, { symbol: false, money: ETB })).toBe('ብር 1')
    expect(currency(1.23, { money: ETB })).toBe('ብር 1.23')
  })

  it('should float value 748.99 to equal ብር 748', () => {
    expect(currency(748.99, { symbol: false, money: ETB })).toBe('ብር 748')
    expect(currency(748.99, { money: ETB })).toBe('ብር 748.99')
  })

  it('should float value 1234.56 to equal ብር 1,234', () => {
    expect(currency(1234.56, { symbol: false, money: ETB })).toBe('ብር 1,234')
    expect(currency(1234.56, { money: ETB })).toBe('ብር 1,234.56')
  })

  it('should float value 12345.67 to equal ብር 12,345', () => {
    expect(currency(12345.67, { symbol: false, money: ETB })).toBe('ብር 12,345')
    expect(currency(12345.67, { money: ETB })).toBe('ብር 12,345.67')
  })

  it('should float value 123456.78 to equal ብር 123,456', () => {
    expect(currency(123456.78, { symbol: false, money: ETB })).toBe(
      'ብር 123,456'
    )
    expect(currency(123456.78, { money: ETB })).toBe('ብር 123,456.78')
  })

  it('should float value 1234567.89 to equal ብር 1,234,567', () => {
    expect(currency(1234567.89, { symbol: false, money: ETB })).toBe(
      'ብር 1,234,567'
    )
    expect(currency(1234567.89, { money: ETB })).toBe('ብር 1,234,567.89')
  })
})
