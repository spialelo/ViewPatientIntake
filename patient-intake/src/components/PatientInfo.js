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
                email: '',
                city: '',
                state: '',
                zip: ''
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
            <form onSubmit={this.handleSubmit}>
            <div>
                <h1>Patient Information</h1>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          First Name:
                          </label>
                          <input type="text" className="form-control" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Middle Name/Initial (optional):
                          </label>
                          <input type="text" className="form-control" name="midname" placeholder="Middle Name" value={this.state.midname} onChange={this.handleChange} />
                    </div>
                    
                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Last Name:
                          </label>
                          <input type="text" className="form-control" name="lname" placeholder="Last Name" value={this.state.lname} onChange={this.handleChange} />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label>City</label>
                      <input type="text" className="form-control" name="city" placeholder="City" value={this.state.city} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label>State</label>
                      <input type="text" className="form-control" name="state" placeholder="State" value={this.state.state} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label>Zip</label>
                      <input type="text" className="form-control" name="zip" placeholder="Zip" value={this.state.zip} onChange={this.handleChange} />
                    </div>
                  </div>
                
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Email Address:
                         </label>
                         <input type="text" className="form-control" name="email" placeholder="me@example.com" value={this.state.email} onChange={this.handleChange} />
                     </div>
                </div>
                    <br/>
                    <br/>

                    <input type="submit" className="btn btn-primary" value="Next >>" onClick={e => this.handleNext(e)} />

                </div>
            </form>
            );
    }
}


PatientInfo.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default withRouter(PatientInfo);

