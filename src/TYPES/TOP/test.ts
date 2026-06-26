// modules
import { currency } from '@models/currency'

// currecy
import TOP from '@TYPES/TOP'

describe('[en-AU]', () => {
  it('should float value 0.01 to equal OP 0.01', () => {
    expect(currency(0.01, { symbol: false, money: TOP })).toBe('OP 0.01')
    expect(currency(0.01, { money: TOP })).toBe('TOP 0.01')
  })

  it('should float value 0.12 to equal OP 0.12', () => {
    expect(currency(0.12, { symbol: false, money: TOP })).toBe('OP 0.12')
    expect(currency(0.12, { money: TOP })).toBe('TOP 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: TOP })).toBe('OP 1.00')
    expect(currency(1, { money: TOP })).toBe('TOP 1.00')
  })

  it('should float value 1.23 to equal OP 1.23', () => {
    expect(currency(1.23, { symbol: false, money: TOP })).toBe('OP 1.23')
    expect(currency(1.23, { money: TOP })).toBe('TOP 1.23')
  })

  it('should float value 748.99 to equal OP 748.99', () => {
    expect(currency(748.99, { symbol: false, money: TOP })).toBe('OP 748.99')
    expect(currency(748.99, { money: TOP })).toBe('TOP 748.99')
  })

  it('should float value 1234.56 to equal OP 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: TOP })).toBe('OP 1,234.56')
    expect(currency(1234.56, { money: TOP })).toBe('TOP 1,234.56')
  })

  it('should float value 12345.67 to equal OP 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: TOP })).toBe(
      'OP 12,345.67'
    )
    expect(currency(12345.67, { money: TOP })).toBe('TOP 12,345.67')
  })

  it('should float value 123456.78 to equal OP 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: TOP })).toBe(
      'OP 123,456.78'
    )
    expect(currency(123456.78, { money: TOP })).toBe('TOP 123,456.78')
  })

  it('should float value 1234567.89 to equal OP 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: TOP })).toBe(
      'OP 1,234,567.89'
    )
    expect(currency(1234567.89, { money: TOP })).toBe('TOP 1,234,567.89')
  })
})
