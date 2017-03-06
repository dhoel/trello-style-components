import React from 'react';

export default function Card() {
  const name = "Card";
  const text = "This is a Card"
  return (
    <div className="card">
      <div className="card-name">{name}</div>
      <div className="card-text">{text}</div>
    </div>
  );
}
