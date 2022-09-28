import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
import React, { useState } from 'react';

const Board = () => {
  const [game, setGame] = useState(new Chess());
  const [optionSquares, setOptionSquares] = useState({});
  const [orientation, setOrientation] = useState('white');

  const changeOrientation = () => {
    if (orientation === 'white') {
      setOrientation('black');
    } else {
      setOrientation('white')
    }
  }

  const onSquareClick = (square) => {
    moveOptions(square);
    console.log(square);
  }

  const moveOptions = (square) => {
    let moves = game.moves({
      square,
      verbose: true
    });

    if (moves.length === 0) {
      return;
    }

    let possibleMoves = {};
    moves.map((move) => {
      possibleMoves[move.to] = {
        background:
          game.get(move.to) && game.get(move.to).color !== game.get(square).color
            ? 'radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)'
            : 'radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)',
        borderRadius: '50%'
      }
      return move;
    })
    possibleMoves[square] = {
      background: 'rgba(255, 255, 0, 0.4)'
    };
  }

  const showBoard = () => {
    console.log(game);
  }

  return (
    <>
      <Chessboard
        id='basic-board'
        position={game.fen()}
        onSquareClick={onSquareClick}
        boardOrientation={orientation}/>
      <button onClick={changeOrientation}>Flip Board</button>
      <button onClick={showBoard}>Show Board</button>
    </>
  )
}

export default Board;