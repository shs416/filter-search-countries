import React from "react";

function Search({callback}) {

    /* text input on change sent to callback in App.js */
    function changeText(value) {
        callback(value);
    }

    return (
        <input type="search" onChange={(e) => changeText(e.target.value)}></input>
    );
}

export default Search;