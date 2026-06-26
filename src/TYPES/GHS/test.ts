// modules
import { currency } from '@models/currency'

// currecy
import GHS from '@TYPES/GHS'

describe('[ak-GH]', () => {
  it('should float value 0.01 to equal H₵0.01', () => {
    expect(currency(0.01, { symbol: false, money: GHS })).toBe('H₵0.01')
    expect(currency(0.01, { money: GHS })).toBe('GH₵0.01')
  })

  it('should float value 0.12 to equal H₵0.12', () => {
    expect(currency(0.12, { symbol: false, money: GHS })).toBe('H₵0.12')
    expect(currency(0.12, { money: GHS })).toBe('GH₵0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: GHS })).toBe('H₵1.00')
    expect(currency(1, { money: GHS })).toBe('GH₵1.00')
  })

  it('should float value 1.23 to equal H₵1.23', () => {
    expect(currency(1.23, { symbol: false, money: GHS })).toBe('H₵1.23')
    expect(currency(1.23, { money: GHS })).toBe('GH₵1.23')
  })

  it('should float value 748.99 to equal H₵748.99', () => {
    expect(currency(748.99, { symbol: false, money: GHS })).toBe('H₵748.99')
    expect(currency(748.99, { money: GHS })).toBe('GH₵748.99')
  })

  it('should float value 1234.56 to equal H₵1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: GHS })).toBe('H₵1,234.56')
    expect(currency(1234.56, { money: GHS })).toBe('GH₵1,234.56')
  })

  it('should float value 12345.67 to equal H₵12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: GHS })).toBe(
      'H₵12,345.67'
    )
    expect(currency(12345.67, { money: GHS })).toBe('GH₵12,345.67')
  })

  it('should float value 123456.78 to equal H₵123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: GHS })).toBe(
      'H₵123,456.78'
    )
    expect(currency(123456.78, { money: GHS })).toBe('GH₵123,456.78')
  })

  it('should float value 1234567.89 to equal H₵1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: GHS })).toBe(
      'H₵1,234,567.89'
    )
    expect(currency(1234567.89, { money: GHS })).toBe('GH₵1,234,567.89')
  })
})
