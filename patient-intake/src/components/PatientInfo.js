import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class PatientInfo extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            patient: {
              patient_middle_name: '',
              patient_emailid: '',
              patient_address_line_2: ''
            },
            errors: {},
            buttonDisaabled: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    
    componentDidMount() {
      const { buttonDisaabled } = this.state;
      let newButtonState = (Object.keys(this.state.patient).length < 1 || Object.keys(this.state.errors).length > 0);
      
      this.setState({buttonDisaabled: newButtonState});
      
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
          case 'patient_emailid':
          // code
          const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
          if ((inputTarget.value !== '' && pattern.test(inputTarget.value) === false) || inputTarget.value.length > 64) {
                errors[key] = "Not a valid email."
            
          } else if (errors[key] && inputTarget.value !== '' && inputTarget.value.length <= 64 &&  (pattern.test(inputTarget.value) === true)) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_contact_number':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 10) {
              errors[key] = "Maximum length of 10 characters.";
          } else if (errors[key] && inputTarget.value !== '' && inputTarget.value.length <= 10) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_sex':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (errors[key] && inputTarget.value !== '') {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_ssn':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 9) {
              errors[key] = "Maximum length of 9 characters.";
          } else if (errors[key] && inputTarget.value !== '' && inputTarget.value.length <= 9) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_dob':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (errors[key] && inputTarget.value !== '') {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_insurance_id':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 9) {
              errors[key] = "Maximum length of 9 characters.";
          } else if (errors[key] && inputTarget.value !== '' && inputTarget.value.length <= 9) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_address_line_1':
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
        case 'patient_address_line_2':
          // code
          if (inputTarget.value !== '' && inputTarget.value.length > 32) {
              errors[key] = "Maximum length of 32 characters.";
          } else if (errors[key] && (inputTarget.value === '' || inputTarget.value.length <= 32)) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_address_city':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 32) {
              errors[key] = "Maximum length of 32 characters.";
          } else if (errors[key] && (inputTarget.value === '' || inputTarget.value.length <= 32)) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_address_state':
          // code
          if (inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 16) {
              errors[key] = "Maximum length of 16 characters.";
          } else if (errors[key] && (inputTarget.value === '' || inputTarget.value.length <= 16)) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        case 'patient_zip_code':
          // code
          if (inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 5) {
              errors[key] = "Maximum length of 5 characters.";
          } else if (errors[key] && (inputTarget.value === '' || inputTarget.value.length <= 5)) {
              delete errors[key];
          }
          
          this.setState({errors});
          break;
        default:
          // code
      }
      
      const { buttonDisaabled } = this.state;
      let newButtonState = (Object.keys(this.state.patient).length < 1 || Object.keys(this.state.errors).length > 0);
      
      this.setState({buttonDisaabled: newButtonState});
      
    }

    handleNext(e) {
        e.preventDefault();
        const patientFile = this.state.patient;
        // Pass this component's state onto the next component/fields for user to fill in
        this.props.history.push({ 
            pathname: '/emergency-contact',
            state: this.state
        });
    }
    
    render() {
      
      let errors = Object.keys(this.state.errors).length > 0;
      let { buttonDisaabled } = this.state;
      
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
                <hr />
                <br/>
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
                          Middle Name/Initial <span className="text-muted">(optional)</span>:
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
                      <input type="tel" className="form-control" name="patient_contact_number" placeholder="Phone Number" 
                      value={this.state.patient_contact_number} 
                      onChange={this.handleChange}
                      onBlur={this.handleValidation}
                      required />
                       {this.state.errors.patient_contact_number && 
                        <div className="invalid-feedback" style={{display: 'block'}}>
                          {this.state.errors.patient_contact_number}
                        </div>}
                    </div>
                     <div className="col-md-4 mb-3">
                        <label>
                          Email Address:
                         </label>
                         <input type="email" className="form-control" name="patient_emailid" placeholder="me@example.com" 
                         value={this.state.patient_emailid} 
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.patient_emailid && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.patient_emailid}
                          </div>}
                     </div>
                    <div className="col-md-4 mb-3">
                      <label>Birth Gender</label>
                      <select className="custom-select" name="patient_sex"
                      value={this.state.patient_sex}
                      onChange={this.handleChange}
                      onBlur={this.handleValidation}
                      required>
                        <option value="" defaultValue>Select birth gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                      </select>
                      {this.state.errors.patient_sex && 
                      <div className="invalid-feedback" style={{display: 'block'}}>
                        {this.state.errors.patient_sex}
                      </div>}
                    </div>
                </div>
                
                
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label>Social Security Number (SSN#)</label>
                      <input type="text" className="form-control" name="patient_ssn" placeholder="SSN" 
                      value={this.state.patient_ssn}
                      onChange={this.handleChange} 
                      onBlur={this.handleValidation}
                      required />
                     {this.state.errors.patient_ssn && 
                      <div className="invalid-feedback" style={{display: 'block'}}>
                        {this.state.errors.patient_ssn}
                      </div>}
                    </div>
                    <div className="col-md-3 mb-3">
                      <label>Date of Birth</label>
                      <input type="date" className="form-control" name="patient_dob" placeholder="YYYY-MM-DD"
                      value={this.state.patient_dob}
                      onChange={this.handleChange}
                      onBlur={this.handleValidation}
                      required />
                     {this.state.errors.patient_dob && 
                      <div className="invalid-feedback" style={{display: 'block'}}>
                        {this.state.errors.patient_dob}
                      </div>}
                    </div>
                    
                    {/*<div className="col-md-6 mb-3">
                      <label>Insurance ID#</label>
                      <input type="text" className="form-control" name="patient_insurance_id" 
                      placeholder="Insurance ID#" 
                      value={this.state.patient_insurance_id} 
                      onChange={this.handleChange}
                      onBlur={this.handleValidation}
                      required />
                      {this.state.errors.patient_insurance_id && 
                      <div className="invalid-feedback" style={{display: 'block'}}>
                        {this.state.errors.patient_insurance_id}
                      </div>}
                    </div>*/}
                    
                </div>
                
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label>Address Line 1</label>
                      <input type="text" className="form-control" name="patient_address_line_1" placeholder="Address" 
                      value={this.state.patient_address_line_1} 
                      onChange={this.handleChange}
                      onBlur={this.handleValidation}
                      required/>
                      {this.state.errors.patient_address_line_1 && 
                        <div className="invalid-feedback" style={{display: 'block'}}>
                          {this.state.errors.patient_address_line_1}
                        </div>}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Address Line 2</label>
                      <input type="text" className="form-control" name="patient_address_line_2" placeholder="Building/Apt/Suite" 
                      value={this.state.patient_address_line_2} 
                      onChange={this.handleChange}
                      onBlur={this.handleValidation} />
                      {this.state.errors.patient_address_line_2 && 
                        <div className="invalid-feedback" style={{display: 'block'}}>
                          {this.state.errors.patient_address_line_2}
                        </div>}
                    </div>
                  </div>
                
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                      <label>City</label>
                      <input type="text" className="form-control" name="patient_address_city" placeholder="City"
                      value={this.state.patient_address_city}
                      onChange={this.handleChange}
                      onBlur={this.handleValidation}
                      required/>
                      {this.state.errors.patient_address_city && 
                        <div className="invalid-feedback" style={{display: 'block'}}>
                          {this.state.errors.patient_address_city}
                        </div>}
                    </div>
                    <div className="col-md-3 mb-3">
                      <label>State</label>
                      <select className="custom-select" name="patient_address_state" id="state"
                      value={this.state.patient_address_state}
                      onChange={this.handleChange}
                      onBlur={this.handleValidation}
                      required>
                        <option value="" defaultValue>Select a State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                      </select>
                      {this.state.errors.patient_address_state && 
                        <div className="invalid-feedback" style={{display: 'block'}}>
                          {this.state.errors.patient_address_state}
                        </div>}
                        </div>
                    <div className="col-md-3 mb-3">
                      <label>Zip</label>
                      <input type="text" className="form-control" name="patient_zip_code" placeholder="Zip"
                      value={this.state.patient_zip_code}
                      onChange={this.handleChange}
                      onBlur={this.handleValidation}
                      required/>
                      {this.state.errors.patient_zip_code && 
                        <div className="invalid-feedback" style={{display: 'block'}}>
                          {this.state.errors.patient_zip_code}
                        </div>}
                    </div>
                  </div>
                    <br/>
                    <br/>
                    <input type="submit"
                    disabled={buttonDisaabled}
                    className="btn btn-primary"
                    value="Next &#x2192;" onClick={e => this.handleNext(e)} />
                    <br/>
                    <br/>
                    </form>
                </main>
            </div>
            );
    }
}

export default PatientInfo;
