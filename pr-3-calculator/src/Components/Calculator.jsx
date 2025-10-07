
import { useState } from 'react';
import './Calculator.css'

const  Calculator=()=> {
  

const [input,setInput] = useState("")

  const inputDigit = (value) => {
  setInput(()=>input+value )

}

const clearAll = () => {
setInput("")
}

const BackSpace = () => {
setInput(input.slice(0, -1));
}


const handleEquals = () => {
        setInput(String(eval(input)));
 
}

const applyOperation = (value)=>{
  setInput(()=>input+value )

}
  return (
    <div>

      <h2>Calculator</h2>

      <div className="calc-root">
        <div className="calc-shell">
          <div className="calc-display" aria-live="polite">{input}</div>


          <div className="calc-buttons">
            <button className="btn func" onClick={clearAll}>AC</button>
            <button className="btn func" onClick={BackSpace}>C</button>
            <button className="btn" onClick={()=>inputDigit(".")}>.</button>
            <button className="btn op" onClick={() => applyOperation('/')}>÷</button>


            <button className="btn" onClick={() => inputDigit('7')}>7</button>
            <button className="btn" onClick={() => inputDigit('8')}>8</button>
            <button className="btn" onClick={() => inputDigit('9')}>9</button>
            <button className="btn op" onClick={() => applyOperation('*')}>*</button>


            <button className="btn" onClick={() => inputDigit('4')}>4</button>
            <button className="btn" onClick={() => inputDigit('5')}>5</button>
            <button className="btn" onClick={() => inputDigit('6')}>6</button>
            <button className="btn op" onClick={() => applyOperation('-')}>-</button>


            <button className="btn" onClick={() => inputDigit('1')}>1</button>
            <button className="btn" onClick={() => inputDigit('2')}>2</button>
            <button className="btn" onClick={() => inputDigit('3')}>3</button>
            <button className="btn op" onClick={() => applyOperation('+')}>+</button>


            <button className="btn zero" onClick={() => inputDigit('00')}>00</button>
            <button className="btn 2-zero" onClick={() => inputDigit('0')}>0</button>
            <button className="btn eq" onClick={handleEquals}>=</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Calculator;