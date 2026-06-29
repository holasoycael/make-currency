import { useState } from 'react'
import { createHighlighter } from 'shiki'
import { z } from 'zod'
import Handlebars from 'handlebars'
import { currency, currencyFn } from '../../..'
import Make from '../../..'

// templates
import template from './template.hbs?raw'

// heroui
import { addToast } from '@heroui/react'
import { Input } from '@heroui/react'
import { Snippet } from '@heroui/react'
import { Autocomplete } from '@heroui/react'
import { AutocompleteItem } from '@heroui/react'

// icons phosphoricons
import { ArrowsLeftRight as IconArrowsLeftRight } from '@phosphor-icons/react'

// types and interfaces
import type { Key } from 'react'
import type { TExchange } from 'index'

const highlighter = await createHighlighter({
  themes: ['night-owl-light'],
  langs: ['typescript']
})

const CurrencyFnComponent = () => {
  const [value, setValue] = useState(1234.56)
  const [dataType, setDataType] = useState<TExchange>(Make.TYPES.USD)

  const displayValue = currency(value, {
    symbol: false,
    isEmpty: true,
    money: dataType
  })
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsed = currencyFn(e.target.value, { money: dataType })
    setValue(parsed.floatValue)
  }

  const toArray = Object.values(Make.TYPES).map((type) => type.currency)
  const handleCurrency = (key: Key | null) => {
    if (key) {
      try {
        const schema = z.enum(toArray)
        const current = schema.parse(key)
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
          <IconArrowsLeftRight
            size={24}
            weight="duotone"
            className="text-primary"
          />
          <span className="font-oswald font-semibold text-lg">
            currencyFn() Parser
          </span>
        </div>
        <p className="text-sm font-inter text-[#777]">
          Parse currency strings into float values and formatted strings in
          real-time
        </p>
      </div>
      <div className="w-full p-6">
        <div className="w-full flex space-x-8">
          <div className="w-full flex flex-col space-y-6">
            <div className="w-full max-w-140 flex items-center space-x-6">
              <Input
                data-testid="currency-fn__input--price"
                label="Price"
                labelPlacement="outside-top"
                variant="bordered"
                value={displayValue}
                radius="sm"
                placeholder="0.00"
                onChange={handleInputChange}
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
                data-testid="currency-fn__autocomplete--currency"
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
              data-testid="currency-fn__snippet--code"
              color="default"
              radius="sm"
              hideSymbol
              classNames={{ pre: 'whitespace-break-spaces' }}
            >
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </Snippet>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrencyFnComponent
