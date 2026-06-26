// modules
import { currency } from '@models/currency'

// currecy
import EGP from '@TYPES/EGP'

describe('[ar-EG]', () => {
  it('should float value 0.01 to equal ‏٠٫٠١ ج.', () => {
    expect(currency(0.01, { symbol: false, money: EGP })).toBe('‏٠٫٠١ ج.')
    expect(currency(0.01, { money: EGP })).toBe('‏٠٫٠١ ج.م.‏')
  })

  it('should float value 0.12 to equal ‏٠٫١٢ ج.', () => {
    expect(currency(0.12, { symbol: false, money: EGP })).toBe('‏٠٫١٢ ج.')
    expect(currency(0.12, { money: EGP })).toBe('‏٠٫١٢ ج.م.‏')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: EGP })).toBe('‏١٫٠٠ ج.')
    expect(currency(1, { money: EGP })).toBe('‏١٫٠٠ ج.م.‏')
  })

  it('should float value 1.23 to equal ‏١٫٢٣ ج.', () => {
    expect(currency(1.23, { symbol: false, money: EGP })).toBe('‏١٫٢٣ ج.')
    expect(currency(1.23, { money: EGP })).toBe('‏١٫٢٣ ج.م.‏')
  })

  it('should float value 748.99 to equal ‏٧٤٨٫٩٩ ج.', () => {
    expect(currency(748.99, { symbol: false, money: EGP })).toBe('‏٧٤٨٫٩٩ ج.')
    expect(currency(748.99, { money: EGP })).toBe('‏٧٤٨٫٩٩ ج.م.‏')
  })

  it('should float value 1234.56 to equal ‏١٬٢٣٤٫٥٦ ج.', () => {
    expect(currency(1234.56, { symbol: false, money: EGP })).toBe(
      '‏١٬٢٣٤٫٥٦ ج.'
    )
    expect(currency(1234.56, { money: EGP })).toBe('‏١٬٢٣٤٫٥٦ ج.م.‏')
  })

  it('should float value 12345.67 to equal ‏١٢٬٣٤٥٫٦٧ ج.', () => {
    expect(currency(12345.67, { symbol: false, money: EGP })).toBe(
      '‏١٢٬٣٤٥٫٦٧ ج.'
    )
    expect(currency(12345.67, { money: EGP })).toBe('‏١٢٬٣٤٥٫٦٧ ج.م.‏')
  })

  it('should float value 123456.78 to equal ‏١٢٣٬٤٥٦٫٧٨ ج.', () => {
    expect(currency(123456.78, { symbol: false, money: EGP })).toBe(
      '‏١٢٣٬٤٥٦٫٧٨ ج.'
    )
    expect(currency(123456.78, { money: EGP })).toBe('‏١٢٣٬٤٥٦٫٧٨ ج.م.‏')
  })

  it('should float value 1234567.89 to equal ‏١٬٢٣٤٬٥٦٧٫٨٩ ج.', () => {
    expect(currency(1234567.89, { symbol: false, money: EGP })).toBe(
      '‏١٬٢٣٤٬٥٦٧٫٨٩ ج.'
    )
    expect(currency(1234567.89, { money: EGP })).toBe('‏١٬٢٣٤٬٥٦٧٫٨٩ ج.م.‏')
  })
})
