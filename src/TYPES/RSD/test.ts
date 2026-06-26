// modules
import { currency } from '@models/currency'

// currecy
import RSD from '@TYPES/RSD'

describe('[en-GB]', () => {
  it('should float value 0.01 to equal RSD 0', () => {
    expect(currency(0.01, { symbol: false, money: RSD })).toBe('RSD 0')
    expect(currency(0.01, { money: RSD })).toBe('RSD 0.01')
  })

  it('should float value 0.12 to equal RSD 0', () => {
    expect(currency(0.12, { symbol: false, money: RSD })).toBe('RSD 0')
    expect(currency(0.12, { money: RSD })).toBe('RSD 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: RSD })).toBe('RSD 1')
    expect(currency(1, { money: RSD })).toBe('RSD 1.00')
  })

  it('should float value 1.23 to equal RSD 1', () => {
    expect(currency(1.23, { symbol: false, money: RSD })).toBe('RSD 1')
    expect(currency(1.23, { money: RSD })).toBe('RSD 1.23')
  })

  it('should float value 748.99 to equal RSD 748', () => {
    expect(currency(748.99, { symbol: false, money: RSD })).toBe('RSD 748')
    expect(currency(748.99, { money: RSD })).toBe('RSD 748.99')
  })

  it('should float value 1234.56 to equal RSD 1,234', () => {
    expect(currency(1234.56, { symbol: false, money: RSD })).toBe('RSD 1,234')
    expect(currency(1234.56, { money: RSD })).toBe('RSD 1,234.56')
  })

  it('should float value 12345.67 to equal RSD 12,345', () => {
    expect(currency(12345.67, { symbol: false, money: RSD })).toBe('RSD 12,345')
    expect(currency(12345.67, { money: RSD })).toBe('RSD 12,345.67')
  })

  it('should float value 123456.78 to equal RSD 123,456', () => {
    expect(currency(123456.78, { symbol: false, money: RSD })).toBe(
      'RSD 123,456'
    )
    expect(currency(123456.78, { money: RSD })).toBe('RSD 123,456.78')
  })

  it('should float value 1234567.89 to equal RSD 1,234,567', () => {
    expect(currency(1234567.89, { symbol: false, money: RSD })).toBe(
      'RSD 1,234,567'
    )
    expect(currency(1234567.89, { money: RSD })).toBe('RSD 1,234,567.89')
  })
})
