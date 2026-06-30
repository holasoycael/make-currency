// components JSX
import CodeBlock from '../CodeBlock'

// templates
import npm from '../../templates/npm.hbs?raw'
import yarn from '../../templates/yarn.hbs?raw'
import cdn from '../../templates/cdn.hbs?raw'
import unpkg from '../../templates/unpkg.hbs?raw'
import exportsOverview from '../../templates/exports.hbs?raw'
import basic from '../../templates/basic.hbs?raw'
import specific from '../../templates/specific.hbs?raw'
import parsing from '../../templates/parsing.hbs?raw'
import globalConfig from '../../templates/global.hbs?raw'
import apiCurrencySig from '../../templates/api-currency-sig.hbs?raw'
import apiCurrencyEx from '../../templates/api-currency-ex.hbs?raw'
import apiCurrencyFnSig from '../../templates/api-currencyfn-sig.hbs?raw'
import apiCurrencyFnRet from '../../templates/api-currencyfn-ret.hbs?raw'
import apiCurrencyFnEx from '../../templates/api-currencyfn-ex.hbs?raw'
import apiConfigureSig from '../../templates/api-configure-sig.hbs?raw'
import apiConfigureEx from '../../templates/api-configure-ex.hbs?raw'
import apiTypesStruct from '../../templates/api-types-struct.hbs?raw'
import apiTypesUsage from '../../templates/api-types-usage.hbs?raw'
import apiTsTypesEx from '../../templates/api-ts-types-ex.hbs?raw'

export const NpmInstall = () => {
  return <CodeBlock template={npm} language="bash" />
}

export const YarnInstall = () => {
  return <CodeBlock template={yarn} language="bash" />
}

export const CdnInstall = () => {
  return <CodeBlock template={cdn} language="html" />
}

export const UnpkgInstall = () => {
  return <CodeBlock template={unpkg} language="html" />
}

export const ExportsOverview = () => {
  return <CodeBlock template={exportsOverview} language="typescript" />
}

export const QuickStartBasic = () => {
  return <CodeBlock template={basic} language="typescript" />
}

export const QuickStartSpecific = () => {
  return <CodeBlock template={specific} language="typescript" />
}

export const QuickStartParsing = () => {
  return <CodeBlock template={parsing} language="typescript" />
}

export const QuickStartGlobal = () => {
  return <CodeBlock template={globalConfig} language="typescript" />
}

export const ApiCurrencySig = () => {
  return <CodeBlock template={apiCurrencySig} language="typescript" />
}

export const ApiCurrencyEx = () => {
  return <CodeBlock template={apiCurrencyEx} language="typescript" />
}

export const ApiCurrencyFnSig = () => {
  return <CodeBlock template={apiCurrencyFnSig} language="typescript" />
}

export const ApiCurrencyFnRet = () => {
  return <CodeBlock template={apiCurrencyFnRet} language="typescript" />
}

export const ApiCurrencyFnEx = () => {
  return <CodeBlock template={apiCurrencyFnEx} language="typescript" />
}

export const ApiConfigureSig = () => {
  return <CodeBlock template={apiConfigureSig} language="typescript" />
}

export const ApiConfigureEx = () => {
  return <CodeBlock template={apiConfigureEx} language="typescript" />
}

export const ApiTypesStruct = () => {
  return <CodeBlock template={apiTypesStruct} language="typescript" />
}

export const ApiTypesUsage = () => {
  return <CodeBlock template={apiTypesUsage} language="typescript" />
}

export const ApiTsTypesEx = () => {
  return <CodeBlock template={apiTsTypesEx} language="typescript" />
}
