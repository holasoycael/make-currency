// modules
import { currency } from '@models/currency'

// currecy
import GGP from '@TYPES/GGP'

describe('[en-GB]', () => {
  it('should float value 0.01 to equal GP 0.01', () => {
    expect(currency(0.01, { symbol: false, money: GGP })).toBe('GP 0.01')
    expect(currency(0.01, { money: GGP })).toBe('GGP 0.01')
  })

  it('should float value 0.12 to equal GP 0.12', () => {
    expect(currency(0.12, { symbol: false, money: GGP })).toBe('GP 0.12')
    expect(currency(0.12, { money: GGP })).toBe('GGP 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: GGP })).toBe('GP 1.00')
    expect(currency(1, { money: GGP })).toBe('GGP 1.00')
  })

  it('should float value 1.23 to equal GP 1.23', () => {
    expect(currency(1.23, { symbol: false, money: GGP })).toBe('GP 1.23')
    expect(currency(1.23, { money: GGP })).toBe('GGP 1.23')
  })

  it('should float value 748.99 to equal GP 748.99', () => {
    expect(currency(748.99, { symbol: false, money: GGP })).toBe('GP 748.99')
    expect(currency(748.99, { money: GGP })).toBe('GGP 748.99')
  })

  it('should float value 1234.56 to equal GP 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: GGP })).toBe('GP 1,234.56')
    expect(currency(1234.56, { money: GGP })).toBe('GGP 1,234.56')
  })

  it('should float value 12345.67 to equal GP 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: GGP })).toBe(
      'GP 12,345.67'
    )
    expect(currency(12345.67, { money: GGP })).toBe('GGP 12,345.67')
  })

  it('should float value 123456.78 to equal GP 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: GGP })).toBe(
      'GP 123,456.78'
    )
    expect(currency(123456.78, { money: GGP })).toBe('GGP 123,456.78')
  })

  it('should float value 1234567.89 to equal GP 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: GGP })).toBe(
      'GP 1,234,567.89'
    )
    expect(currency(1234567.89, { money: GGP })).toBe('GGP 1,234,567.89')
  })
})
