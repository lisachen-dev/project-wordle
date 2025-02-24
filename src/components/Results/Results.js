import React from 'react';

function Results({gameResults}) {
  return (
  <>
    <h1>Current Guesses</h1>
    <div className="guess-results">
        {gameResults.map(
            (result) => (
                <p className="guess" key={result.id}>{result.val}</p>
            )
        )}
    </div>
  </>);
}

export default Results;
