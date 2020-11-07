import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class EmergencyContact extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            patient: {},
            errors: {}
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
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
    
    handleValidation(e) {
      const inputTarget = e.target;
      const errors = this.state.errors;
      const key = inputTarget.name;
      
      switch (key) {
          case 'patient_reason_for_visit':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 150) {
              errors[key] = "Maximum length of 150 characters.";
          } else if (errors[key] && inputTarget.value !== '' && inputTarget.value.length <= 150) {
              delete errors[key];
          }
          this.setState({errors});
          break;
        case 'patient_emergency_contact_name':
          // code
          if(inputTarget.value === '') {
            errors[key] = "Field is required.";
          } else if (inputTarget.value !== '' && inputTarget.value.length > 64) {
              errors[key] = "Maximum length of 32 characters.";
          } else if (errors[key] && inputTarget.value !== '' && inputTarget.value.length <= 64) {
              delete errors[key];
          }
          this.setState({errors});
          break;
        case 'patient_emergency_contact_relationship':
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
        case 'patient_emergency_contact_number':
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
        case 'insurance_company_name':
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
        case 'insurance_contact_number':
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
        case 'insurance_group_number':
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
        case 'insurance_plan_name':
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
            // pathname: '/medical-history',
            pathname: '/review-page',
            state: this.state
        });
    }
    
    render () {
        
        let errors = Object.keys(this.state.errors).length > 0;
        
        return (
            <div>
            <header>
                <nav className="fixed-top" aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><Link to="/emergency-contact">Emergency Contact & Insurance</Link></li>
                  </ol>
                </nav>
            </header>
            <main role="main" className="container" style={{paddingTop: 70+'px'}}>
                <h1>Emergency Contact & Insurance Information</h1>
                <hr />
                <br/>
                <form>
                
                <h3>Reason For Visit</h3>
                {/*<div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label>Reason for visit</label>
                        <textarea className="form-control" rows="3" 
                        name="patient_reason_for_visit"
                        value={this.state.patient_reason_for_visit}
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                        />
                        {this.state.errors.patient_reason_for_visit && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.patient_reason_for_visit}
                          </div>}
                    </div>
                </div>*/}
                <br/>
                
                <h3>Emergency Contact Information</h3>
                <p className="instructions">Please provide the information of the person whom we should contact in case of an emergency.</p>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Emergency Contact Name:
                         </label>
                         <input type="text" className="form-control"
                         name="patient_emergency_contact_name"
                         placeholder="Name"
                         value={this.state.patient_emergency_contact_name}
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.patient_emergency_contact_name && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.patient_emergency_contact_name}
                          </div>}
                     </div>
                     <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Emergency Contact Number:
                         </label>
                         <input type="tel" className="form-control" 
                         name="patient_emergency_contact_number"
                         placeholder="1234567890"
                         value={this.state.patient_emergency_contact_number}
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.patient_emergency_contact_number && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.patient_emergency_contact_number}
                          </div>}
                     </div>
                     <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Emergency Contact Relationship:
                         </label>
                         <input type="text" className="form-control"
                         name="patient_emergency_contact_relationship"
                         placeholder="Cousin"
                         value={this.state.patient_emergency_contact_relationship}
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.patient_emergency_contact_relationship && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.patient_emergency_contact_relationship}
                          </div>}
                     </div>
                </div>
                <br/>
                
                <h3>Insurance Information</h3>
                <p className="instructions">Please enter the information on your insruance card that corresponds to the fields below.</p>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Insurance Company Name:
                         </label>
                         <input type="text" className="form-control"
                         name="insurance_company_name" 
                         placeholder="Name"
                         value={this.state.insurance_company_name}
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.insurance_company_name && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.insurance_company_name}
                          </div>}
                     </div>
                     <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Insurance Contact Number:
                         </label>
                         <input type="tel" className="form-control"
                         name="insurance_contact_number"
                         placeholder="1234567890"
                         value={this.state.insurance_contact_number}
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.insurance_contact_number && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.insurance_contact_number}
                          </div>}
                     </div>
                      <div className="col-md-6 mb-3">
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
                    </div>
                     <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Insurance Plan Name:
                         </label>
                         <input type="tel" className="form-control" 
                         name="insurance_plan_name" 
                         placeholder="Plan/Policy Name" 
                         value={this.state.insurance_plan_name} 
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.insurance_plan_name && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.insurance_plan_name}
                          </div>}
                     </div>
                     <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Insurance Group Number:
                         </label>
                         <input type="text" className="form-control" 
                         name="insurance_group_number" 
                         placeholder="Group#" 
                         value={this.state.insurance_group_number} 
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.insurance_group_number && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.insurance_group_number}
                          </div>}
                     </div>
                </div>
                    <br/>
                    <br/>
                    <input type="submit" 
                    className="btn btn-primary"
                    disabled={errors}
                    value="Next &#x2192;" onClick={e => this.handleNext(e)} />
                    <br/>
                    <br/>
                    </form>
                </main>
            
            </div>
            );
    }
}

export default EmergencyContact;
