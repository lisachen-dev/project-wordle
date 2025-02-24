import React from 'react';

function Submission({handleAddResult}) {

  const [guess, setGuess] = React.useState('');

  function handleSubmit(event){
    event.preventDefault();
    handleAddResult(guess);
    console.log(guess);
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Enter a 5 letter word"
        onChange={
            event=>{
                const upperWord = event.target.value.toUpperCase();
                setGuess(upperWord);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Submission;
