import { useState } from 'react'

export default function PercentCalc() {
  const [weight, setWeight] = useState('')
  const [percent, setPercent] = useState('')
  const [mode, setMode] = useState('subtract')

  const wN = parseFloat(weight)
  const pN = parseFloat(percent)
  const valid = weight !== '' && percent !== '' && !isNaN(wN) && !isNaN(pN)
  const delta = valid ? wN * pN / 100 : null
  const result = valid ? (mode === 'add' ? wN + delta : wN - delta) : null

  const sign = mode === 'add' ? '+' : '−'

  return (
    <div className="calculator">
      <div className="calc-label">Dodaj lub odejmij procent od ciężaru</div>

      <div className="input-row">
        <input
          className="num-input"
          type="number"
          inputMode="decimal"
          autoComplete="off"
          placeholder="Ciężar"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <span className="input-unit">kg</span>
      </div>

      <div className="input-row">
        <div className="mode-toggle">
          <button
            className={`mode-btn${mode === 'add' ? ' active' : ''}`}
            onClick={() => setMode('add')}
            aria-pressed={mode === 'add'}
          >
            +
          </button>
          <button
            className={`mode-btn${mode === 'subtract' ? ' active' : ''}`}
            onClick={() => setMode('subtract')}
            aria-pressed={mode === 'subtract'}
          >
            −
          </button>
        </div>
        <input
          className="num-input"
          type="number"
          inputMode="decimal"
          autoComplete="off"
          placeholder="Procent"
          value={percent}
          onChange={e => setPercent(e.target.value)}
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
            {wN} kg {sign} {pN}% = {+result.toFixed(2)} kg
          </div>
        )}
      </div>
    </div>
  )
}
