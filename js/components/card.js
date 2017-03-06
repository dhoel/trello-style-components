import React from 'react';

export default function Card(props) {

  return (
    <div className="card">
        <div className="card-title">{props.cardTitle}</div>
        <div className="card-text">{props.cards}</div>
    </div>
  );
}
