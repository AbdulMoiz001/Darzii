import React from 'react';

function Blank() {
    function handleClearStorage() {
        localStorage.clear();
        console.log('localStorage cleared!');
    }

    return (
        <div>
            <h1>Blank Page</h1>
            <button onClick={handleClearStorage}>Clear Storage</button>
        </div>
    );
}

export default Blank;
