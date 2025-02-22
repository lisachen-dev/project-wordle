import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Submission from '../Submission/';
import Results from '../Results/';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  function handleAddResult(guess){
    setResults([...results, guess]);
  }

  return (
      <>
        <Submission handleAddResult={handleAddResult}/>
        <Results results={results}/>
      </>
  )
}

export default Game;
