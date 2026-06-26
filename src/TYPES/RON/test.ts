// modules
import { currency } from '@models/currency'

// currecy
import RON from '@TYPES/RON'

describe('[en-GB]', () => {
  it('should float value 0.01 to equal RON ', () => {
    expect(currency(0.01, { symbol: false, money: RON })).toBe('RON ')
    expect(currency(0.01, { money: RON })).toBe('RON 0.01')
  })

  it('should float value 0.12 to equal RON ', () => {
    expect(currency(0.12, { symbol: false, money: RON })).toBe('RON ')
    expect(currency(0.12, { money: RON })).toBe('RON 0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: RON })).toBe('RON ')
    expect(currency(1, { money: RON })).toBe('RON 1.00')
  })

  it('should float value 1.23 to equal RON ', () => {
    expect(currency(1.23, { symbol: false, money: RON })).toBe('RON ')
    expect(currency(1.23, { money: RON })).toBe('RON 1.23')
  })

  it('should float value 748.99 to equal RON 74', () => {
    expect(currency(748.99, { symbol: false, money: RON })).toBe('RON 74')
    expect(currency(748.99, { money: RON })).toBe('RON 748.99')
  })

  it('should float value 1234.56 to equal RON 1,23', () => {
    expect(currency(1234.56, { symbol: false, money: RON })).toBe('RON 1,23')
    expect(currency(1234.56, { money: RON })).toBe('RON 1,234.56')
  })

  it('should float value 12345.67 to equal RON 12,34', () => {
    expect(currency(12345.67, { symbol: false, money: RON })).toBe('RON 12,34')
    expect(currency(12345.67, { money: RON })).toBe('RON 12,345.67')
  })

  it('should float value 123456.78 to equal RON 123,45', () => {
    expect(currency(123456.78, { symbol: false, money: RON })).toBe(
      'RON 123,45'
    )
    expect(currency(123456.78, { money: RON })).toBe('RON 123,456.78')
  })

  it('should float value 1234567.89 to equal RON 1,234,56', () => {
    expect(currency(1234567.89, { symbol: false, money: RON })).toBe(
      'RON 1,234,56'
    )
    expect(currency(1234567.89, { money: RON })).toBe('RON 1,234,567.89')
  })
})
