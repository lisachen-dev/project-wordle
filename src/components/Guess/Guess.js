import React from 'react';

function Guess({ key, result }) {

    const { id, val = "" } = result || {};
    const letters = val.split("");

        return (
            <div className="guess" key={id}>
                {range(5).map((index) => (
                    <span className="cell" key={index}>
                        {letters[index] || ""}
                    </span>
                ))}
            </div>
        );
}

export default Guess;
