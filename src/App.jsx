import React from 'react'
import './App.css'
import { useState } from 'react'
function App() {

  const [input, setInput] = useState('');
  const [result, setResult] = useState('0');

  const appendCharacter = (char) => {
    if(result!='0'){
      setInput(result+char);
      setResult('0');
    }
    else{
      setInput(input + char);
    }
  };
  const removeCharacter=()=>{
    if(result!='0'){
      setResult('0');
    }
    let back=input.slice(0,input.length-1);
    setInput(back);
  }
  const clearInput = () => {
    setInput('');
    setResult('0');
  };

  const calculateResult = () => {
    try {
        setInput('');
      setResult(eval(input).toString());
    } catch {
      setResult('Error');
    }
  };

  return (
    <div>
      <h1>Simple Calulator</h1>
    <div className="calculator">
      <input type='text' className="display" value={input || result} disabled></input>
      <div className="button-row">
        <button className="button" onClick={clearInput}>C</button>
        <button className="button" onClick={() => appendCharacter('(')}>(</button>
        <button className="button" onClick={() => appendCharacter(')')}>)</button>
        <button className='button' onClick={removeCharacter}>⌫</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => appendCharacter('7')}>7</button>
        <button className="button" onClick={() => appendCharacter('8')}>8</button>
        <button className="button" onClick={() => appendCharacter('9')}>9</button>
        <button className="button operation" onClick={() => appendCharacter('*')}>×</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => appendCharacter('4')}>4</button>
        <button className="button" onClick={() => appendCharacter('5')}>5</button>
        <button className="button" onClick={() => appendCharacter('6')}>6</button>
        <button className="button operation" onClick={() => appendCharacter('-')}>−</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => appendCharacter('1')}>1</button>
        <button className="button" onClick={() => appendCharacter('2')}>2</button>
        <button className="button" onClick={() => appendCharacter('3')}>3</button>
        <button className="button operation" onClick={() => appendCharacter('+')}>+</button>
      </div>
      <div className="button-row">
        <button className="button" onClick={() => appendCharacter('0')}>0</button>
        <button className="button" onClick={() => appendCharacter('.')}>.</button>
        <button className="button operation" onClick={() => appendCharacter('/')}>÷</button>
        <button className="button" onClick={calculateResult}>=</button>
      </div>
    </div>
    </div>
  );
}

export default App
