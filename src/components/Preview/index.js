import React, { useEffect, useState } from 'react';
import xml2js from '../../lib/xml2js';

import './styles.css';

function Preview({ source }) {
  const [parsedSource, setParsedSource] = useState('');

  useEffect(() => {
    setParsedSource(
      source.replace(/{/g, '"').replace(/}/g, '"').split('\n').join('')
    );
  }, [source]);

  return (
    <div className='preview-container'>
      <textarea
        id='preview'
        value={
          parsedSource && JSON.stringify(xml2js(parsedSource, true), null, 2)
        }
        readOnly
      ></textarea>
    </div>
  );
}

export default Preview;
