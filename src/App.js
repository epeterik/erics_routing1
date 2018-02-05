//default
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//package imports
import { 
  BrowserRouter,
  Link,
  Route
} from 'react-router-dom';

//App import
import './myStylze.css';
import { NavigationBar } from './NavBar';
import { HomeView } from './HomeView';
import { UsersView } from './UsersView';
import { ToDosView } from './TodosView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route exact path="/" component={HomeView} />
          <Route path="/Users" component={UsersView} />
          <Route path="/Todos" component={ToDosView} />
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
