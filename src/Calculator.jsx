import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const calculate = () => {
    try {
      setDisplay(evaluate(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((btn) => (
          <Button key={btn} value={btn} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;