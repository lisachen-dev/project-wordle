import React from 'react';

function Guess({ key, result }) {

    const { id, val = "" } = result || {};
    const letters = val.split("");

        return (
            <div className="guess" key={id}>
                {range(5).map((letterSlot) => (
                    <span className="cell" key={letterSlot}>
                        {letters[letterSlot] || ""}
                    </span>
                ))}
            </div>
        );
}

export default Guess;
