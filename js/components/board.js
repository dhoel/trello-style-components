import React from 'react';
import ReactDOM from 'react-dom';

import CardList from './card-list'

export default function Board() {
  return (
    <div className="board">
      <CardList />
      <CardList />
      <CardList />
    </div>
  )
}
