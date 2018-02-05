import React from 'react';
import './myStylze.css';

export const UserDetails = (props) => {
    let selectedUser = props.match.params.selectedUser;
    console.log("User Details: ", props)
    return (
        <div className="containDiv">
            <hr />
            <h1>User Details {selectedUser}</h1>
            <p>
                Some random text about the user goes right here!
            </p>
        </div>
    );
}