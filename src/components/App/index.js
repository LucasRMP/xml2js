import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCheck } from '@fortawesome/free-solid-svg-icons';

import Input from '../Input';
import Preview from '../Preview';

import './styles.css';

function App() {
  const [input, setInput] = useState('');
  const [source, setSource] = useState('');

  return (
    <div className='App'>
      <Input setInput={setInput} input={input} />
      <div id='menu-container'>
        <span id='app-icon'>
          <FontAwesomeIcon id='second' icon={faCode} color='#fff' size='3x' />
        </span>

        <button id='confirm-button' onClick={() => setSource(input)}>
          <FontAwesomeIcon icon={faCheck} color='#fff' size='3x' />
        </button>

        <h1 id='company-icon'>RMP</h1>
      </div>
      <Preview source={source} />
    </div>
  );
}

export default App;
