import React from 'react';
import GuessRow from '../GuessRow';

function GuessResults({ resultList }) {
    return (
        <div className="guess-results">
            {resultList.map((result)=>(
                <GuessRow word={result.word} key={result.id} />
            ))}
        </div>
)}

export default GuessResults;
