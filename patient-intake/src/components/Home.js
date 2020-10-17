import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import Button from './Button.js';
import logo from '../logo.svg';
import '../App.css';

class Home extends React.Component {
    render () {
        return (
            <div className="homepage">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <h1>Welcome</h1>
                <p>Patient Check-in</p>
                <Button label="Begin Check In" link="/patient-info" />
                <br/>
                <br/>
            </div>
        );
    }
}

export default withRouter(Home);