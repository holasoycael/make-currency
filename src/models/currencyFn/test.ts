// modules
import { currencyFn } from '@models/currencyFn'

describe('[en-US]', () => {
  it('should return 0.01 floatValue and 0.01 stringValue when type 1', () => {
    const { floatValue, stringValue } = currencyFn('1')
    expect([floatValue, stringValue]).toEqual([0.01, '0.01'])
  })

  it('should return 0.12 floatValue and 0.12 stringValue when type 12', () => {
    const { floatValue, stringValue } = currencyFn('12')
    expect([floatValue, stringValue]).toEqual([0.12, '0.12'])
  })

  it('should return 1.23 floatValue and 1.23 stringValue when type 123', () => {
    const { floatValue, stringValue } = currencyFn('123')
    expect([floatValue, stringValue]).toEqual([1.23, '1.23'])
  })

  it('should return 12.34 floatValue and 12.34 stringValue when type 1234', () => {
    const { floatValue, stringValue } = currencyFn('1234')
    expect([floatValue, stringValue]).toEqual([12.34, '12.34'])
  })

  it('should return 123.45 floatValue and 123.45 stringValue when type 12345', () => {
    const { floatValue, stringValue } = currencyFn('12345')
    expect([floatValue, stringValue]).toEqual([123.45, '123.45'])
  })

  it('should return 1234.56 floatValue and 1,234.56 stringValue when type 123456', () => {
    const { floatValue, stringValue } = currencyFn('123456')
    expect([floatValue, stringValue]).toEqual([1234.56, '1,234.56'])
  })

  it('should return 12345.67 floatValue and 12,345.67 stringValue when type 1234567', () => {
    const { floatValue, stringValue } = currencyFn('1234567')
    expect([floatValue, stringValue]).toEqual([12345.67, '12,345.67'])
  })

  it('should return 123456.78 floatValue and 123,456.78 stringValue when type 12345678', () => {
    const { floatValue, stringValue } = currencyFn('12345678')
    expect([floatValue, stringValue]).toEqual([123456.78, '123,456.78'])
  })

  it('should return 1234567.89 floatValue and 1,234,567.89 stringValue when type 123456789', () => {
    const { floatValue, stringValue } = currencyFn('123456789')
    expect([floatValue, stringValue]).toEqual([1234567.89, '1,234,567.89'])
  })
})
