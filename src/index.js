import React from 'react';
import ReactDOM from 'react-dom';
import EntryPoint from './views/entry-point';

// Cannot rename the file to anything other than .js as mc-script is hardcoded to look for .js
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<EntryPoint />, document.getElementById('app'));
