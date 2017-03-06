import React from 'react';
import ReactDOM from 'react-dom';

import CardList from './card-list'

export default function Board(props) {
  return (
    <div className="board">
      <CardList title="Board One"
                lists=["List One", "List Two", "List Three"]/>
      
    </div>
  )
}
