import React from 'react';
import Card from './card';

export default function CardList(props) {
  const lists = props.lists.map((list, index) => {
    return <div key={index}>
      <h2>{list}</h2>
      <Card cards="This is a card"/>
      <Card cards="This is a card"/>
      <Card cards="This is a card"/>
    </div>
  });

  // const {list1, list2, list3} = props.lists;

return (
  <div>
    {lists}
  </div>
);

  // return (
  //   <div className="card-list">
  //     <h2>{props.lists}</h2>
  //     <Card cardTitle="Card One"
  //           cards="This is a card"/>
  //     <Card cardTitle="Card Two"
  //           cards="This is a card"/>
  //     <Card cardTitle="Card Three"
  //           cards="This is a card"/>
  //   </div>
  // );
}
