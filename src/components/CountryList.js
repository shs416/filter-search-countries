import React from "react";

function TaskList( {text, data} ) {

    const filteredData = data.filter((item) => {return item.toLowerCase().indexOf(text.toLowerCase()) > -1});

    return (

        <ul>
            {filteredData.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    );
}

export default TaskList;