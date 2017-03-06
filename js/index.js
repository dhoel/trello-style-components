require('babel-polyfill');
import React from 'react';
import ReactDom from 'react-dom';

import CardList from './components/card-list';

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(<CardList />, document.getElementById('app'))
});
