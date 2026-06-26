// modules
import { currency } from '@models/currency'

// currecy
import VUV from '@TYPES/VUV'

describe('[en-AU]', () => {
  it('should float value 0.01 to equal VUV 0.', () => {
    expect(currency(0.01, { symbol: false, money: VUV })).toBe('VUV 0.')
    expect(currency(0.01, { money: VUV })).toBe('VUV 0.01')
  })

  it('should float value 0.12 to equal VUV 0.', () => {
    expect(currency(0.12, { symbol: false, money: VUV })).toBe('VUV 0.')
    expect(currency(0.12, { money: VUV })).toBe('VUV 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: VUV })).toBe('VUV 1.')
    expect(currency(1, { money: VUV })).toBe('VUV 1.00')
  })

  it('should float value 1.23 to equal VUV 1.', () => {
    expect(currency(1.23, { symbol: false, money: VUV })).toBe('VUV 1.')
    expect(currency(1.23, { money: VUV })).toBe('VUV 1.23')
  })

  it('should float value 748.99 to equal VUV 748.', () => {
    expect(currency(748.99, { symbol: false, money: VUV })).toBe('VUV 748.')
    expect(currency(748.99, { money: VUV })).toBe('VUV 748.99')
  })

  it('should float value 1234.56 to equal VUV 1,234.', () => {
    expect(currency(1234.56, { symbol: false, money: VUV })).toBe('VUV 1,234.')
    expect(currency(1234.56, { money: VUV })).toBe('VUV 1,234.56')
  })

  it('should float value 12345.67 to equal VUV 12,345.', () => {
    expect(currency(12345.67, { symbol: false, money: VUV })).toBe(
      'VUV 12,345.'
    )
    expect(currency(12345.67, { money: VUV })).toBe('VUV 12,345.67')
  })

  it('should float value 123456.78 to equal VUV 123,456.', () => {
    expect(currency(123456.78, { symbol: false, money: VUV })).toBe(
      'VUV 123,456.'
    )
    expect(currency(123456.78, { money: VUV })).toBe('VUV 123,456.78')
  })

  it('should float value 1234567.89 to equal VUV 1,234,567.', () => {
    expect(currency(1234567.89, { symbol: false, money: VUV })).toBe(
      'VUV 1,234,567.'
    )
    expect(currency(1234567.89, { money: VUV })).toBe('VUV 1,234,567.89')
  })
})
