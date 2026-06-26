// modules
import { currency } from '@models/currency'

// currecy
import QAR from '@TYPES/QAR'

describe('[ar-EG]', () => {
  it('should float value 0.01 to equal ‏٠٫٠١ ر', () => {
    expect(currency(0.01, { symbol: false, money: QAR })).toBe('‏٠٫٠١ ر')
    expect(currency(0.01, { money: QAR })).toBe('‏٠٫٠١ ر.ق.‏')
  })

  it('should float value 0.12 to equal ‏٠٫١٢ ر', () => {
    expect(currency(0.12, { symbol: false, money: QAR })).toBe('‏٠٫١٢ ر')
    expect(currency(0.12, { money: QAR })).toBe('‏٠٫١٢ ر.ق.‏')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: QAR })).toBe('‏١٫٠٠ ر')
    expect(currency(1, { money: QAR })).toBe('‏١٫٠٠ ر.ق.‏')
  })

  it('should float value 1.23 to equal ‏١٫٢٣ ر', () => {
    expect(currency(1.23, { symbol: false, money: QAR })).toBe('‏١٫٢٣ ر')
    expect(currency(1.23, { money: QAR })).toBe('‏١٫٢٣ ر.ق.‏')
  })

  it('should float value 748.99 to equal ‏٧٤٨٫٩٩ ر', () => {
    expect(currency(748.99, { symbol: false, money: QAR })).toBe('‏٧٤٨٫٩٩ ر')
    expect(currency(748.99, { money: QAR })).toBe('‏٧٤٨٫٩٩ ر.ق.‏')
  })

  it('should float value 1234.56 to equal ‏١٬٢٣٤٫٥٦ ر', () => {
    expect(currency(1234.56, { symbol: false, money: QAR })).toBe('‏١٬٢٣٤٫٥٦ ر')
    expect(currency(1234.56, { money: QAR })).toBe('‏١٬٢٣٤٫٥٦ ر.ق.‏')
  })

  it('should float value 12345.67 to equal ‏١٢٬٣٤٥٫٦٧ ر', () => {
    expect(currency(12345.67, { symbol: false, money: QAR })).toBe(
      '‏١٢٬٣٤٥٫٦٧ ر'
    )
    expect(currency(12345.67, { money: QAR })).toBe('‏١٢٬٣٤٥٫٦٧ ر.ق.‏')
  })

  it('should float value 123456.78 to equal ‏١٢٣٬٤٥٦٫٧٨ ر', () => {
    expect(currency(123456.78, { symbol: false, money: QAR })).toBe(
      '‏١٢٣٬٤٥٦٫٧٨ ر'
    )
    expect(currency(123456.78, { money: QAR })).toBe('‏١٢٣٬٤٥٦٫٧٨ ر.ق.‏')
  })

  it('should float value 1234567.89 to equal ‏١٬٢٣٤٬٥٦٧٫٨٩ ر', () => {
    expect(currency(1234567.89, { symbol: false, money: QAR })).toBe(
      '‏١٬٢٣٤٬٥٦٧٫٨٩ ر'
    )
    expect(currency(1234567.89, { money: QAR })).toBe('‏١٬٢٣٤٬٥٦٧٫٨٩ ر.ق.‏')
  })
})
