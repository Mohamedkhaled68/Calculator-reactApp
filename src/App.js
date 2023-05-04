import { useState } from "react";

function App() {
  const [calc, setcalc] = useState('')
  const [result, setresult] = useState('')

  const updateCalc = value => {
    return setcalc(calc + value)
  }

  const creatDigits = () => {
    const digit = []
    for(let i = 1; i < 10; i ++){
      digit.push(
        <button
          key = {i}
          onClick={() => updateCalc(i.toString())}
        >
          {i}
        </button>
      )
    }
    return digit;
  }
  return (
    <div className="app">
      <div className="calc-container">
        <div className="display">
          <>
          {result ? <span>({result})</span> : ''} {calc || '0'}
          </>
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button>del</button>
        </div>
        <div className="degitis">
          {creatDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
