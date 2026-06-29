import { addons } from 'storybook/manager-api'
import { create } from 'storybook/theming'

addons.setConfig({
  layoutCustomisations: {
    showPanel: () => false,
    showToolbar: () => false
  },
  theme: create({
    base: 'light',
    brandTitle: 'Meu Storybook',
    brandImage: '/brand.png',

    // 🎯 cores principais
    colorPrimary: '#92ba12',

    // fundo geral da UI
    appBg: '#f7f9f0',
    appContentBg: '#ffffff',

    // toolbar / sidebar
    barBg: '#ffffff',
    barSelectedColor: '#92ba12',

    // texto
    textColor: '#1a1a1a',
    textInverseColor: '#ffffff',

    // UI estados
    inputBg: '#ffffff',
    inputBorder: '#92ba12',
    inputTextColor: '#1a1a1a'
  }),
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false }
  }
})
