import SimpleBar from 'simplebar-react'

// components JSX
import CurrencyComponent from './components/Currency'
import CurrencyFnComponent from './components/CurrencyFn'
import ConfigureComponent from './components/Configure'

// types and interfaces
import type { Meta, StoryObj } from '@storybook/react-webpack5'

export default {
  title: 'Methods',
  component: CurrencyComponent,
  decorators: [
    (Story) => (
      <SimpleBar forceVisible="y" style={{ width: '100%', height: '100vh' }}>
        <Story />
      </SimpleBar>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    controls: {
      disable: true
    },
    docs: {
      description: {
        component:
          'The `currency()` function formats a numeric value into a locale-aware currency string. Use the controls to change the value, toggle the symbol, toggle isEmpty, and select different currencies.'
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof CurrencyComponent>

export const Currency: StoryObj = {
  name: 'currency',
  args: {}
}

export const CurrencyFn: StoryObj = {
  name: 'currencyFn',
  render: () => <CurrencyFnComponent />,
  parameters: {
    docs: {
      description: {
        story:
          'The `currencyFn()` function parses a formatted string (e.g. from an input field) and returns both `floatValue` (number) and `stringValue` (formatted string). Type digits to see the real-time parsing result.'
      }
    }
  }
}

export const Configure: StoryObj = {
  name: 'CONFIGURE',
  render: () => <ConfigureComponent />,
  parameters: {
    docs: {
      description: {
        story:
          'The `CONFIGURE()` function sets a global default currency. Once configured, all calls to `currency()` and `currencyFn()` without an explicit `money` option will use the configured currency.'
      }
    }
  }
}
