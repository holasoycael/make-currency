// modules
import { currency } from '@models/currency'

// currecy
import SZL from '@TYPES/SZL'

describe('[en-GB]', () => {
  it('should float value 0.01 to equal ZL 0.01', () => {
    expect(currency(0.01, { symbol: false, money: SZL })).toBe('ZL 0.01')
    expect(currency(0.01, { money: SZL })).toBe('SZL 0.01')
  })

  it('should float value 0.12 to equal ZL 0.12', () => {
    expect(currency(0.12, { symbol: false, money: SZL })).toBe('ZL 0.12')
    expect(currency(0.12, { money: SZL })).toBe('SZL 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: SZL })).toBe('ZL 1.00')
    expect(currency(1, { money: SZL })).toBe('SZL 1.00')
  })

  it('should float value 1.23 to equal ZL 1.23', () => {
    expect(currency(1.23, { symbol: false, money: SZL })).toBe('ZL 1.23')
    expect(currency(1.23, { money: SZL })).toBe('SZL 1.23')
  })

  it('should float value 748.99 to equal ZL 748.99', () => {
    expect(currency(748.99, { symbol: false, money: SZL })).toBe('ZL 748.99')
    expect(currency(748.99, { money: SZL })).toBe('SZL 748.99')
  })

  it('should float value 1234.56 to equal ZL 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: SZL })).toBe('ZL 1,234.56')
    expect(currency(1234.56, { money: SZL })).toBe('SZL 1,234.56')
  })

  it('should float value 12345.67 to equal ZL 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: SZL })).toBe(
      'ZL 12,345.67'
    )
    expect(currency(12345.67, { money: SZL })).toBe('SZL 12,345.67')
  })

  it('should float value 123456.78 to equal ZL 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: SZL })).toBe(
      'ZL 123,456.78'
    )
    expect(currency(123456.78, { money: SZL })).toBe('SZL 123,456.78')
  })

  it('should float value 1234567.89 to equal ZL 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: SZL })).toBe(
      'ZL 1,234,567.89'
    )
    expect(currency(1234567.89, { money: SZL })).toBe('SZL 1,234,567.89')
  })
})
