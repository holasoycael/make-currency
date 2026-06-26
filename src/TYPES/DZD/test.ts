// modules
import { currency } from '@models/currency'

// currecy
import DZD from '@TYPES/DZD'

describe('[ar-DZ]', () => {
  it('should float value 0.01 to equal ‏0,01 د', () => {
    expect(currency(0.01, { symbol: false, money: DZD })).toBe('‏0,01 د')
    expect(currency(0.01, { money: DZD })).toBe('‏0,01 د.ج.‏')
  })

  it('should float value 0.12 to equal ‏0,12 د', () => {
    expect(currency(0.12, { symbol: false, money: DZD })).toBe('‏0,12 د')
    expect(currency(0.12, { money: DZD })).toBe('‏0,12 د.ج.‏')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: DZD })).toBe('‏1,00 د')
    expect(currency(1, { money: DZD })).toBe('‏1,00 د.ج.‏')
  })

  it('should float value 1.23 to equal ‏1,23 د', () => {
    expect(currency(1.23, { symbol: false, money: DZD })).toBe('‏1,23 د')
    expect(currency(1.23, { money: DZD })).toBe('‏1,23 د.ج.‏')
  })

  it('should float value 748.99 to equal ‏748,99 د', () => {
    expect(currency(748.99, { symbol: false, money: DZD })).toBe('‏748,99 د')
    expect(currency(748.99, { money: DZD })).toBe('‏748,99 د.ج.‏')
  })

  it('should float value 1234.56 to equal ‏1.234,56 د', () => {
    expect(currency(1234.56, { symbol: false, money: DZD })).toBe('‏1.234,56 د')
    expect(currency(1234.56, { money: DZD })).toBe('‏1.234,56 د.ج.‏')
  })

  it('should float value 12345.67 to equal ‏12.345,67 د', () => {
    expect(currency(12345.67, { symbol: false, money: DZD })).toBe(
      '‏12.345,67 د'
    )
    expect(currency(12345.67, { money: DZD })).toBe('‏12.345,67 د.ج.‏')
  })

  it('should float value 123456.78 to equal ‏123.456,78 د', () => {
    expect(currency(123456.78, { symbol: false, money: DZD })).toBe(
      '‏123.456,78 د'
    )
    expect(currency(123456.78, { money: DZD })).toBe('‏123.456,78 د.ج.‏')
  })

  it('should float value 1234567.89 to equal ‏1.234.567,89 د', () => {
    expect(currency(1234567.89, { symbol: false, money: DZD })).toBe(
      '‏1.234.567,89 د'
    )
    expect(currency(1234567.89, { money: DZD })).toBe('‏1.234.567,89 د.ج.‏')
  })
})
