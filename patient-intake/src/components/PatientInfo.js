import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Footer from './Footer';

class PatientInfo extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            patient: {
                patient_first_name: '',
                patient_last_name: '',
                patient_middle_name: '',
                patient_emailid: '',
                patient_contact_number: '',
                patient_sex: '',
                patient_ssn: '',
                patient_dob: '',
                patient_address_line_1: '',
                patient_address_line_2: '',
                patient_address_city: '',
                patient_address_state: '',
                patient_zip_code: '',
                patient_insurance_id: ''
            },
            errors: {},
            buttonEnabled: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    
    handleChange(e) {
        const patient = Object.assign({}, this.state.patient);
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        patient[name] = value;
        this.setState({patient});
    }
    
    handleValidation(e) {
      const inputTarget = e.target;
      const errors = this.state.errors;
      const key = inputTarget.name;
      
      switch (key) {
        case 'patient_first_name':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 32) {
              errors[key] = "Maximum length of 32 characters.";
          } else if (errors[key] && inputTarget.value !== '' && inputTarget.value.length <= 32) {
              delete errors[key];
          }
          this.setState({errors});
          break;
        case 'patient_middle_name':
          // code
          if (inputTarget.value !== '' && inputTarget.value.length > 32) {
              errors[key] = "Maximum length of 32 characters.";
          } else if (errors[key] && (inputTarget.value === '' || inputTarget.value.length <= 32)) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_last_name':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 32) {
              errors[key] = "Maximum length of 32 characters.";
          } else if (errors[key] && inputTarget.value !== '' && inputTarget.value.length <= 32) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        
        default:
          // code
      }
      
    }

    handleNext(e) {
        e.preventDefault();
        const patientFile = this.state.patient;
        // Change input submit to Link and style like button
        // Pass this component's state onto the next component/fields for user to fill in
        this.props.history.push({ 
            pathname: '/emergency-contact',
            state: this.state
        });
    }
    
    render() {
        return(
          <div>
          <header>
            <nav className="fixed-top" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><Link to="/patient-info">Patient Information</Link></li>
              </ol>
            </nav>
            </header>
            <main role="main" className="container" style={{paddingTop: 70+'px'}}>
                <h1 data-testid="patient-info">Patient Information</h1>
                <form>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          First Name:
                          </label>
                          <input
                            type="text" 
                            className="form-control" 
                            name="patient_first_name" 
                            placeholder="First Name" 
                            value={this.state.patient_first_name} 
                            onChange={this.handleChange} 
                            onBlur={this.handleValidation}
                            required/>
                            {this.state.errors.patient_first_name && 
                            <div className="invalid-feedback" style={{display: 'block'}}>
                              {this.state.errors.patient_first_name}
                            </div>}
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Middle Name/Initial (optional):
                          </label>
                          <input type="text" className="form-control" name="patient_middle_name" placeholder="Middle Name" 
                          value={this.state.patient_middle_name} 
                          onChange={this.handleChange} 
                          onBlur={this.handleValidation}/>
                          {this.state.errors.patient_middle_name && 
                            <div className="invalid-feedback" style={{display: 'block'}}>
                              {this.state.errors.patient_middle_name}
                            </div>}
                    </div>
                    
                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Last Name:
                          </label>
                          <input type="text" className="form-control" name="patient_last_name" placeholder="Last Name" 
                          value={this.state.patient_last_name} 
                          onChange={this.handleChange} 
                          onBlur={this.handleValidation}
                          required/>
                          {this.state.errors.patient_last_name && 
                            <div className="invalid-feedback" style={{display: 'block'}}>
                              {this.state.errors.patient_last_name}
                            </div>}
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="col-md-3 mb-3">
                      <label>Phone Number</label>
                      <input type="tel" className="form-control" name="patient_contact_number" placeholder="Phone Number" value={this.state.patient_contact_number} onChange={this.handleChange} />
                    </div>
                     <div className="col-md-4 mb-3">
                        <label>
                          Email Address:
                         </label>
                         <input type="email" className="form-control" name="patient_emailid" placeholder="me@example.com" value={this.state.patient_emailid} onChange={this.handleChange} />
                     </div>
                    <div className="col-md-4 mb-3">
                      <label>Sex</label>
                      <input type="text" className="form-control" name="patient_sex" placeholder="Sex" value={this.state.patient_sex} onChange={this.handleChange} />
                    </div>
                </div>
                
                
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label>SSN</label>
                      <input type="text" className="form-control" name="patient_ssn" placeholder="SSN" value={this.state.patient_ssn} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label>Date of Birth</label>
                      <input type="date" className="form-control" name="patient_dob" placeholder="YYYY-MM-DD" value={this.state.patient_dob} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Insurance ID#</label>
                      <input type="text" className="form-control" name="patient_insurance_id" placeholder="Insurance ID#" value={this.state.patient_insurance_id} onChange={this.handleChange} />
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label>Address Line 1</label>
                      <input type="text" className="form-control" name="patient_address_line_1" placeholder="Address" value={this.state.patient_address_line_1} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Address Line 2</label>
                      <input type="text" className="form-control" name="patient_address_line_2" placeholder="Building/Apt/Suite" value={this.state.patient_address_line_2} onChange={this.handleChange} />
                    </div>
                  </div>
                
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label>City</label>
                      <input type="text" className="form-control" name="patient_address_city" placeholder="City" value={this.state.patient_address_city} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label>State</label>
                      <input type="text" className="form-control" name="patient_address_state" placeholder="State" value={this.state.patient_address_state} onChange={this.handleChange} />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label>Zip</label>
                      <input type="text" className="form-control" name="patient_zip_code" placeholder="Zip" value={this.state.patient_zip_code} onChange={this.handleChange} />
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


// PatientInfo.propTypes = {
//     label: PropTypes.string.isRequired,
//     link: PropTypes.string.isRequired,
// };

export default PatientInfo;
