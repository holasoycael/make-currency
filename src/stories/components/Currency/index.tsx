import { useState } from 'react'
import Make, { currency, currencyFn } from '../../..'
import { createHighlighter } from 'shiki'
import { z } from 'zod'
import Handlebars from 'handlebars'

// templates
import template from './template.hbs?raw'

// heroui
import { addToast, Input } from '@heroui/react'
import { Snippet } from '@heroui/react'
import { Divider } from '@heroui/divider'
import { Autocomplete } from '@heroui/react'
import { AutocompleteItem } from '@heroui/react'

// icons phosphoricons
import { Coins as IconCoins } from '@phosphor-icons/react'

// types and interfaces
import type { Key } from 'react'
import type { TExchange } from 'index'

const highlighter = await createHighlighter({
  themes: ['night-owl-light'],
  langs: ['typescript']
})

const CurrencyComponent = () => {
  const [value, setValue] = useState(1234.56)
  const [dataType, setDataType] = useState<TExchange>(Make.TYPES.USD)

  const withSymbol = currency(value, { symbol: true, money: dataType })
  const withoutSymbol = currency(value, {
    isEmpty: false,
    symbol: false,
    money: dataType
  })

  const dataSymbol = withSymbol.replace(withoutSymbol, '').trim()

  const currentDb = {
    value: value.toString(),
    money: dataType.currency
  }

  const compile = Handlebars.compile(template)(currentDb)
  const html = highlighter.codeToHtml(compile, {
    lang: 'typescript',
    theme: 'night-owl-light'
  })

  const inputFn = (value: string) => {
    const { floatValue } = currencyFn(value)
    setValue(floatValue)
  }

  const toArray = Object.values(Make.TYPES).map((type) => type.currency)
  const handleCurrency = (value: Key | null) => {
    if (value) {
      try {
        const schema = z.enum(toArray)
        const current = schema.parse(value)
        setDataType(Make.TYPES[current])
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        addToast({
          title: 'Currency not found',
          description: 'Please select a valid currency',
          color: 'danger'
        })
      }
    } else {
      setDataType(Make.TYPES.USD)
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="bg-[#efefef] p-6 flex flex-col space-y-0.5">
        <div className="flex items-center space-x-2">
          <IconCoins size={24} weight="duotone" className="text-primary" />
          <span className="font-oswald font-semibold text-lg">
            currency() Formatter
          </span>
        </div>
        <p className="text-sm font-inter text-[#777]">
          Format numeric values into locale-specific currency strings in
          real-time
        </p>
      </div>
      <div className="w-full p-6">
        <div className="w-full flex space-x-8">
          <div className="w-full flex flex-col space-y-6">
            <div className="flex items-center space-x-6">
              <Input
                label="Price"
                labelPlacement="outside-top"
                variant="bordered"
                value={currency(value, 'INPUT')}
                radius="sm"
                placeholder="0.00"
                onChange={(e) => inputFn(e.target.value)}
                startContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">
                      {dataSymbol}
                    </span>
                  </div>
                }
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">
                      {dataType.currency}
                    </span>
                  </div>
                }
              />
              <Autocomplete
                label="Select a currency"
                labelPlacement="outside-top"
                variant="bordered"
                radius="sm"
                selectedKey={dataType.currency}
                defaultSelectedKey={Make.TYPES.USD.currency}
                onChange={handleCurrency}
                isClearable={false}
              >
                {Object.entries(Make.TYPES).map(([key]) => (
                  <AutocompleteItem key={key}>{key}</AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
            <Snippet
              color="default"
              radius="sm"
              hideSymbol
              classNames={{ pre: 'whitespace-break-spaces' }}
            >
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Snippet>
          </div>
          <div className="w-full flex flex-col border border-[#e9e9e9] rounded-lg h-max">
            <div className="flex flex-col p-4 space-y-1">
              <span className="text-sm font-(family-name:--font-inter) font-semibold uppercase text-[#3a3a3a]">
                Formatted Output
              </span>
              <span className="text-sm font-(family-name:--font-inter) font-normal text-[#777]">
                {withSymbol}
              </span>
            </div>
            <Divider />
            <div className="flex flex-col p-4 space-y-1">
              <span className="text-sm font-(family-name:--font-inter) font-semibold uppercase text-[#3a3a3a]">
                Without Symbol
              </span>
              <span className="text-sm font-(family-name:--font-inter) font-normal text-[#777]">
                {withoutSymbol}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyComponent
