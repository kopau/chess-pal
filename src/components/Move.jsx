import React, { useState } from 'react';

const Move = (props) => {

  return (
    <div className='move'>
      <div><b>Analysis Bar of Each Move</b></div>
      {props.move} -  <small><b>Chess Opening Names of Each Move</b></small>
    </div>
  )
}

export default Move;
