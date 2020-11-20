import React from 'react';
import Item from './Item';

function List(props) {
  return (
    <div className='List'>
      {props.items.map((item) => (
        <Item title={item.title} />
      ))}
    </div>
  );
}
export default List;
