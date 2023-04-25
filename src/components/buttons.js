import PropTypes from 'prop-types';

function Buttons(props) {
  const { updateDisplay } = props;
  return (
    <div className="buttons-cont">
      <button onClick={() => updateDisplay('AC')} type="button">AC</button>
      <button onClick={() => updateDisplay('+/-')} type="button">+/-</button>
      <button onClick={() => updateDisplay('%')} type="button">%</button>
      <button onClick={() => updateDisplay('\u00F7')} type="button" className="operations">&divide;</button>
      <button onClick={() => updateDisplay('7')} type="button">7</button>
      <button onClick={() => updateDisplay('8')} type="button">8</button>
      <button onClick={() => updateDisplay('9')} type="button">9</button>
      <button onClick={() => updateDisplay('x')} type="button" className="operations">&times;</button>
      <button onClick={() => updateDisplay('4')} type="button">4</button>
      <button onClick={() => updateDisplay('5')} type="button">5</button>
      <button onClick={() => updateDisplay('6')} type="button">6</button>
      <button onClick={() => updateDisplay('-')} type="button" className="operations">-</button>
      <button onClick={() => updateDisplay('1')} type="button">1</button>
      <button onClick={() => updateDisplay('2')} type="button">2</button>
      <button onClick={() => updateDisplay('3')} type="button">3</button>
      <button onClick={() => updateDisplay('+')} type="button" className="operations">+</button>
      <button onClick={() => updateDisplay('0')} type="button" className="rowspan">0</button>
      <button onClick={() => updateDisplay('.')} type="button">.</button>
      <button onClick={() => updateDisplay('=')} type="button" className="operations">=</button>
    </div>
  );
}

Buttons.propTypes = {
  updateDisplay: PropTypes.func.isRequired,
};

export default Buttons;
