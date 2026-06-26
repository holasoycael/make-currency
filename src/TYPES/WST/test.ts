// modules
import { currency } from '@models/currency'

// currecy
import WST from '@TYPES/WST'

describe('[en-AU]', () => {
  it('should float value 0.01 to equal WST 0.', () => {
    expect(currency(0.01, { symbol: false, money: WST })).toBe('WST 0.')
    expect(currency(0.01, { money: WST })).toBe('WST 0.01')
  })

  it('should float value 0.12 to equal WST 0.', () => {
    expect(currency(0.12, { symbol: false, money: WST })).toBe('WST 0.')
    expect(currency(0.12, { money: WST })).toBe('WST 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: WST })).toBe('WST 1.')
    expect(currency(1, { money: WST })).toBe('WST 1.00')
  })

  it('should float value 1.23 to equal WST 1.', () => {
    expect(currency(1.23, { symbol: false, money: WST })).toBe('WST 1.')
    expect(currency(1.23, { money: WST })).toBe('WST 1.23')
  })

  it('should float value 748.99 to equal WST 748.', () => {
    expect(currency(748.99, { symbol: false, money: WST })).toBe('WST 748.')
    expect(currency(748.99, { money: WST })).toBe('WST 748.99')
  })

  it('should float value 1234.56 to equal WST 1,234.', () => {
    expect(currency(1234.56, { symbol: false, money: WST })).toBe('WST 1,234.')
    expect(currency(1234.56, { money: WST })).toBe('WST 1,234.56')
  })

  it('should float value 12345.67 to equal WST 12,345.', () => {
    expect(currency(12345.67, { symbol: false, money: WST })).toBe(
      'WST 12,345.'
    )
    expect(currency(12345.67, { money: WST })).toBe('WST 12,345.67')
  })

  it('should float value 123456.78 to equal WST 123,456.', () => {
    expect(currency(123456.78, { symbol: false, money: WST })).toBe(
      'WST 123,456.'
    )
    expect(currency(123456.78, { money: WST })).toBe('WST 123,456.78')
  })

  it('should float value 1234567.89 to equal WST 1,234,567.', () => {
    expect(currency(1234567.89, { symbol: false, money: WST })).toBe(
      'WST 1,234,567.'
    )
    expect(currency(1234567.89, { money: WST })).toBe('WST 1,234,567.89')
  })
})
