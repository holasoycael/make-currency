// modules
import { currency } from '@models/currency'

// currecy
import MKD from '@TYPES/MKD'

describe('[en-GB]', () => {
  it('should float value 0.01 to equal MKD 0', () => {
    expect(currency(0.01, { symbol: false, money: MKD })).toBe('MKD 0')
    expect(currency(0.01, { money: MKD })).toBe('MKD 0.01')
  })

  it('should float value 0.12 to equal MKD 0', () => {
    expect(currency(0.12, { symbol: false, money: MKD })).toBe('MKD 0')
    expect(currency(0.12, { money: MKD })).toBe('MKD 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: MKD })).toBe('MKD 1')
    expect(currency(1, { money: MKD })).toBe('MKD 1.00')
  })

  it('should float value 1.23 to equal MKD 1', () => {
    expect(currency(1.23, { symbol: false, money: MKD })).toBe('MKD 1')
    expect(currency(1.23, { money: MKD })).toBe('MKD 1.23')
  })

  it('should float value 748.99 to equal MKD 748', () => {
    expect(currency(748.99, { symbol: false, money: MKD })).toBe('MKD 748')
    expect(currency(748.99, { money: MKD })).toBe('MKD 748.99')
  })

  it('should float value 1234.56 to equal MKD 1,234', () => {
    expect(currency(1234.56, { symbol: false, money: MKD })).toBe('MKD 1,234')
    expect(currency(1234.56, { money: MKD })).toBe('MKD 1,234.56')
  })

  it('should float value 12345.67 to equal MKD 12,345', () => {
    expect(currency(12345.67, { symbol: false, money: MKD })).toBe('MKD 12,345')
    expect(currency(12345.67, { money: MKD })).toBe('MKD 12,345.67')
  })

  it('should float value 123456.78 to equal MKD 123,456', () => {
    expect(currency(123456.78, { symbol: false, money: MKD })).toBe(
      'MKD 123,456'
    )
    expect(currency(123456.78, { money: MKD })).toBe('MKD 123,456.78')
  })

  it('should float value 1234567.89 to equal MKD 1,234,567', () => {
    expect(currency(1234567.89, { symbol: false, money: MKD })).toBe(
      'MKD 1,234,567'
    )
    expect(currency(1234567.89, { money: MKD })).toBe('MKD 1,234,567.89')
  })
})
