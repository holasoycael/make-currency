// modules
import { currency } from '@models/currency'

// currecy
import MOP from '@TYPES/MOP'

describe('[zh-CN]', () => {
  it('should float value 0.01 to equal P 0.01', () => {
    expect(currency(0.01, { symbol: false, money: MOP })).toBe('P 0.01')
    expect(currency(0.01, { money: MOP })).toBe('MOP 0.01')
  })

  it('should float value 0.12 to equal P 0.12', () => {
    expect(currency(0.12, { symbol: false, money: MOP })).toBe('P 0.12')
    expect(currency(0.12, { money: MOP })).toBe('MOP 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: MOP })).toBe('P 1.00')
    expect(currency(1, { money: MOP })).toBe('MOP 1.00')
  })

  it('should float value 1.23 to equal P 1.23', () => {
    expect(currency(1.23, { symbol: false, money: MOP })).toBe('P 1.23')
    expect(currency(1.23, { money: MOP })).toBe('MOP 1.23')
  })

  it('should float value 748.99 to equal P 748.99', () => {
    expect(currency(748.99, { symbol: false, money: MOP })).toBe('P 748.99')
    expect(currency(748.99, { money: MOP })).toBe('MOP 748.99')
  })

  it('should float value 1234.56 to equal P 1,234.56', () => {
    expect(currency(1234.56, { symbol: false, money: MOP })).toBe('P 1,234.56')
    expect(currency(1234.56, { money: MOP })).toBe('MOP 1,234.56')
  })

  it('should float value 12345.67 to equal P 12,345.67', () => {
    expect(currency(12345.67, { symbol: false, money: MOP })).toBe(
      'P 12,345.67'
    )
    expect(currency(12345.67, { money: MOP })).toBe('MOP 12,345.67')
  })

  it('should float value 123456.78 to equal P 123,456.78', () => {
    expect(currency(123456.78, { symbol: false, money: MOP })).toBe(
      'P 123,456.78'
    )
    expect(currency(123456.78, { money: MOP })).toBe('MOP 123,456.78')
  })

  it('should float value 1234567.89 to equal P 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false, money: MOP })).toBe(
      'P 1,234,567.89'
    )
    expect(currency(1234567.89, { money: MOP })).toBe('MOP 1,234,567.89')
  })
})
