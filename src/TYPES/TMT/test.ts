// modules
import { currency } from '@models/currency'

// currecy
import TMT from '@TYPES/TMT'

describe('[ru-RU]', () => {
  it('should float value 0.01 to equal 0,01 Т', () => {
    expect(currency(0.01, { symbol: false, money: TMT })).toBe('0,01 Т')
    expect(currency(0.01, { money: TMT })).toBe('0,01 ТМТ')
  })

  it('should float value 0.12 to equal 0,12 Т', () => {
    expect(currency(0.12, { symbol: false, money: TMT })).toBe('0,12 Т')
    expect(currency(0.12, { money: TMT })).toBe('0,12 ТМТ')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: TMT })).toBe('1,00 Т')
    expect(currency(1, { money: TMT })).toBe('1,00 ТМТ')
  })

  it('should float value 1.23 to equal 1,23 Т', () => {
    expect(currency(1.23, { symbol: false, money: TMT })).toBe('1,23 Т')
    expect(currency(1.23, { money: TMT })).toBe('1,23 ТМТ')
  })

  it('should float value 748.99 to equal 748,99 Т', () => {
    expect(currency(748.99, { symbol: false, money: TMT })).toBe('748,99 Т')
    expect(currency(748.99, { money: TMT })).toBe('748,99 ТМТ')
  })

  it('should float value 1234.56 to equal 1 234,56 Т', () => {
    expect(currency(1234.56, { symbol: false, money: TMT })).toBe('1 234,56 Т')
    expect(currency(1234.56, { money: TMT })).toBe('1 234,56 ТМТ')
  })

  it('should float value 12345.67 to equal 12 345,67 Т', () => {
    expect(currency(12345.67, { symbol: false, money: TMT })).toBe(
      '12 345,67 Т'
    )
    expect(currency(12345.67, { money: TMT })).toBe('12 345,67 ТМТ')
  })

  it('should float value 123456.78 to equal 123 456,78 Т', () => {
    expect(currency(123456.78, { symbol: false, money: TMT })).toBe(
      '123 456,78 Т'
    )
    expect(currency(123456.78, { money: TMT })).toBe('123 456,78 ТМТ')
  })

  it('should float value 1234567.89 to equal 1 234 567,89 Т', () => {
    expect(currency(1234567.89, { symbol: false, money: TMT })).toBe(
      '1 234 567,89 Т'
    )
    expect(currency(1234567.89, { money: TMT })).toBe('1 234 567,89 ТМТ')
  })
})
