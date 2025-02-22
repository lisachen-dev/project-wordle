import React from 'react';

function Results({results}) {
  return (
  <>
    <h1>Current Guesses</h1>
    <div className="guess-results">
        <p>is it getting here?</p>
        {results.map(
            (result) => (
                <p key={result.id}>{result.val}</p>
            )
        )}
    </div>
  </>);
}

export default Results;
