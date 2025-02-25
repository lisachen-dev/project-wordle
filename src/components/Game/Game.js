import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Results from '../Results/';
import Submission from '../Submission/';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameResults, setGameResults] = React.useState([]);

  function handleAddResult(guess){
    setGameResults([...gameResults, { id: crypto.randomUUID(), val: guess }]);
  }

  return (
      <>
        <Results gameResults={gameResults}/>
        <Submission handleAddResult={handleAddResult}/>
      </>
  )
}

export default Game;
