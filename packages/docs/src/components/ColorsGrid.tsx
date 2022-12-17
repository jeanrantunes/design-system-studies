import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2.5rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: getContrast(color, '#fff') < 3.5 ? 'black' : 'white',
          }}
        >
          <strong>{key}</strong>
          <strong>{color}</strong>
        </div>
      </div>
    )
  })
}
