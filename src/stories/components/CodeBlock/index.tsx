import { createHighlighter } from 'shiki'
import Handlebars from 'handlebars'

// heroui
import { Snippet } from '@heroui/react'

// types and interfaces
import type { CodeBlockProps } from './types'

const highlighter = await createHighlighter({
  themes: ['night-owl-light'],
  langs: ['typescript', 'bash', 'html']
})

const CodeBlock = ({ template, language }: CodeBlockProps) => {
  const currentDb = {
    value: '123',
    money: 'BRL'
  }

  const compile = Handlebars.compile(template)(currentDb)
  const html = highlighter.codeToHtml(compile, {
    lang: language,
    theme: 'night-owl-light'
  })

  return (
    <Snippet
      data-testid="currency-fn__snippet--code"
      color="default"
      radius="sm"
      hideSymbol
      classNames={{ pre: 'whitespace-break-spaces' }}
      className="font-(family-name:inter) text-(size:14px)"
    >
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Snippet>
  )
}

export default CodeBlock
