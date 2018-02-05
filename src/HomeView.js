import React from 'react';
import './myStylze.css';
import { NewNavigationBar } from './NewNavBar';

export const HomeView = (props) => {
    console.log("Home View: ", props);
    let localPath = props.match.path;
    console.log(localPath);
    return (
        <div>
            <NewNavigationBar currentView={localPath} />
            <h2>Users and Todos</h2>
        </div>
    );
}