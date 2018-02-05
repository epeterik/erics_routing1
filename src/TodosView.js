import React from 'react';
import './myStylze.css';
import { ToDosDetails } from './TodosDetails';
import { 
    BrowserRouter,
    Link,
    Route
  } from 'react-router-dom';
import { NewNavigationBar } from './NewNavBar';

export const ToDosView = (props) => {
    console.log("To Do View: ", props);
    let localPath = props.match.path;
    console.log(localPath);
    return (
        <div className="containDiv">
            <NewNavigationBar currentView={localPath} />
            <p>ToDos View</p>
            <ul>
                <li><Link to={localPath + "/1"}>Todos 1</Link></li>
                <li><Link to={localPath + "/2"}>Todos 2</Link></li>
                <li><Link to={localPath + "/3"}>Todos 3</Link></li>
                <li><Link to={localPath + "/4"}>Todos 4</Link></li>
            </ul>
            <Route path={localPath + "/:toDoDetail"} component={ToDosDetails}/>
        </div>
    );
}