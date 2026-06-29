// types and interfaces
import type { TableProps } from './types'

const Table = ({ columns, rows, 'data-testid': testId }: TableProps) => {
  return (
    <div>
      <table
        data-testid={testId}
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          fontSize: '13px',
          fontFamily: 'Inter, sans-serif',
          lineHeight: '1.4'
        }}
      >
        <thead>
          <tr style={{ borderBottom: '1px solid #f4f4f5' }}>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  padding: '6px 12px',
                  fontWeight: '500',
                  color: '#71717a',
                  textTransform: 'uppercase',
                  fontSize: '11px',
                  letterSpacing: '0.05em'
                }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} style={{ borderBottom: '1px solid #f4f4f5' }}>
              {columns.map((column) => (
                <td
                  key={column.key}
                  style={{
                    padding: '8px 12px',
                    color: '#18181b',
                    verticalAlign: 'middle'
                  }}
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
