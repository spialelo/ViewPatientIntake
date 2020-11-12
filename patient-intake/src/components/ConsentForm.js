import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ConsentForm extends React.Component {
    
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
        default:
          // code
      }
      
    }

    handleNext(e) {
        e.preventDefault();
        const patientFile = this.state.patient;
        // Pass this component's state onto the next component/fields for user to fill in
        this.props.history.push({ 
            pathname: '/medical-history',
            // pathname: '/review-page',
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
                    <li className="breadcrumb-item"><Link to="/emergency-contact">Patient Consent Forms</Link></li>
                  </ol>
                </nav>
            </header>
            <main role="main" className="container" style={{paddingTop: 70+'px'}}>
                <h1>Patient Consent</h1>
                <hr />
                <br/>
                <form>
                
                <h3>Reason For Visit</h3>
                <p className="instructions">Please enter the reason for your visit today.</p>
                <div className="form-row">
                    <p></p>
                </div>
                <br/>
                <p className="instructions">I have received a copy of the Notice of Privacy Practice and Financial Policy Notice</p>
                <div className="form-row">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_cancer" onChange={this.handleChange} />
                      <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_cancer" onChange={this.handleChange} />
                      <label className="form-check-label">No</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label className="col-form-label">
                          Insurance Company Name:
                         </label>
                         <input type="text" className="form-control"
                         name="consent_initial" 
                         placeholder="Name"
                         value={this.state.consent_initial}
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.consent_initial && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.consent_initial}
                          </div>}
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className="col-form-label">
                          Patient or Authorized Person’s Signature
                         </label>
                         <input type="text" className="form-control"
                         name="consent_signature" 
                         placeholder="Name"
                         value={this.state.consent_signature}
                         onChange={this.handleChange}
                         onBlur={this.handleValidation}
                         />
                         {this.state.errors.consent_signature && 
                          <div className="invalid-feedback" style={{display: 'block'}}>
                            {this.state.errors.consent_signature}
                          </div>}
                     </div>
                     <div className="col-md-3 mb-3">
                      <label>Date</label>
                      <input type="date" className="form-control" name="consent_date" placeholder="YYYY-MM-DD"
                      value={this.state.consent_date}
                      onChange={this.handleChange}
                      onBlur={this.handleValidation}
                      required />
                     {this.state.errors.consent_date && 
                      <div className="invalid-feedback" style={{display: 'block'}}>
                        {this.state.errors.consent_date}
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

export default ConsentForm;
