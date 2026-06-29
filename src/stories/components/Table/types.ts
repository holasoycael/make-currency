import type { ReactNode } from 'react'

export type TTableColumn = {
  key: string
  label: string
}

export type TTableRow = {
  key: string
  [key: string]: ReactNode | string | number | boolean
}

export type TableProps = {
  columns: TTableColumn[]
  rows: TTableRow[]
  'data-testid'?: string
}
