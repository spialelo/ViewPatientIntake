import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home.js';
import PatientInfo from './components/PatientInfo.js';
import EmergencyContact from './components/EmergencyContact.js';
import ReviewPage from './components/ReviewPage.js';
import ThankYou from './components/ThankYou.js'
import logo from './logo.svg';
import './App.css';

const API_PATH = process.env.REACT_APP_API_PATH;

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
  <Switch>
  <Route
      exact
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
      exact
      path="/patient-info"
      component={PatientInfo}
    />
    <Route
      exact
      path="/emergency-contact"
      component={EmergencyContact}
    />
    <Route
      exact
      path="/review-page"
      component={ReviewPage}
    />
    <Route
      exact
      path="/thank-you"
      component={ThankYou}
    />
    <Route
      exact
      path="/"
      component={Home}
    />
    </Switch>

  </div>
  );
}

