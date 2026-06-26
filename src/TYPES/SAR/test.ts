// modules
import { currency } from '@models/currency'

// currecy
import SAR from '@TYPES/SAR'

describe('[ar-EG]', () => {
  it('should float value 0.01 to equal ‏٠٫٠١ ر', () => {
    expect(currency(0.01, { symbol: false, money: SAR })).toBe('‏٠٫٠١ ر')
    expect(currency(0.01, { money: SAR })).toBe('‏٠٫٠١ ر.س.‏')
  })

  it('should float value 0.12 to equal ‏٠٫١٢ ر', () => {
    expect(currency(0.12, { symbol: false, money: SAR })).toBe('‏٠٫١٢ ر')
    expect(currency(0.12, { money: SAR })).toBe('‏٠٫١٢ ر.س.‏')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: SAR })).toBe('‏١٫٠٠ ر')
    expect(currency(1, { money: SAR })).toBe('‏١٫٠٠ ر.س.‏')
  })

  it('should float value 1.23 to equal ‏١٫٢٣ ر', () => {
    expect(currency(1.23, { symbol: false, money: SAR })).toBe('‏١٫٢٣ ر')
    expect(currency(1.23, { money: SAR })).toBe('‏١٫٢٣ ر.س.‏')
  })

  it('should float value 748.99 to equal ‏٧٤٨٫٩٩ ر', () => {
    expect(currency(748.99, { symbol: false, money: SAR })).toBe('‏٧٤٨٫٩٩ ر')
    expect(currency(748.99, { money: SAR })).toBe('‏٧٤٨٫٩٩ ر.س.‏')
  })

  it('should float value 1234.56 to equal ‏١٬٢٣٤٫٥٦ ر', () => {
    expect(currency(1234.56, { symbol: false, money: SAR })).toBe('‏١٬٢٣٤٫٥٦ ر')
    expect(currency(1234.56, { money: SAR })).toBe('‏١٬٢٣٤٫٥٦ ر.س.‏')
  })

  it('should float value 12345.67 to equal ‏١٢٬٣٤٥٫٦٧ ر', () => {
    expect(currency(12345.67, { symbol: false, money: SAR })).toBe(
      '‏١٢٬٣٤٥٫٦٧ ر'
    )
    expect(currency(12345.67, { money: SAR })).toBe('‏١٢٬٣٤٥٫٦٧ ر.س.‏')
  })

  it('should float value 123456.78 to equal ‏١٢٣٬٤٥٦٫٧٨ ر', () => {
    expect(currency(123456.78, { symbol: false, money: SAR })).toBe(
      '‏١٢٣٬٤٥٦٫٧٨ ر'
    )
    expect(currency(123456.78, { money: SAR })).toBe('‏١٢٣٬٤٥٦٫٧٨ ر.س.‏')
  })

  it('should float value 1234567.89 to equal ‏١٬٢٣٤٬٥٦٧٫٨٩ ر', () => {
    expect(currency(1234567.89, { symbol: false, money: SAR })).toBe(
      '‏١٬٢٣٤٬٥٦٧٫٨٩ ر'
    )
    expect(currency(1234567.89, { money: SAR })).toBe('‏١٬٢٣٤٬٥٦٧٫٨٩ ر.س.‏')
  })
})
