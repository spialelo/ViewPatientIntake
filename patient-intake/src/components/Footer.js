import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';

class Footer extends React.Component {
    
render() {
    return(
        <footer className="footer">
            <div class="container">
            <span class="text-muted">&copy; Patient Intake 2020</span>
          </div>
        </footer>
        );
    }

}
export default Footer;