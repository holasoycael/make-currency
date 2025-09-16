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
