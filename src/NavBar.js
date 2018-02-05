import React from 'react';
import { 
    NavLink
  } from 'react-router-dom';
import './myStylze.css';

export const NavigationBar = (props) => {
    console.log ("Navigation Bar: ", props);
    return (
        <div className="navBarStyle">
            <NavLink to="/" className="normalNav" activeClassName="activeNav" exact>Home</NavLink>&nbsp;|&nbsp;
            <NavLink to="/Users" className="normalNav" activeClassName="activeNav" exact>Users</NavLink>&nbsp;|&nbsp;
            <NavLink to="/Todos" className="normalNav" activeClassName="activeNav" exact>Todos</NavLink>
        </div>
    );
}