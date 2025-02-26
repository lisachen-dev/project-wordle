import React from 'react';

function GuessInput({ enteredVal, setEnteredVal, handleAdd }) {

    function handleSubmit(event){
        event.preventDefault();
        console.log("word added: ", enteredVal);
        handleAdd(enteredVal);
        setEnteredVal('');
    }

    return (
        <form onSubmit={handleSubmit} className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                required
                id="guess-input"
                type="text"
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title={"Word must be at least 5 letters."}
                value= {enteredVal}
                onChange={(event) => {
                    const nextGuess = event.target.value.toUpperCase();
                    setEnteredVal(nextGuess)
                }}
            />
            <p>{enteredVal}</p>
        </form>
    );
}

export default GuessInput;
