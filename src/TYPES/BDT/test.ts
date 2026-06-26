// modules
import { currency } from '@models/currency'

// currecy
import BDT from '@TYPES/BDT'

describe('[bn-BD]', () => {
  it('should float value 0.01 to equal .০১৳', () => {
    expect(currency(0.01, { symbol: false, money: BDT })).toBe('.০১৳')
    expect(currency(0.01, { money: BDT })).toBe('০.০১৳')
  })

  it('should float value 0.12 to equal .১২৳', () => {
    expect(currency(0.12, { symbol: false, money: BDT })).toBe('.১২৳')
    expect(currency(0.12, { money: BDT })).toBe('০.১২৳')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: BDT })).toBe('.০০৳')
    expect(currency(1, { money: BDT })).toBe('১.০০৳')
  })

  it('should float value 1.23 to equal .২৩৳', () => {
    expect(currency(1.23, { symbol: false, money: BDT })).toBe('.২৩৳')
    expect(currency(1.23, { money: BDT })).toBe('১.২৩৳')
  })

  it('should float value 748.99 to equal ৪৮.৯৯৳', () => {
    expect(currency(748.99, { symbol: false, money: BDT })).toBe('৪৮.৯৯৳')
    expect(currency(748.99, { money: BDT })).toBe('৭৪৮.৯৯৳')
  })

  it('should float value 1234.56 to equal ,২৩৪.৫৬৳', () => {
    expect(currency(1234.56, { symbol: false, money: BDT })).toBe(',২৩৪.৫৬৳')
    expect(currency(1234.56, { money: BDT })).toBe('১,২৩৪.৫৬৳')
  })

  it('should float value 12345.67 to equal ২,৩৪৫.৬৭৳', () => {
    expect(currency(12345.67, { symbol: false, money: BDT })).toBe('২,৩৪৫.৬৭৳')
    expect(currency(12345.67, { money: BDT })).toBe('১২,৩৪৫.৬৭৳')
  })

  it('should float value 123456.78 to equal ,২৩,৪৫৬.৭৮৳', () => {
    expect(currency(123456.78, { symbol: false, money: BDT })).toBe(
      ',২৩,৪৫৬.৭৮৳'
    )
    expect(currency(123456.78, { money: BDT })).toBe('১,২৩,৪৫৬.৭৮৳')
  })

  it('should float value 1234567.89 to equal ২,৩৪,৫৬৭.৮৯৳', () => {
    expect(currency(1234567.89, { symbol: false, money: BDT })).toBe(
      '২,৩৪,৫৬৭.৮৯৳'
    )
    expect(currency(1234567.89, { money: BDT })).toBe('১২,৩৪,৫৬৭.৮৯৳')
  })
})
