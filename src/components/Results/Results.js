import React from 'react';
import Guess from '../Guess';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants.js'
import { range } from '../../utils.js'



function Results({gameResults}) {

  return (
      <>
        <h1>Current Guesses</h1>
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
               <Guess key={index} result={gameResults[index] || { id: index, val: "" }} />
             ))}
        </div>
      </>
  );
}

export default Results;
