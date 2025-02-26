import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [ enteredVal, setEnteredVal ] = React.useState('');
    const [ resultList, setResultList ] = React.useState([]);

    function handleAdd(word){
        const wordToAdd = {
            id: crypto.randomUUID(),
            word
        }
        setResultList([...resultList, wordToAdd])
    }

    return(
        <>
            <GuessInput
                enteredVal={enteredVal}
                setEnteredVal={setEnteredVal}
                handleAdd={handleAdd}
            />
            <GuessResults resultList={resultList} />
        </>
    )
}

export default Game;