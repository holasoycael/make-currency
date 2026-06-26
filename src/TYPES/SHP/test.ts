// modules
import { currency } from '@models/currency'

// currecy
import SHP from '@TYPES/SHP'

describe('[en-GB]', () => {
  it('should float value 0.01 to equal HP 0.01', () => {
    expect(currency(0.01, { symbol: false, money: SHP })).toBe('HP 0.01')
    expect(currency(0.01, { money: SHP })).toBe('SHP 0.01')
  })

  it('should float value 0.12 to equal HP 0.12', () => {
    expect(currency(0.12, { symbol: false, money: SHP })).toBe('HP 0.12')
    expect(currency(0.12, { money: SHP })).toBe('SHP 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: SHP })).toBe('HP 1.00')
    expect(currency(1, { money: SHP })).toBe('SHP 1.00')
  })

  it('should float value 1.23 to equal HP 1.23', () => {
    expect(currency(1.23, { symbol: false, money: SHP })).toBe('HP 1.23')
    expect(currency(1.23, { money: SHP })).toBe('SHP 1.23')
  })

  it('should float value 748.99 to equal HP 748.99', () => {
    expect(currency(748.99, { symbol: false, money: SHP })).toBe('HP 748.99')
    expect(currency(748.99, { money: SHP })).toBe('SHP 748.99')
  })

  it('should float value 1234.56 to equal HP 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: SHP })).toBe('HP 1,234.56')
    expect(currency(1234.56, { money: SHP })).toBe('SHP 1,234.56')
  })

  it('should float value 12345.67 to equal HP 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: SHP })).toBe(
      'HP 12,345.67'
    )
    expect(currency(12345.67, { money: SHP })).toBe('SHP 12,345.67')
  })

  it('should float value 123456.78 to equal HP 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: SHP })).toBe(
      'HP 123,456.78'
    )
    expect(currency(123456.78, { money: SHP })).toBe('SHP 123,456.78')
  })

  it('should float value 1234567.89 to equal HP 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: SHP })).toBe(
      'HP 1,234,567.89'
    )
    expect(currency(1234567.89, { money: SHP })).toBe('SHP 1,234,567.89')
  })
})
