import { DocsContainer } from '@storybook/addon-docs/blocks'
import SimpleBar from 'simplebar-react'

// heroui
import { HeroUIProvider } from '@heroui/react'
import { ToastProvider } from '@heroui/toast'

// types and interfaces
import type { Preview } from '@storybook/react-webpack5'
import type { DocsContainerProps } from '@storybook/addon-docs/blocks'
import type { PropsWithChildren } from 'react'

// global css imports from lib
import 'simplebar-react/dist/simplebar.min.css'
import '../public/style.css'

const preview: Preview = {
  parameters: {
    docs: {
      // Customiza o container das páginas MDX (Docs)
      container: ({
        children,
        context
      }: PropsWithChildren<DocsContainerProps>) => (
        <DocsContainer context={context}>
          <HeroUIProvider>
            <ToastProvider />
            <SimpleBar
              forceVisible="y"
              style={{ width: '100%', height: '100vh' }}
            >
              <div style={{ padding: '24px 0px' }}>
                <div
                  style={{ width: '100%', maxWidth: 1000, margin: '0 auto' }}
                >
                  {children}
                </div>
              </div>
            </SimpleBar>
          </HeroUIProvider>
        </DocsContainer>
      )
    }
  },
  decorators: [
    (Story) => (
      <HeroUIProvider>
        <ToastProvider />
        <SimpleBar forceVisible="y" style={{ width: '100%', height: '100%' }}>
          <Story />
        </SimpleBar>
      </HeroUIProvider>
    )
  ]
}

export default preview
