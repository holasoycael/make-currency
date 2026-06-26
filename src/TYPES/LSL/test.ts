// modules
import { currency } from '@models/currency'

// currecy
import LSL from '@TYPES/LSL'

describe('[en-US]', () => {
  it('should float value 0.01 to equal SL 0.01', () => {
    expect(currency(0.01, { symbol: false, money: LSL })).toBe('SL 0.01')
    expect(currency(0.01, { money: LSL })).toBe('LSL 0.01')
  })

  it('should float value 0.12 to equal SL 0.12', () => {
    expect(currency(0.12, { symbol: false, money: LSL })).toBe('SL 0.12')
    expect(currency(0.12, { money: LSL })).toBe('LSL 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: LSL })).toBe('SL 1.00')
    expect(currency(1, { money: LSL })).toBe('LSL 1.00')
  })

  it('should float value 1.23 to equal SL 1.23', () => {
    expect(currency(1.23, { symbol: false, money: LSL })).toBe('SL 1.23')
    expect(currency(1.23, { money: LSL })).toBe('LSL 1.23')
  })

  it('should float value 748.99 to equal SL 748.99', () => {
    expect(currency(748.99, { symbol: false, money: LSL })).toBe('SL 748.99')
    expect(currency(748.99, { money: LSL })).toBe('LSL 748.99')
  })

  it('should float value 1234.56 to equal SL 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: LSL })).toBe('SL 1,234.56')
    expect(currency(1234.56, { money: LSL })).toBe('LSL 1,234.56')
  })

  it('should float value 12345.67 to equal SL 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: LSL })).toBe(
      'SL 12,345.67'
    )
    expect(currency(12345.67, { money: LSL })).toBe('LSL 12,345.67')
  })

  it('should float value 123456.78 to equal SL 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: LSL })).toBe(
      'SL 123,456.78'
    )
    expect(currency(123456.78, { money: LSL })).toBe('LSL 123,456.78')
  })

  it('should float value 1234567.89 to equal SL 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: LSL })).toBe(
      'SL 1,234,567.89'
    )
    expect(currency(1234567.89, { money: LSL })).toBe('LSL 1,234,567.89')
  })
})
