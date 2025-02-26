import React from 'react';

function GuessRow({ word }) {
    const letterArray = word.split("");

    return (
        <p className="guess">
            {letterArray.map(
                (letter, index) => <span className="cell" key={index}>{letter}</span>
            )}
        </p>
    )
}

export default GuessRow;
