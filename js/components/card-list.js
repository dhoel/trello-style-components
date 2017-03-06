import React from 'react';
import Card from './card';

export default function CardList(props) {
  return (
    <div className="card-list">
      <Card cardTitle="Card One"
            cards="This is a card"/>
      <Card cardTitle="Card Two"
            cards="This is a card"/>
      <Card cardTitle="Card Three"
            cards="This is a card"/>
    </div>
  );
}
