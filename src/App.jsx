import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import Board from './components/Board.jsx';
import Details from './components/Details.jsx';

const axios = require('axios');

const App = () => {
  const [game, setGame] = useState(new Chess());
  const [currFen, setCurrFen] = useState(game.fen());
  const [opening, setOpening] = useState('Starting Position');
  const [moves, setMoves] = useState([]);

  const getOpening = (fen) => {
    axios.get(`https://explorer.lichess.ovh/masters?fen=${fen}&moves=5`)
      .then((results) => {
        let possibleMoves = [];

        if (fen === 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') {
          results.data.moves.forEach((move) => {
            possibleMoves.push(move.san);
          })
          setMoves(possibleMoves);
        }

        if (results.data.opening !== null && results.data.opening.name !== opening) {
          setOpening(results.data.opening.name);

          results.data.moves.forEach((move) => {
            possibleMoves.push(move.san);
          })
          setMoves(possibleMoves);
        }
      })
      .then(() => {
        console.log(moves);
      })
  }

  useEffect(() => {
    getOpening(currFen);
    console.log(opening);
  },[currFen])

  return (
    <div>
      <h1>Chess PAL</h1>
      <Board
        game={game}
        currFen={currFen}
        setGame={setGame}
        setCurrFen={setCurrFen}
        Chess={Chess}
      />
      <Details
        opening={opening}
        moves={moves}/>
    </div>
  )
}

export default App;
