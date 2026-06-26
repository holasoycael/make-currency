// modules
import { currency } from '@models/currency'

// currecy
import PGK from '@TYPES/PGK'

describe('[en-AU]', () => {
  it('should float value 0.01 to equal GK 0.01', () => {
    expect(currency(0.01, { symbol: false, money: PGK })).toBe('GK 0.01')
    expect(currency(0.01, { money: PGK })).toBe('PGK 0.01')
  })

  it('should float value 0.12 to equal GK 0.12', () => {
    expect(currency(0.12, { symbol: false, money: PGK })).toBe('GK 0.12')
    expect(currency(0.12, { money: PGK })).toBe('PGK 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: PGK })).toBe('GK 1.00')
    expect(currency(1, { money: PGK })).toBe('PGK 1.00')
  })

  it('should float value 1.23 to equal GK 1.23', () => {
    expect(currency(1.23, { symbol: false, money: PGK })).toBe('GK 1.23')
    expect(currency(1.23, { money: PGK })).toBe('PGK 1.23')
  })

  it('should float value 748.99 to equal GK 748.99', () => {
    expect(currency(748.99, { symbol: false, money: PGK })).toBe('GK 748.99')
    expect(currency(748.99, { money: PGK })).toBe('PGK 748.99')
  })

  it('should float value 1234.56 to equal GK 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: PGK })).toBe('GK 1,234.56')
    expect(currency(1234.56, { money: PGK })).toBe('PGK 1,234.56')
  })

  it('should float value 12345.67 to equal GK 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: PGK })).toBe(
      'GK 12,345.67'
    )
    expect(currency(12345.67, { money: PGK })).toBe('PGK 12,345.67')
  })

  it('should float value 123456.78 to equal GK 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: PGK })).toBe(
      'GK 123,456.78'
    )
    expect(currency(123456.78, { money: PGK })).toBe('PGK 123,456.78')
  })

  it('should float value 1234567.89 to equal GK 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: PGK })).toBe(
      'GK 1,234,567.89'
    )
    expect(currency(1234567.89, { money: PGK })).toBe('PGK 1,234,567.89')
  })
})
