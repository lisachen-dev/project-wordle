import React from 'react';

function Results({results}) {
  return (
  <>
    <h1>Current Guesses</h1>
    <div className="guess-results">
        <p>is it getting here?</p>
        {results.map(
            (result, index) => (
                <p key={index}>{result} and {index}</p>
            )
        )}
    </div>
  </>);
}

export default Results;
