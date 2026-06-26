// modules
import { currency } from '@models/currency'

// currecy
import GMD from '@TYPES/GMD'

describe('[en-GB]', () => {
  it('should float value 0.01 to equal MD 0.01', () => {
    expect(currency(0.01, { symbol: false, money: GMD })).toBe('MD 0.01')
    expect(currency(0.01, { money: GMD })).toBe('GMD 0.01')
  })

  it('should float value 0.12 to equal MD 0.12', () => {
    expect(currency(0.12, { symbol: false, money: GMD })).toBe('MD 0.12')
    expect(currency(0.12, { money: GMD })).toBe('GMD 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: GMD })).toBe('MD 1.00')
    expect(currency(1, { money: GMD })).toBe('GMD 1.00')
  })

  it('should float value 1.23 to equal MD 1.23', () => {
    expect(currency(1.23, { symbol: false, money: GMD })).toBe('MD 1.23')
    expect(currency(1.23, { money: GMD })).toBe('GMD 1.23')
  })

  it('should float value 748.99 to equal MD 748.99', () => {
    expect(currency(748.99, { symbol: false, money: GMD })).toBe('MD 748.99')
    expect(currency(748.99, { money: GMD })).toBe('GMD 748.99')
  })

  it('should float value 1234.56 to equal MD 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: GMD })).toBe('MD 1,234.56')
    expect(currency(1234.56, { money: GMD })).toBe('GMD 1,234.56')
  })

  it('should float value 12345.67 to equal MD 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: GMD })).toBe(
      'MD 12,345.67'
    )
    expect(currency(12345.67, { money: GMD })).toBe('GMD 12,345.67')
  })

  it('should float value 123456.78 to equal MD 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: GMD })).toBe(
      'MD 123,456.78'
    )
    expect(currency(123456.78, { money: GMD })).toBe('GMD 123,456.78')
  })

  it('should float value 1234567.89 to equal MD 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: GMD })).toBe(
      'MD 1,234,567.89'
    )
    expect(currency(1234567.89, { money: GMD })).toBe('GMD 1,234,567.89')
  })
})
