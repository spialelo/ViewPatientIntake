import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

class Footer extends React.Component {
    
render() {
    return(
        <footer className="footer">
            <div className="container">
            <span className="text-muted">&copy; Patient Intake 2020</span>
          </div>
        </footer>
        );
    }

}
export default Footer;