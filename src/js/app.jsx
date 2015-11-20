
import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <Main />, 
  document.getElementById('app')
);

