// modules
import { currency } from '@models/currency'

// currecy
import PEN from '@TYPES/PEN'

describe('[es-ES]', () => {
  it('should float value 0.01 to equal 01 PEN', () => {
    expect(currency(0.01, { symbol: false, money: PEN })).toBe('01 PEN')
    expect(currency(0.01, { money: PEN })).toBe('0,01 PEN')
  })

  it('should float value 0.12 to equal 12 PEN', () => {
    expect(currency(0.12, { symbol: false, money: PEN })).toBe('12 PEN')
    expect(currency(0.12, { money: PEN })).toBe('0,12 PEN')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: PEN })).toBe('00 PEN')
    expect(currency(1, { money: PEN })).toBe('1,00 PEN')
  })

  it('should float value 1.23 to equal 23 PEN', () => {
    expect(currency(1.23, { symbol: false, money: PEN })).toBe('23 PEN')
    expect(currency(1.23, { money: PEN })).toBe('1,23 PEN')
  })

  it('should float value 748.99 to equal 8,99 PEN', () => {
    expect(currency(748.99, { symbol: false, money: PEN })).toBe('8,99 PEN')
    expect(currency(748.99, { money: PEN })).toBe('748,99 PEN')
  })

  it('should float value 1234.56 to equal 234,56 PEN', () => {
    expect(currency(1234.56, { symbol: false, money: PEN })).toBe('234,56 PEN')
    expect(currency(1234.56, { money: PEN })).toBe('1.234,56 PEN')
  })

  it('should float value 12345.67 to equal .345,67 PEN', () => {
    expect(currency(12345.67, { symbol: false, money: PEN })).toBe(
      '.345,67 PEN'
    )
    expect(currency(12345.67, { money: PEN })).toBe('12.345,67 PEN')
  })

  it('should float value 123456.78 to equal 3.456,78 PEN', () => {
    expect(currency(123456.78, { symbol: false, money: PEN })).toBe(
      '3.456,78 PEN'
    )
    expect(currency(123456.78, { money: PEN })).toBe('123.456,78 PEN')
  })

  it('should float value 1234567.89 to equal 234.567,89 PEN', () => {
    expect(currency(1234567.89, { symbol: false, money: PEN })).toBe(
      '234.567,89 PEN'
    )
    expect(currency(1234567.89, { money: PEN })).toBe('1.234.567,89 PEN')
  })
})
