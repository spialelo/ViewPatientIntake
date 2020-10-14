import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'
import PatientInfo from './components/PatientInfo.js'
import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
  <div className="App">
        {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
  <Router>
  <Switch>
  <Route
      exact
      path="/"
      render={() => (
        <div>
          <Home />
          {/*<PatientInfo />*/}
        </div>
      )}
    />
  <Route
      path="/dashboard"
      render={() => (
        <div>
          <h1>Dashboard</h1>
          <Link to="/" id="click-me">
            Home
          </Link>
        </div>
      )}
    />
    <Route
      path="/PatientInfo"
      render={() => (
        <div>
          <PatientInfo />
        </div>
      )}
    />
    </Switch>
    </Router>
  </div>
  );
}

