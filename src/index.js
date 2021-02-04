import React from 'react';
import ReactDOM from 'react-dom';
import EntryPoint from './components/entry-point';

// Cannot rename the file to .jsx as mc-script is hardcoded to .js
// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<EntryPoint />, document.getElementById('app'));
