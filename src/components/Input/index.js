import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

function Input({ input, setInput }) {
  return (
    <div className='input-container'>
      <textarea
        id='editor'
        value={input}
        onChange={e => setInput(e.target.value)}
        spellCheck={false}
      />

      <button id='clear-btn' onClick={() => setInput('')}>
        <FontAwesomeIcon icon={faEraser} size='2x' />
      </button>
    </div>
  );
}

export default Input;
