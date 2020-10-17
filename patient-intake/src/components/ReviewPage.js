import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';


class ReviewPage extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            patient: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    componentDidMount() {
        // console.log(this.props);
        const prevState = this.props ? this.props.location.state : Object.assign({});
        this.setState({patient: Object.assign({}, prevState.patient)});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const patientFile = this.state.patient;
        // Change input submit to Link and style like button
        // Pass this component's state onto the next component/fields for user to fill in
        this.props.history.push({ 
            pathname: '/emergency-contact',
            state: this.state
        });
        
        
        // Organize compiled data in a data structure that our API is looking for
        
        // successful status completion; if checkInComplete, navigate to "Check-in Complete" page
        // update state with checkInComplete: true / false

    }
    
    
    render () {
        let currState = this.state.patient
        return (
                <div>Blah
                    <br/>
                    <br/>
                    Final Review Page of Patient Information
                    <br/>
                    {currState.fname && <p>Patient Name: {currState.fname} {currState.lname}</p>}
                    <br/>
                    {currState.email && <p>Email Address: {currState.email}</p>}
                    <br/>
                    <input type="submit" value="Submit" onClick={e => this.handleSubmit(e)} />
                </div>
            );
    }
    
    
}


export default withRouter(ReviewPage);