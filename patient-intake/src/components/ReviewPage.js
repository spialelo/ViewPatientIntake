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
        let patientName = currState.fname + ' ' + currState.lname;
        return (
            
            <form>
            <h4>Final Review Page of Patient Information</h4>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Patient's Name: </label>
                { currState.fname && 
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticEmail" value={patientName} />
                </div> }
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email: </label>
                {currState.email && 
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticEmail" value={currState.email} />
                </div>
                }
              </div>
              <br/>
              <div className="col-sm-10">
                    <input type="submit" className="btn btn-primary" value="Submit" onClick={e => this.handleSubmit(e)} />
                </div>
            </form>
            );
    }
    
    
}


export default withRouter(ReviewPage);