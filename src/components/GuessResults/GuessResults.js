import React from 'react';
import GuessRow from '../GuessRow';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';
import { range } from '../../utils.js';

function GuessResults({ resultList }) {

    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map(
                (num)=>(
                    <GuessRow
                        key={num}
                        word={resultList[num]?.word || ''}
                    />
                )
            )}
        </div>
)}

export default GuessResults;
