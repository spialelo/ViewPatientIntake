import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class MedicalHistory extends React.Component {
    
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
        // temporarily commented out for testing
        // const prevState = this.props ? this.props.location.state : Object.assign({});
        // Object.keys(prevState).forEach((key) => {
        //     if(Object.keys(prevState[key])) {
        //         this.setState({[key]: Object.assign({}, prevState[key])});
        //     }
        //     this.setState({[key]: prevState[key]});
        // });
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
        
        let errors = Object.keys(this.state.errors).length > 0;
        
        // checkboxes and different type of validation will be needed
        
        return (
            <div>
            <header>
                <nav className="fixed-top" aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><Link to="/medical-history">Medical History</Link></li>
                  </ol>
                </nav>
            </header>
            <main role="main" className="container" style={{paddingTop: 70+'px'}}>
                <h1>Medical History</h1>
                <hr />
                <br/>
                <form>
            
                <h3>Patient Medical History</h3>
                <div className="form-row">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="patient_drinker" name="patient_drinker" />
                      <label className="form-check-label" htmlFor="patient_drinker">Alcohol Drinker</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_smoker" />
                      <label className="form-check-label">Smoker</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_currently_pregnant" />
                      <label className="form-check-label">Currently Pregnant</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_diabetes" />
                      <label className="form-check-label">Diabetes (Type I / II)</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_cancer" />
                      <label className="form-check-label">Cancer</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_metal_implants" />
                      <label className="form-check-label">Metal implants</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_pacemaker" />
                      <label className="form-check-label">Pacemaker</label>
                    </div>
                </div>
                <br/>
                <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label>Reason for visit</label>
                        <textarea className="form-control" rows="3" name="patient_allergies"></textarea>
                    </div>
                </div>
                <br/>
                
                <h3>Family Medical History</h3>
                <div className="form-row">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_cancer" />
                      <label className="form-check-label">Cancer</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_diabetes" />
                      <label className="form-check-label">Diabetes (Type I /II)</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_heart_conditions" />
                      <label className="form-check-label">Heart Conditions/Disease</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_bleeding_disorder" />
                      <label className="form-check-label">Blood Disorder (e.g. Hemophilia, Clotting)</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_stroke" />
                      <label className="form-check-label">Stroke</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_sickle_cell_disease" />
                      <label className="form-check-label">Sickle Cell Disease</label>
                    </div>
                </div>
                    <br/>
                    <br/>
                    <input type="submit" 
                    className="btn btn-primary"
                    disabled={errors}
                    value="Next >>" onClick={e => this.handleNext(e)} />
                    <br/>
                    <br/>
                    </form>
                </main>
            
            </div>
            );
    }
}



export default MedicalHistory;