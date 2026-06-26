// modules
import { currency } from '@models/currency'

// currecy
import LBP from '@TYPES/LBP'

describe('[ar-EG]', () => {
  it('should float value 0.01 to equal ‏٠٫٠١ ل.', () => {
    expect(currency(0.01, { symbol: false, money: LBP })).toBe('‏٠٫٠١ ل.')
    expect(currency(0.01, { money: LBP })).toBe('‏٠٫٠١ ل.ل.‏')
  })

  it('should float value 0.12 to equal ‏٠٫١٢ ل.', () => {
    expect(currency(0.12, { symbol: false, money: LBP })).toBe('‏٠٫١٢ ل.')
    expect(currency(0.12, { money: LBP })).toBe('‏٠٫١٢ ل.ل.‏')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: LBP })).toBe('‏١٫٠٠ ل.')
    expect(currency(1, { money: LBP })).toBe('‏١٫٠٠ ل.ل.‏')
  })

  it('should float value 1.23 to equal ‏١٫٢٣ ل.', () => {
    expect(currency(1.23, { symbol: false, money: LBP })).toBe('‏١٫٢٣ ل.')
    expect(currency(1.23, { money: LBP })).toBe('‏١٫٢٣ ل.ل.‏')
  })

  it('should float value 748.99 to equal ‏٧٤٨٫٩٩ ل.', () => {
    expect(currency(748.99, { symbol: false, money: LBP })).toBe('‏٧٤٨٫٩٩ ل.')
    expect(currency(748.99, { money: LBP })).toBe('‏٧٤٨٫٩٩ ل.ل.‏')
  })

  it('should float value 1234.56 to equal ‏١٬٢٣٤٫٥٦ ل.', () => {
    expect(currency(1234.56, { symbol: false, money: LBP })).toBe(
      '‏١٬٢٣٤٫٥٦ ل.'
    )
    expect(currency(1234.56, { money: LBP })).toBe('‏١٬٢٣٤٫٥٦ ل.ل.‏')
  })

  it('should float value 12345.67 to equal ‏١٢٬٣٤٥٫٦٧ ل.', () => {
    expect(currency(12345.67, { symbol: false, money: LBP })).toBe(
      '‏١٢٬٣٤٥٫٦٧ ل.'
    )
    expect(currency(12345.67, { money: LBP })).toBe('‏١٢٬٣٤٥٫٦٧ ل.ل.‏')
  })

  it('should float value 123456.78 to equal ‏١٢٣٬٤٥٦٫٧٨ ل.', () => {
    expect(currency(123456.78, { symbol: false, money: LBP })).toBe(
      '‏١٢٣٬٤٥٦٫٧٨ ل.'
    )
    expect(currency(123456.78, { money: LBP })).toBe('‏١٢٣٬٤٥٦٫٧٨ ل.ل.‏')
  })

  it('should float value 1234567.89 to equal ‏١٬٢٣٤٬٥٦٧٫٨٩ ل.', () => {
    expect(currency(1234567.89, { symbol: false, money: LBP })).toBe(
      '‏١٬٢٣٤٬٥٦٧٫٨٩ ل.'
    )
    expect(currency(1234567.89, { money: LBP })).toBe('‏١٬٢٣٤٬٥٦٧٫٨٩ ل.ل.‏')
  })
})
