import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';


class EmergencyContact extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {}
        
    }
    
    
    render () {
        return (
            <div>Blah
            <br/>
            <br/>
            Now for Emergency Contact information
            </div>
            );
    }
    
    
}


export default withRouter(EmergencyContact);