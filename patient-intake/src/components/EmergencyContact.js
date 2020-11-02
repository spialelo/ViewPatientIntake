import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import axios from 'axios';

class EmergencyContact extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            patient: {}
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    
    componentDidMount() {
        const prevState = this.props ? this.props.location.state : Object.assign({});
        Object.keys(prevState).forEach((key) => {
            if(Object.keys(prevState[key])) {
                this.setState({[key]: Object.assign({}, prevState[key])});
            }
            this.setState({[key]: prevState[key]});
        });
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
            <div>
            <header>
                <nav className="fixed-top" aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><Link to="/emergency-contact">Emergency Contact Information</Link></li>
                  </ol>
                </nav>
            </header>
            <main role="main" className="container">
                <h1>Emergency Contact Information</h1>
                <form>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Emergency Contact Name:
                         </label>
                         <input type="text" className="form-control" name="patient_emergency_contact_name" placeholder="Name" value={this.state.patient_emergency_contact_name} onChange={this.handleChange} />
                     </div>
                     <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Emergency Contact Number:
                         </label>
                         <input type="tel" className="form-control" name="patient_emergency_contact_number" placeholder="1234567890" value={this.state.patient_emergency_contact_number} onChange={this.handleChange} />
                     </div>
                     <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Emergency Contact Relationship:
                         </label>
                         <input type="text" className="form-control" name="patient_emergency_contact_relationship" placeholder="Cousin" value={this.state.patient_emergency_contact_relationship} onChange={this.handleChange} />
                     </div>
                </div>
                    <br/>
                    <br/>
                    <input type="submit" className="btn btn-primary" value="Next >>" onClick={e => this.handleNext(e)} />
                    <br/>
                    <br/>
                    </form>
                </main>
            
            </div>
            );
    }
}

export default EmergencyContact;
