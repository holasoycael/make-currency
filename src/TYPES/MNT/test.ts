// modules
import { currency } from '@models/currency'

// currecy
import MNT from '@TYPES/MNT'

describe('[en-US]', () => {
  it('should float value 0.01 to equal MNT 0.0', () => {
    expect(currency(0.01, { symbol: false, money: MNT })).toBe('MNT 0.0')
    expect(currency(0.01, { money: MNT })).toBe('MNT 0.01')
  })

  it('should float value 0.12 to equal MNT 0.1', () => {
    expect(currency(0.12, { symbol: false, money: MNT })).toBe('MNT 0.1')
    expect(currency(0.12, { money: MNT })).toBe('MNT 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: MNT })).toBe('MNT 1.0')
    expect(currency(1, { money: MNT })).toBe('MNT 1.00')
  })

  it('should float value 1.23 to equal MNT 1.2', () => {
    expect(currency(1.23, { symbol: false, money: MNT })).toBe('MNT 1.2')
    expect(currency(1.23, { money: MNT })).toBe('MNT 1.23')
  })

  it('should float value 748.99 to equal MNT 748.9', () => {
    expect(currency(748.99, { symbol: false, money: MNT })).toBe('MNT 748.9')
    expect(currency(748.99, { money: MNT })).toBe('MNT 748.99')
  })

  it('should float value 1234.56 to equal MNT 1,234.5', () => {
    expect(currency(1234.56, { symbol: false, money: MNT })).toBe('MNT 1,234.5')
    expect(currency(1234.56, { money: MNT })).toBe('MNT 1,234.56')
  })

  it('should float value 12345.67 to equal MNT 12,345.6', () => {
    expect(currency(12345.67, { symbol: false, money: MNT })).toBe(
      'MNT 12,345.6'
    )
    expect(currency(12345.67, { money: MNT })).toBe('MNT 12,345.67')
  })

  it('should float value 123456.78 to equal MNT 123,456.7', () => {
    expect(currency(123456.78, { symbol: false, money: MNT })).toBe(
      'MNT 123,456.7'
    )
    expect(currency(123456.78, { money: MNT })).toBe('MNT 123,456.78')
  })

  it('should float value 1234567.89 to equal MNT 1,234,567.8', () => {
    expect(currency(1234567.89, { symbol: false, money: MNT })).toBe(
      'MNT 1,234,567.8'
    )
    expect(currency(1234567.89, { money: MNT })).toBe('MNT 1,234,567.89')
  })
})
