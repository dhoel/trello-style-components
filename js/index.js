require('babel-polyfill');
import React from 'react';
import ReactDom from 'react-dom';

import Board from './components/board';

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<Board />, document.getElementById('app'))
});
