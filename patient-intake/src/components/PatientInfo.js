import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class PatientInfo extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            patient: {
                fname: '',
                lname: '',
                midname: '',
                email: ''
            }
            // additional fields will be added: DOB, physical address
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleNext = this.handleNext.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
    
    
    // Keep this to replace or use some of axios code later; delete later?
    handleFormSubmit = e => {
      e.preventDefault();
      axios({
        method: 'post',
        // url: {process.env.REACT_APP_API_PATH},
        headers: { 'content-type': 'application/json' },
        data: this.state
      })
        .then(result => {
          this.setState({
            mailSent: result.data.sent
          })
        })
        .catch(error => this.setState({ error: error.message }));
    };
    
    
    render() {
        return(
            <div>
                <h1>PatientInfo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      First Name:
                      <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                      Middle Name/Initial (optional):
                      <input type="text" name="midname" value={this.state.midname} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                      Last Name:
                      <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                      Email Address:
                      <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Next >>" onClick={e => this.handleNext(e)} />
                  </form>
            </div>
            );
    }
}


PatientInfo.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default withRouter(PatientInfo);

