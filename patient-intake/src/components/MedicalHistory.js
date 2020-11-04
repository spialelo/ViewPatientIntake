import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class MedicalHistory extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            patient: {
              patient_drinker: false,
              patient_currently_pregnant: false,
              patient_diabetes: false,
              patient_drinker: false,
              patient_metal_implants: false,
              patient_pacemaker: false,
              patient_smoker: false,
              family_bleeding_disorder: false,
              family_cancer: false,
              family_diabetes: false,
              family_heart_conditions: false,
              family_sickle_cell_disease: false,
              family_stroke: false
              
            },
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
                      <input className="form-check-input" type="checkbox" id="patient_drinker" name="patient_drinker" onChange={this.handleChange} />
                      <label className="form-check-label" htmlFor="patient_drinker">Alcohol Drinker</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_smoker" onChange={this.handleChange} />
                      <label className="form-check-label">Smoker</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_currently_pregnant" onChange={this.handleChange} />
                      <label className="form-check-label">Currently Pregnant</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_diabetes" onChange={this.handleChange} />
                      <label className="form-check-label">Diabetes (Type I / II)</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_cancer" onChange={this.handleChange} />
                      <label className="form-check-label">Cancer</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_metal_implants" onChange={this.handleChange} />
                      <label className="form-check-label">Metal implants</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="patient_pacemaker" onChange={this.handleChange} />
                      <label className="form-check-label">Pacemaker</label>
                    </div>
                </div>
                <br/>
                <br/>
                <hr />
                <br/>
                <br/>
                
                <h3>Family Medical History</h3>
                <div className="form-row">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_cancer" onChange={this.handleChange} />
                      <label className="form-check-label">Cancer</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_diabetes" onChange={this.handleChange} />
                      <label className="form-check-label">Diabetes (Type I /II)</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_heart_conditions" onChange={this.handleChange} />
                      <label className="form-check-label">Heart Conditions/Disease</label>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_bleeding_disorder" onChange={this.handleChange} />
                      <label className="form-check-label">Blood Disorder (e.g. Hemophilia, Clotting)</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_stroke" onChange={this.handleChange} />
                      <label className="form-check-label">Stroke</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="family_sickle_cell_disease" onChange={this.handleChange} />
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