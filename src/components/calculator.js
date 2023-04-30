import { useState } from 'react';
import Buttons from './buttons';
import calculate from '../logic/calculate';

function Calculator() {
  const [output, setOutput] = useState({ total: null, operation: null, next: null });

  const updateDisplay = (keyValue) => {
    const current = calculate(output, keyValue);
    setOutput(current);
  };

  const { total, next, operation } = output;
  const heading = "Let's do some math!";
  return (
    <>
      <div className="calc-wrapper">
        <h2>{heading}</h2>
        <div className="calculator">
          <div className="display">
            { ' ' }
            {total}
            {operation}
            {next}
          </div>
          <Buttons updateDisplay={(e) => updateDisplay(e)} />
        </div>
      </div>
    </>
  );
}

export default Calculator;
