import React, { useState } from 'react';
import Move from './Move.jsx';

const Details = (props) => {

  return (
    <div className='details-column'>
      <h2 className='opening-header'>Current Opening</h2>
      <div className='current-opening'>{props.opening}</div>
      <b>Going to Add Analysis Bar</b>
      <div className='moves-list'>
        <h2>Most Common Moves</h2>
        {props.moves.length > 0
        ? props.moves.map(move =>
          <Move
            move={move} />
        )
        : null}
      </div>
    </div>
  )
}

export default Details;
