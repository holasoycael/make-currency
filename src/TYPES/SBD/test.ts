// modules
import { currency } from '@models/currency'

// currecy
import SBD from '@TYPES/SBD'

describe('[en-AU]', () => {
  it('should float value 0.01 to equal BD 0.01', () => {
    expect(currency(0.01, { symbol: false, money: SBD })).toBe('BD 0.01')
    expect(currency(0.01, { money: SBD })).toBe('SBD 0.01')
  })

  it('should float value 0.12 to equal BD 0.12', () => {
    expect(currency(0.12, { symbol: false, money: SBD })).toBe('BD 0.12')
    expect(currency(0.12, { money: SBD })).toBe('SBD 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: SBD })).toBe('BD 1.00')
    expect(currency(1, { money: SBD })).toBe('SBD 1.00')
  })

  it('should float value 1.23 to equal BD 1.23', () => {
    expect(currency(1.23, { symbol: false, money: SBD })).toBe('BD 1.23')
    expect(currency(1.23, { money: SBD })).toBe('SBD 1.23')
  })

  it('should float value 748.99 to equal BD 748.99', () => {
    expect(currency(748.99, { symbol: false, money: SBD })).toBe('BD 748.99')
    expect(currency(748.99, { money: SBD })).toBe('SBD 748.99')
  })

  it('should float value 1234.56 to equal BD 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: SBD })).toBe('BD 1,234.56')
    expect(currency(1234.56, { money: SBD })).toBe('SBD 1,234.56')
  })

  it('should float value 12345.67 to equal BD 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: SBD })).toBe(
      'BD 12,345.67'
    )
    expect(currency(12345.67, { money: SBD })).toBe('SBD 12,345.67')
  })

  it('should float value 123456.78 to equal BD 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: SBD })).toBe(
      'BD 123,456.78'
    )
    expect(currency(123456.78, { money: SBD })).toBe('SBD 123,456.78')
  })

  it('should float value 1234567.89 to equal BD 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: SBD })).toBe(
      'BD 1,234,567.89'
    )
    expect(currency(1234567.89, { money: SBD })).toBe('SBD 1,234,567.89')
  })
})
