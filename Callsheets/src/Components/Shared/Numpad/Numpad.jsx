import React, { useState } from 'react';
import './Numpad.css';

const Numpad = ({ onKeyPress }) => {
  const [keys] = useState([
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '', '0', 'DEL'
  ]);

  return (
    <div className="number-pad">
      {keys.map((key, index) => (
        <div
          key={index}
          className={`key ${key === 'DEL' ? 'delete' : ''}`}
          onClick={() => onKeyPress(key)}
        >
          {key}
        </div>
      ))}
    </div>
  );
};

export default Numpad;
