// modules
import { currency } from '@models/currency'

// currecy
import JOD from '@TYPES/JOD'

describe('[ar-EG]', () => {
  it('should float value 0.01 to equal ‏٠٫٠١ د', () => {
    expect(currency(0.01, { symbol: false, money: JOD })).toBe('‏٠٫٠١ د')
    expect(currency(0.01, { money: JOD })).toBe('‏٠٫٠١ د.أ.‏')
  })

  it('should float value 0.12 to equal ‏٠٫١٢ د', () => {
    expect(currency(0.12, { symbol: false, money: JOD })).toBe('‏٠٫١٢ د')
    expect(currency(0.12, { money: JOD })).toBe('‏٠٫١٢ د.أ.‏')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: JOD })).toBe('‏١٫٠٠ د')
    expect(currency(1, { money: JOD })).toBe('‏١٫٠٠ د.أ.‏')
  })

  it('should float value 1.23 to equal ‏١٫٢٣ د', () => {
    expect(currency(1.23, { symbol: false, money: JOD })).toBe('‏١٫٢٣ د')
    expect(currency(1.23, { money: JOD })).toBe('‏١٫٢٣ د.أ.‏')
  })

  it('should float value 748.99 to equal ‏٧٤٨٫٩٩ د', () => {
    expect(currency(748.99, { symbol: false, money: JOD })).toBe('‏٧٤٨٫٩٩ د')
    expect(currency(748.99, { money: JOD })).toBe('‏٧٤٨٫٩٩ د.أ.‏')
  })

  it('should float value 1234.56 to equal ‏١٬٢٣٤٫٥٦ د', () => {
    expect(currency(1234.56, { symbol: false, money: JOD })).toBe('‏١٬٢٣٤٫٥٦ د')
    expect(currency(1234.56, { money: JOD })).toBe('‏١٬٢٣٤٫٥٦ د.أ.‏')
  })

  it('should float value 12345.67 to equal ‏١٢٬٣٤٥٫٦٧ د', () => {
    expect(currency(12345.67, { symbol: false, money: JOD })).toBe(
      '‏١٢٬٣٤٥٫٦٧ د'
    )
    expect(currency(12345.67, { money: JOD })).toBe('‏١٢٬٣٤٥٫٦٧ د.أ.‏')
  })

  it('should float value 123456.78 to equal ‏١٢٣٬٤٥٦٫٧٨ د', () => {
    expect(currency(123456.78, { symbol: false, money: JOD })).toBe(
      '‏١٢٣٬٤٥٦٫٧٨ د'
    )
    expect(currency(123456.78, { money: JOD })).toBe('‏١٢٣٬٤٥٦٫٧٨ د.أ.‏')
  })

  it('should float value 1234567.89 to equal ‏١٬٢٣٤٬٥٦٧٫٨٩ د', () => {
    expect(currency(1234567.89, { symbol: false, money: JOD })).toBe(
      '‏١٬٢٣٤٬٥٦٧٫٨٩ د'
    )
    expect(currency(1234567.89, { money: JOD })).toBe('‏١٬٢٣٤٬٥٦٧٫٨٩ د.أ.‏')
  })
})
