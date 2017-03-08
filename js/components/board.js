import React from 'react';
//import ReactDOM from 'react-dom';

import ListContainer from './list-container';

export default function Board(props) {
  return (
    <div className="board">
      <h2>Card Board</h2>
      <ListContainer lists={["List One", "List Two", "List Three"]}/>
    </div>
  );
}
