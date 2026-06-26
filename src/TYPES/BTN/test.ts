// modules
import { currency } from '@models/currency'

// currecy
import BTN from '@TYPES/BTN'

describe('[dz-BT]', () => {
  it('should float value 0.01 to equal Nu. ༠.', () => {
    expect(currency(0.01, { symbol: false, money: BTN })).toBe('Nu. ༠.')
    expect(currency(0.01, { money: BTN })).toBe('Nu. ༠.༠༡')
  })

  it('should float value 0.12 to equal Nu. ༠.', () => {
    expect(currency(0.12, { symbol: false, money: BTN })).toBe('Nu. ༠.')
    expect(currency(0.12, { money: BTN })).toBe('Nu. ༠.༡༢')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false, money: BTN })).toBe('Nu. ༡.')
    expect(currency(1, { money: BTN })).toBe('Nu. ༡.༠༠')
  })

  it('should float value 1.23 to equal Nu. ༡.', () => {
    expect(currency(1.23, { symbol: false, money: BTN })).toBe('Nu. ༡.')
    expect(currency(1.23, { money: BTN })).toBe('Nu. ༡.༢༣')
  })

  it('should float value 748.99 to equal Nu. ༧༤༨.', () => {
    expect(currency(748.99, { symbol: false, money: BTN })).toBe('Nu. ༧༤༨.')
    expect(currency(748.99, { money: BTN })).toBe('Nu. ༧༤༨.༩༩')
  })

  it('should float value 1234.56 to equal Nu. ༡,༢༣༤.', () => {
    expect(currency(1234.56, { symbol: false, money: BTN })).toBe('Nu. ༡,༢༣༤.')
    expect(currency(1234.56, { money: BTN })).toBe('Nu. ༡,༢༣༤.༥༦')
  })

  it('should float value 12345.67 to equal Nu. ༡༢,༣༤༥.', () => {
    expect(currency(12345.67, { symbol: false, money: BTN })).toBe(
      'Nu. ༡༢,༣༤༥.'
    )
    expect(currency(12345.67, { money: BTN })).toBe('Nu. ༡༢,༣༤༥.༦༧')
  })

  it('should float value 123456.78 to equal Nu. ༡,༢༣,༤༥༦.', () => {
    expect(currency(123456.78, { symbol: false, money: BTN })).toBe(
      'Nu. ༡,༢༣,༤༥༦.'
    )
    expect(currency(123456.78, { money: BTN })).toBe('Nu. ༡,༢༣,༤༥༦.༧༨')
  })

  it('should float value 1234567.89 to equal Nu. ༡༢,༣༤,༥༦༧.', () => {
    expect(currency(1234567.89, { symbol: false, money: BTN })).toBe(
      'Nu. ༡༢,༣༤,༥༦༧.'
    )
    expect(currency(1234567.89, { money: BTN })).toBe('Nu. ༡༢,༣༤,༥༦༧.༨༩')
  })
})
