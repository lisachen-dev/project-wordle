import React from 'react';
import { range } from '../../utils.js';

function GuessRow({ word="" }) {
    const letterArray = word.split("");

    return (
        <p className="guess">
            {range(5).map(
                (num)=>(
                    <span key={num} className="cell">
                        {letterArray[num]}
                    </span>
                )
            )}
        </p>
    )
}

export default GuessRow;
