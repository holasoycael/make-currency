// modules
import { currency } from '@models/currency'

// currecy
import TND from '@TYPES/TND'

describe('[ar-EG]', () => {
  it('should float value 0.01 to equal ‏٠٫٠١ د', () => {
    expect(currency(0.01, { symbol: false, money: TND })).toBe('‏٠٫٠١ د')
    expect(currency(0.01, { money: TND })).toBe('‏٠٫٠١ د.ت.‏')
  })

  it('should float value 0.12 to equal ‏٠٫١٢ د', () => {
    expect(currency(0.12, { symbol: false, money: TND })).toBe('‏٠٫١٢ د')
    expect(currency(0.12, { money: TND })).toBe('‏٠٫١٢ د.ت.‏')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: TND })).toBe('‏١٫٠٠ د')
    expect(currency(1, { money: TND })).toBe('‏١٫٠٠ د.ت.‏')
  })

  it('should float value 1.23 to equal ‏١٫٢٣ د', () => {
    expect(currency(1.23, { symbol: false, money: TND })).toBe('‏١٫٢٣ د')
    expect(currency(1.23, { money: TND })).toBe('‏١٫٢٣ د.ت.‏')
  })

  it('should float value 748.99 to equal ‏٧٤٨٫٩٩ د', () => {
    expect(currency(748.99, { symbol: false, money: TND })).toBe('‏٧٤٨٫٩٩ د')
    expect(currency(748.99, { money: TND })).toBe('‏٧٤٨٫٩٩ د.ت.‏')
  })

  it('should float value 1234.56 to equal ‏١٬٢٣٤٫٥٦ د', () => {
    expect(currency(1234.56, { symbol: false, money: TND })).toBe('‏١٬٢٣٤٫٥٦ د')
    expect(currency(1234.56, { money: TND })).toBe('‏١٬٢٣٤٫٥٦ د.ت.‏')
  })

  it('should float value 12345.67 to equal ‏١٢٬٣٤٥٫٦٧ د', () => {
    expect(currency(12345.67, { symbol: false, money: TND })).toBe(
      '‏١٢٬٣٤٥٫٦٧ د'
    )
    expect(currency(12345.67, { money: TND })).toBe('‏١٢٬٣٤٥٫٦٧ د.ت.‏')
  })

  it('should float value 123456.78 to equal ‏١٢٣٬٤٥٦٫٧٨ د', () => {
    expect(currency(123456.78, { symbol: false, money: TND })).toBe(
      '‏١٢٣٬٤٥٦٫٧٨ د'
    )
    expect(currency(123456.78, { money: TND })).toBe('‏١٢٣٬٤٥٦٫٧٨ د.ت.‏')
  })

  it('should float value 1234567.89 to equal ‏١٬٢٣٤٬٥٦٧٫٨٩ د', () => {
    expect(currency(1234567.89, { symbol: false, money: TND })).toBe(
      '‏١٬٢٣٤٬٥٦٧٫٨٩ د'
    )
    expect(currency(1234567.89, { money: TND })).toBe('‏١٬٢٣٤٬٥٦٧٫٨٩ د.ت.‏')
  })
})
