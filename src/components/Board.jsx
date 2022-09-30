import { Chessboard } from 'react-chessboard';
import React, { useState, useRef } from 'react';

const Board = (props) => {
  const chessboardRef = useRef();
  const [orientation, setOrientation] = useState('white');


  const onDrop = (source, target) => {
    const move = props.game.move({
      from: source,
      to: target
    });

    if (move === null) {
      return false;
    }

    props.setGame(props.game);
    props.setCurrFen(props.game.fen())

    return move;
  }

  const changeOrientation = () => {
    if (orientation === 'white') {
      setOrientation('black');
    } else {
      setOrientation('white')
    }
  }

  const showBoard = () => {
    console.log(props.game);
  }

  return (
    <>
      <Chessboard
        id='basic-board'
        position={props.currFen}
        onPieceDrop={onDrop}
        boardOrientation={orientation}
        ref={chessboardRef} />
      <button onClick={changeOrientation}>Flip Board</button>
      <button onClick={showBoard}>Show Board</button>
    </>
  )
}

export default Board;