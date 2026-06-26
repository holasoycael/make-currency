// modules
import { currency } from '@models/currency'

// currecy
import ILS from '@TYPES/ILS'

describe('[he-IL]', () => {
  it('should float value 0.01 to equal ‏0.01 ', () => {
    expect(currency(0.01, { symbol: false, money: ILS })).toBe('‏0.01 ')
    expect(currency(0.01, { money: ILS })).toBe('‏0.01 ‏₪')
  })

  it('should float value 0.12 to equal ‏0.12 ', () => {
    expect(currency(0.12, { symbol: false, money: ILS })).toBe('‏0.12 ')
    expect(currency(0.12, { money: ILS })).toBe('‏0.12 ‏₪')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: ILS })).toBe('‏1.00 ')
    expect(currency(1, { money: ILS })).toBe('‏1.00 ‏₪')
  })

  it('should float value 1.23 to equal ‏1.23 ', () => {
    expect(currency(1.23, { symbol: false, money: ILS })).toBe('‏1.23 ')
    expect(currency(1.23, { money: ILS })).toBe('‏1.23 ‏₪')
  })

  it('should float value 748.99 to equal ‏748.99 ', () => {
    expect(currency(748.99, { symbol: false, money: ILS })).toBe('‏748.99 ')
    expect(currency(748.99, { money: ILS })).toBe('‏748.99 ‏₪')
  })

  it('should float value 1234.56 to equal ‏1,234.56 ', () => {
    expect(currency(1234.56, { symbol: false, money: ILS })).toBe('‏1,234.56 ')
    expect(currency(1234.56, { money: ILS })).toBe('‏1,234.56 ‏₪')
  })

  it('should float value 12345.67 to equal ‏12,345.67 ', () => {
    expect(currency(12345.67, { symbol: false, money: ILS })).toBe(
      '‏12,345.67 '
    )
    expect(currency(12345.67, { money: ILS })).toBe('‏12,345.67 ‏₪')
  })

  it('should float value 123456.78 to equal ‏123,456.78 ', () => {
    expect(currency(123456.78, { symbol: false, money: ILS })).toBe(
      '‏123,456.78 '
    )
    expect(currency(123456.78, { money: ILS })).toBe('‏123,456.78 ‏₪')
  })

  it('should float value 1234567.89 to equal ‏1,234,567.89 ', () => {
    expect(currency(1234567.89, { symbol: false, money: ILS })).toBe(
      '‏1,234,567.89 '
    )
    expect(currency(1234567.89, { money: ILS })).toBe('‏1,234,567.89 ‏₪')
  })
})
