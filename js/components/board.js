import React from 'react';
import ReactDOM from 'react-dom';

import CardList from './card-list'

export default function Board(props) {
  return (
    <div className="board">
      <h2>The Board</h2>
      <CardList lists={["List One", "List Two", "List Three"]}/>
    </div>
  )
}
