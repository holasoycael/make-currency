import { useState } from 'react'
import { createHighlighter } from 'shiki'
import { z } from 'zod'
import Handlebars from 'handlebars'
import { currency, CONFIGURE } from '../../..'
import Make from '../../..'

// templates
import template from './template.hbs?raw'

// heroui
import { addToast } from '@heroui/react'
import { Autocomplete } from '@heroui/react'
import { AutocompleteItem } from '@heroui/react'
import { Snippet } from '@heroui/react'
import { Divider } from '@heroui/divider'

// icons phosphoricons
import { Gear as IconGear } from '@phosphor-icons/react'

// types and interfaces
import type { Key } from 'react'
import type { TExchange } from 'index'

const highlighter = await createHighlighter({
  themes: ['night-owl-light'],
  langs: ['typescript']
})

const ConfigureComponent = () => {
  const [dataType, setDataType] = useState<TExchange>(Make.TYPES.USD)

  // Configure the global defaults dynamically
  CONFIGURE({ money: dataType })

  const basic = currency(1234.56)
  const noSymbol = currency(1234.56, { symbol: false })

  const currentDb = {
    money: dataType.currency,
    basic,
    noSymbol
  }

  const compile = Handlebars.compile(template)(currentDb)
  const html = highlighter.codeToHtml(compile, {
    lang: 'typescript',
    theme: 'night-owl-light'
  })

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
          <IconGear size={24} weight="duotone" className="text-primary" />
          <span className="font-oswald font-semibold text-lg">
            CONFIGURE() Configuration
          </span>
        </div>
        <p className="text-sm font-inter text-[#777]">
          Set the default currency globally. All subsequent calls without money
          options will use the global default.
        </p>
      </div>
      <div className="w-full p-6">
        <div className="w-full flex space-x-8">
          <div className="w-full flex flex-col space-y-6">
            <Autocomplete
              data-testid="configure__autocomplete--currency"
              label="Select global currency"
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
            <Snippet
              data-testid="configure__snippet--code"
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
                currency(1234.56)
              </span>
              <span
                data-testid="configure__result--basic"
                className="text-sm font-(family-name:--font-inter) font-normal text-[#777]"
              >
                {basic}
              </span>
            </div>
            <Divider />
            <div className="flex flex-col p-4 space-y-1">
              <span className="text-sm font-(family-name:--font-inter) font-semibold uppercase text-[#3a3a3a]">
                currency(1234.56, &#123; symbol: false &#125;)
              </span>
              <span
                data-testid="configure__result--no-symbol"
                className="text-sm font-(family-name:--font-inter) font-normal text-[#777]"
              >
                {noSymbol}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfigureComponent
