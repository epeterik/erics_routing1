import React from 'react';
import './myStylze.css';
import { UserDetails } from './userDetails';
import { 
    BrowserRouter,
    Link,
    Route
  } from 'react-router-dom';
import { NewNavigationBar } from './NewNavBar';

export const UsersView = (props) => {
    console.log("User Details View: ", props);
    let localPath = props.match.path;
    console.log(localPath);
    return (
        <div className="containDiv">
            <NewNavigationBar currentView={localPath} />
            <p>Users View</p>
            <ul>
                <li><Link to={localPath + "/1"}>User 1</Link></li>
                <li><Link to={localPath + "/2"}>User 2</Link></li>
                <li><Link to={localPath + "/3"}>User 3</Link></li>
                <li><Link to={localPath + "/4"}>User 4</Link></li>
            </ul>
            <Route path={localPath + "/:selectedUser"} component={UserDetails}/>
        </div>
    );
}