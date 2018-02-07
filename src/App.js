//default
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//package imports
import { 
  BrowserRouter,
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';

//App import
import './myStylze.css';
//import { NavigationBar } from './NavBar';
import { HomeView } from './HomeView';
import { UsersView } from './UsersView';
import { ToDosView } from './TodosView';
import { NewNavigationBar } from './NewNavBar';

//takes whatever is after the first slash and displays it to the screen
const DynamicView = (props) => {
  console.log("DynamicView:", props);
  let localMatch = props.match;
  return (
    <div className="card">  
      <h5>{localMatch.params.name} View</h5>
      <p>Content goes here.</p>
    </div>
  ); 
}

const location = (props) => {
  return (
    <div>
      Current Path: {props.location.pathname}
    </div>
  )
}

const LocationRouter = withRouter(location);

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
          <LocationRouter />
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/Users" component={UsersView} />
            <Route path="/Todos" component={ToDosView} />

            <Route path="/:name" component={DynamicView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
