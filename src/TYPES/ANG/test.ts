// modules
import { currency } from '@models/currency'

// currecy
import ANG from '@TYPES/ANG'

describe('[nl-NL]', () => {
  it('should float value 0.01 to equal G 0,01', () => {
    expect(currency(0.01, { symbol: false, money: ANG })).toBe('G 0,01')
    expect(currency(0.01, { money: ANG })).toBe('ANG 0,01')
  })

  it('should float value 0.12 to equal G 0,12', () => {
    expect(currency(0.12, { symbol: false, money: ANG })).toBe('G 0,12')
    expect(currency(0.12, { money: ANG })).toBe('ANG 0,12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: ANG })).toBe('G 1,00')
    expect(currency(1, { money: ANG })).toBe('ANG 1,00')
  })

  it('should float value 1.23 to equal G 1,23', () => {
    expect(currency(1.23, { symbol: false, money: ANG })).toBe('G 1,23')
    expect(currency(1.23, { money: ANG })).toBe('ANG 1,23')
  })

  it('should float value 748.99 to equal G 748,99', () => {
    expect(currency(748.99, { symbol: false, money: ANG })).toBe('G 748,99')
    expect(currency(748.99, { money: ANG })).toBe('ANG 748,99')
  })

  it('should float value 1234.56 to equal G 1.234,56', () => {
    expect(currency(1234.56, { symbol: false, money: ANG })).toBe('G 1.234,56')
    expect(currency(1234.56, { money: ANG })).toBe('ANG 1.234,56')
  })

  it('should float value 12345.67 to equal G 12.345,67', () => {
    expect(currency(12345.67, { symbol: false, money: ANG })).toBe(
      'G 12.345,67'
    )
    expect(currency(12345.67, { money: ANG })).toBe('ANG 12.345,67')
  })

  it('should float value 123456.78 to equal G 123.456,78', () => {
    expect(currency(123456.78, { symbol: false, money: ANG })).toBe(
      'G 123.456,78'
    )
    expect(currency(123456.78, { money: ANG })).toBe('ANG 123.456,78')
  })

  it('should float value 1234567.89 to equal G 1.234.567,89', () => {
    expect(currency(1234567.89, { symbol: false, money: ANG })).toBe(
      'G 1.234.567,89'
    )
    expect(currency(1234567.89, { money: ANG })).toBe('ANG 1.234.567,89')
  })
})
