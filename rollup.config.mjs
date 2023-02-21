import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const config = defineConfig({
  input: 'src/index.ts',
  output: {
    format: 'cjs',
    dir: 'lib',
    name: 'MakeCurrency',
    entryFileNames: '[name].js',
    preserveModules: true
  },
  plugins: [
    typescript({
      exclude: ['src/typings/**', 'src/models/**/types.ts', '**/test.ts']
    }),
    resolve({ browser: true }),
    commonjs()
  ]
})

export default config
