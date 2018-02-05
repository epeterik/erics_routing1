import React from 'react';
import { 
    NavLink,
    Link
  } from 'react-router-dom';
//import './myStylze.css';
import './ui-toolkit/css/nm-cx/main.css';

export const NewNavigationBar = (props) => {
    console.log ("New Navigation Bar: ", props);
    return (
        <ul className="button-group btn-cta">
            <li><Link to="/"><button className={props.currentView === "/" ? "active" : ""}>Home</button></Link></li>
            <li><Link to="/Users"><button className={props.currentView === "/Users" ? "active" : ""}>Users</button></Link></li>
            <li><Link to="Todos"><button className={props.currentView === "/Todos" ? "active" : ""}>To Do</button></Link></li>
        </ul>
    );
}