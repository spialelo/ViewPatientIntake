import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';


class EmergencyContact extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {}
        
        this.handleChange = this.handleChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        
    }
    
    componentDidMount() {
        // console.log(this.props);
        const prevState = this.props ? this.props.location.state : Object.assign({});
        this.setState({patient: Object.assign({}, prevState.patient)});
    }
    
    handleChange(e) {
        const patient = Object.assign({}, this.state.patient);
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        patient[name] = value;
        this.setState({patient});
    }

    handleNext(e) {
        e.preventDefault();
        const patientFile = this.state.patient;
        // Change input submit to Link and style like button
        // Pass this component's state onto the next component/fields for user to fill in
        this.props.history.push({ 
            pathname: '/review-page',
            state: this.state
        });
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