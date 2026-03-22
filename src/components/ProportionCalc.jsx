import { useState } from 'react'

export default function ProportionCalc() {
  const [x, setX] = useState('')
  const [y, setY] = useState('')
  const [z, setZ] = useState('')

  const xN = parseFloat(x)
  const yN = parseFloat(y)
  const zN = parseFloat(z)
  const valid = x !== '' && y !== '' && z !== '' && yN !== 0 && !isNaN(xN) && !isNaN(yN) && !isNaN(zN)
  const result = valid ? (xN * zN / yN) : null

  return (
    <div className="calculator">
      <div className="calc-label">Jeśli X kg to Y%, to ile kg to Z%?</div>

      <div className="input-row">
        <input
          className="num-input"
          type="number"
          inputMode="decimal"
          autoComplete="off"
          placeholder="X"
          value={x}
          onChange={e => setX(e.target.value)}
        />
        <span className="input-unit">kg</span>
      </div>

      <div className="input-row">
        <input
          className="num-input"
          type="number"
          inputMode="decimal"
          autoComplete="off"
          placeholder="Y"
          value={y}
          onChange={e => setY(e.target.value)}
        />
        <span className="input-unit">%</span>
      </div>

      <div className="divider" />

      <div className="input-row">
        <input
          className="num-input"
          type="number"
          inputMode="decimal"
          autoComplete="off"
          placeholder="Z"
          value={z}
          onChange={e => setZ(e.target.value)}
        />
        <span className="input-unit">%</span>
      </div>

      <div className="result-block">
        <div className="result-label">Wynik</div>
        <div className="result-value">
          {result !== null ? `${+result.toFixed(2)} kg` : '—'}
        </div>
        {valid && (
          <div className="result-subtitle">
            {xN} kg × {zN}% ÷ {yN}%
          </div>
        )}
      </div>
    </div>
  )
}
