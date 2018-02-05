import React from 'react';
import './myStylze.css';

export const ToDosDetails = (props) => {
    let toDoDetailsFor = props.match.params.toDoDetail;
    console.log("In To Dos Details: ", props)
    return (
        <div className="containDiv">
            <hr />
            <h1>ToDos Details {toDoDetailsFor}</h1>
            <p>
                Some random text about ToDo's here.
            </p>
        </div>
    );
}