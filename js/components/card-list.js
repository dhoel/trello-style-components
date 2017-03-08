import React from 'react';
import Card from './card';

export default function CardList(props) {
  const lists = props.lists.map((list, index) => {
    return (
      <div key={index}>
        <h2>{list}</h2>
        <form>
          <input type="text" onChange={e => props.onChange(e)}></input>
          <button type="submit" onClick={e => {
            e.preventDefault();
            props.onSubmit(e);
          }}>Submit</button>
        </form>
      </div>  
    )
  });

  return (
    <div>
      {lists}
    </div>
  );

}
