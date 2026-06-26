// modules
import { currency } from '@models/currency'

// currecy
import ZMW from '@TYPES/ZMW'

describe('[en-GB]', () => {
  it('should float value 0.01 to equal MW 0.01', () => {
    expect(currency(0.01, { symbol: false, money: ZMW })).toBe('MW 0.01')
    expect(currency(0.01, { money: ZMW })).toBe('ZMW 0.01')
  })

  it('should float value 0.12 to equal MW 0.12', () => {
    expect(currency(0.12, { symbol: false, money: ZMW })).toBe('MW 0.12')
    expect(currency(0.12, { money: ZMW })).toBe('ZMW 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: ZMW })).toBe('MW 1.00')
    expect(currency(1, { money: ZMW })).toBe('ZMW 1.00')
  })

  it('should float value 1.23 to equal MW 1.23', () => {
    expect(currency(1.23, { symbol: false, money: ZMW })).toBe('MW 1.23')
    expect(currency(1.23, { money: ZMW })).toBe('ZMW 1.23')
  })

  it('should float value 748.99 to equal MW 748.99', () => {
    expect(currency(748.99, { symbol: false, money: ZMW })).toBe('MW 748.99')
    expect(currency(748.99, { money: ZMW })).toBe('ZMW 748.99')
  })

  it('should float value 1234.56 to equal MW 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: ZMW })).toBe('MW 1,234.56')
    expect(currency(1234.56, { money: ZMW })).toBe('ZMW 1,234.56')
  })

  it('should float value 12345.67 to equal MW 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: ZMW })).toBe(
      'MW 12,345.67'
    )
    expect(currency(12345.67, { money: ZMW })).toBe('ZMW 12,345.67')
  })

  it('should float value 123456.78 to equal MW 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: ZMW })).toBe(
      'MW 123,456.78'
    )
    expect(currency(123456.78, { money: ZMW })).toBe('ZMW 123,456.78')
  })

  it('should float value 1234567.89 to equal MW 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: ZMW })).toBe(
      'MW 1,234,567.89'
    )
    expect(currency(1234567.89, { money: ZMW })).toBe('ZMW 1,234,567.89')
  })
})
