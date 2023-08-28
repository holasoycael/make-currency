import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// modules
import { currency } from '@models/currency'
import { currencyFn } from '@models/currencyFn'

// modules
import { configure } from '@modules/Configure'

// helpers
import App from '@helpers/TestingLibrary'

// money types
import BRL from '@TYPES/BRL'

test('use placeholder string', () => {
  expect(currency(0)).toBe('$0.00')
  expect(currency(0, { isEmpty: true })).toBe('')
  expect(currency(0, { isEmpty: false })).toBe('$0.00')
})

describe('[en-US]', () => {
  it('should float value 0.01 to equal 0.01', () => {
    expect(currency(0.01, { symbol: false })).toBe('0.01')
    expect(currency(0.01)).toBe('$0.01')
  })

  it('should float value 0.12 to equal 0.12', () => {
    expect(currency(0.12, { symbol: false })).toBe('0.12')
    expect(currency(0.12)).toBe('$0.12')
  })

  it('should float value 1 to equal 1.00', () => {
    expect(currency(1, { symbol: false })).toBe('1.00')
    expect(currency(1)).toBe('$1.00')
  })

  it('should float value 1.23 to equal 1.23', () => {
    expect(currency(1.23, { symbol: false })).toBe('1.23')
    expect(currency(1.23)).toBe('$1.23')
  })

  it('should float value 748.99 to equal 748.99', () => {
    expect(currency(748.99, { symbol: false })).toBe('748.99')
    expect(currency(748.99)).toBe('$748.99')
  })

  it('should float value 1234.56 to equal 1,234.56', () => {
    expect(currency(1234.56, { symbol: false })).toBe('1,234.56')
    expect(currency(1234.56)).toBe('$1,234.56')
  })

  it('should float value 12345.67 to equal 12,345.67', () => {
    expect(currency(12345.67, { symbol: false })).toBe('12,345.67')
    expect(currency(12345.67)).toBe('$12,345.67')
  })

  it('should float value 123456.78 to equal 123,456.78', () => {
    expect(currency(123456.78, { symbol: false })).toBe('123,456.78')
    expect(currency(123456.78)).toBe('$123,456.78')
  })

  it('should float value 12345678.9 to equal 1,234,567.89', () => {
    expect(currency(1234567.89, { symbol: false })).toBe('1,234,567.89')
    expect(currency(1234567.89)).toBe('$1,234,567.89')
  })
})

describe('[pt-BR]', () => {
  it('should float value 0.01 to equal 0,01', () => {
    expect(currency(0.01, { symbol: false, money: BRL })).toBe('0,01')
    expect(currency(0.01, { money: BRL })).toBe('R$ 0,01')
  })

  it('should float value 0.12 to equal 0,12', () => {
    expect(currency(0.12, { symbol: false, money: BRL })).toBe('0,12')
    expect(currency(0.12, { money: BRL })).toBe('R$ 0,12')
  })

  it('should float value 1 to equal 1,00', () => {
    expect(currency(1, { symbol: false, money: BRL })).toBe('1,00')
    expect(currency(1, { money: BRL })).toBe('R$ 1,00')
  })

  it('should float value 1.23 to equal 1,23', () => {
    expect(currency(1.23, { symbol: false, money: BRL })).toBe('1,23')
    expect(currency(1.23, { money: BRL })).toBe('R$ 1,23')
  })

  it('should float value 748.99 to equal 748,99', () => {
    expect(currency(748.99, { symbol: false, money: BRL })).toBe('748,99')
    expect(currency(748.99, { money: BRL })).toBe('R$ 748,99')
  })

  it('should float value 1234.56 to equal 1.234,56', () => {
    expect(currency(1234.56, { symbol: false, money: BRL })).toBe('1.234,56')
    expect(currency(1234.56, { money: BRL })).toBe('R$ 1.234,56')
  })

  it('should float value 12345.67 to equal 12.345,67', () => {
    expect(currency(12345.67, { symbol: false, money: BRL })).toBe('12.345,67')
    expect(currency(12345.67, { money: BRL })).toBe('R$ 12.345,67')
  })

  it('should float value 123456.78 to equal 123.456,78', () => {
    expect(currency(123456.78, { symbol: false, money: BRL })).toBe(
      '123.456,78'
    )
    expect(currency(123456.78, { money: BRL })).toBe('R$ 123.456,78')
  })

  it('should float value 12345678.9 to equal 1.234.567,89', () => {
    expect(currency(1234567.89, { symbol: false, money: BRL })).toBe(
      '1.234.567,89'
    )
    expect(currency(1234567.89, { money: BRL })).toBe('R$ 1.234.567,89')
  })
})

describe('With input values', () => {
  beforeEach(() => {
    configure.setMoney(BRL)
  })

  it('Type and backspace input', async () => {
    render(<App current={119.9} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('119,90')

    await userEvent.type(input, '2')

    expect(input.value).toBe('1.199,02')
    expect(currencyFn(input.value).floatValue).toEqual(1199.02)

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('119,90')
    expect(currencyFn(input.value).floatValue).toEqual(119.9)

    await userEvent.type(input, '5')

    expect(input.value).toBe('1.199,05')
    expect(currencyFn(input.value).floatValue).toEqual(1199.05)

    await userEvent.type(input, '0')

    expect(input.value).toBe('11.990,50')
    expect(currencyFn(input.value).floatValue).toEqual(11990.5)
  })

  it('Init a empty input', async () => {
    render(<App current={0} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('')
    expect(currencyFn(input.value).floatValue).toEqual(0)

    await userEvent.type(input, '1')

    expect(input.value).toBe('0,01')
    expect(currencyFn(input.value).floatValue).toEqual(0.01)

    await userEvent.type(input, '2')

    expect(input.value).toBe('0,12')
    expect(currencyFn(input.value).floatValue).toEqual(0.12)

    await userEvent.type(input, '3')

    expect(input.value).toBe('1,23')
    expect(currencyFn(input.value).floatValue).toEqual(1.23)
  })

  it('Big values', async () => {
    render(<App current={3545449.0518900026} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('3.545.449,05')
    expect(currencyFn(input.value).floatValue).toEqual(3545449.05)
  })

  it('Big values', async () => {
    render(<App current={31759300.9679701} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('31.759.300,96')
    expect(currencyFn(input.value).floatValue).toEqual(31759300.96)
  })

  it('Big values', async () => {
    render(<App current={108995093.24555553} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('108.995.093,24')
    expect(currencyFn(input.value).floatValue).toEqual(108995093.24)
  })

  it('Abaixo de 3 digitos', async () => {
    render(<App current={1.23} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('1,23')
    expect(currencyFn(input.value).floatValue).toEqual(1.23)

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('0,12')
    expect(currencyFn(input.value).floatValue).toEqual(0.12)

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('0,01')
    expect(currencyFn(input.value).floatValue).toEqual(0.01)

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('')
    expect(currencyFn(input.value).floatValue).toEqual(0)

    await userEvent.type(input, '{backspace}')

    expect(input.value).toBe('')
    expect(currencyFn(input.value).floatValue).toEqual(0)
  })

  it('Abaixo de 3 digitos', async () => {
    render(<App current={12345678912345.67} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('12.345.678.912.345,67')
    expect(currencyFn(input.value).floatValue).toEqual(12345678912345.67)
  })

  it('Abaixo de 3 digitos', async () => {
    render(<App current={12345678912345678} />)
    const input = screen.getByTestId<HTMLInputElement>('input')

    expect(input.value).toBe('12.345.678.912.345.678,00')
    expect(currencyFn(input.value).floatValue).toEqual(12345678912345678)
  })
})
