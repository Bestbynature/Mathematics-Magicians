import { useState } from 'react';
import Buttons from './buttons';
import calculate from '../logic/calculate';
import './styles.css';

function Calculator() {
  const [output, setOutput] = useState({ total: null, operation: null, next: null });

  const updateDisplay = (keyValue) => {
    const current = calculate(output, keyValue);
    setOutput(current);
  };

  const { total, next, operation } = output;

  return (
    <div className="calculator">
      <div className="display">
        { ' ' }
        {total}
        {operation}
        {next}
      </div>
      <Buttons updateDisplay={(e) => updateDisplay(e)} />
    </div>
  );
}

export default Calculator;
