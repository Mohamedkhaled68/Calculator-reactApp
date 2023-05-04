import { useState } from "react";

function App() {
  const [calc, setcalc] = useState('')
  const [result, setresult] = useState('')

  const ops = ['*', '-', '+', '/', '.']

  const updateCalc = value => {
    if(
      ops.includes(value) && calc == '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }

    setcalc(calc + value)

    if(!ops.includes(value)){
      setresult(eval(calc + value).toString())
    }
  }

  const delLast = () => {
    if(calc == ''){
      return;
    }
    const value = calc.slice(0, -1)
    setcalc(value)
    setresult(value)
  }

  const calculate = () => {
    setcalc(result)
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

          <button onClick={()=> delLast()}>del</button>
        </div>
        <div className="degitis">
          {creatDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={()=> calculate()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
