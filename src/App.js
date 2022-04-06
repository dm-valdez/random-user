import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import RandomUser from './components/RandomUser';

function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={RandomUser} />
          <Route path="*">
            <Redirect to={{ pathname: '/' }} />
          </Route>
          <Route path="/?page">
            <Redirect to={{ pathname: '/?page=1' }} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;