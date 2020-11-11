import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

class ReviewPage extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            patient: {},
            checkInComplete: false
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
    handleSubmit(e) {
        e.preventDefault();
        const patientFile = this.state.patient;
        
        let prepData = {};
        prepData.Data = this.state.patient;
        
        // Private info/keys isn .env for safekeeping and added to .gitignore
        prepData.Token = process.env.REACT_APP_GROUP5_TOKEN;
        // prepData.Type = process.env.REACT_APP_TYPE_SPIE; // Only patient information
        prepData.Type = process.env.REACT_APP_TYPE_SPPIMHFHIE; //All field in one post

        
        const jsonPrepData = JSON.stringify(prepData);
        const proxy = 'https://cors-anywhere.herokuapp.com/'; // Address CORS Access-Control-Allow-Origin issue
        // const url = process.env.REACT_APP_API_PATH;
        const url = 'https://web.njit.edu/~as2757/ControlPatientIntake/api.php';
        const proxyPlusURL = proxy+url

        axios({
          method: 'post',
          url: proxyPlusURL,
          headers: { 
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'x-requested-with, x-requested-by'
          },
          crossdomain: true,
          data: prepData
        })
          .then(res => {
            console.log("---> response.data");
            console.log(res.data);
            if(res.status === 200) {
              
              this.setState({
                  checkInComplete: true,
                  returnedFullRes: res,
                  resStatus: res.status
                }, () => {
                    this.props.history.push({ 
                      pathname: '/thank-you',
                      state: this.state
                  });
                });
            }
          })
          .catch(error => this.setState({ error: error.message }));
    }

    
    render () {
        
        let currState =  Object.keys(this.state.patient).length > 1 ?  this.state.patient : undefined;
        
        if (currState === undefined) {
          return <h3>Loading</h3>;
        }
        
        let patientName = currState.patient_first_name + ' ' + (currState.patient_middle_name ? currState.patient_middle_name + ' ' : '') + currState.patient_last_name;
        
        return (
          <div>
          <header>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><Link to="/review-page">Review Information</Link></li>
              </ol>
            </nav>
            </header>
          <main role="main" className="container" style={{paddingTop: 70+'px'}}>
          <h1>Final Review</h1>
          <hr />
          <br/>
          <p className="instructions">Please review the info you have entered, prior to submitting. If any errors are noticed after submission, please reach out to the medical staff or update it in your Patient Portal after you create an account.</p>
          <b/>
          <form>
          <fieldset disabled>
            <h3>Patient Information</h3>
              <div className="form-group row">
                <label htmlFor="staticName" className="col-sm-2 col-form-label">Patient's Name: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticName" value={ currState.patient_first_name ? patientName : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticEmail" value={currState.patient_emailid ? currState.patient_emailid : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
              <label htmlFor="staticPhone" className="col-sm-2 col-form-label">Phone Number: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticPhone" value={currState.patient_contact_number ?  currState.patient_contact_number : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticSSN" className="col-sm-2 col-form-label">Social Security Number(SSN): </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticSSN" value={currState.patient_ssn ? currState.patient_ssn : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticDOB" className="col-sm-2 col-form-label">Date of Birth (DOB): </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticDOB" value={currState.patient_dob ? currState.patient_dob : 'N/A'} />
                </div>
              </div>
              <hr />
                <br/>
              <div className="form-group row">
                <label htmlFor="staticAddr1" className="col-sm-2 col-form-label">Address Line 1: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticAddr1" value={currState.patient_address_line_1 ? currState.patient_address_line_1 : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticAddr2" className="col-sm-2 col-form-label">Address Line 2: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticAddr2" value={currState.patient_address_line_2 ? currState.patient_address_line_2 : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticCity" className="col-sm-2 col-form-label">City: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticCity" value={currState.patient_address_city ? currState.patient_address_city : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticState" className="col-sm-2 col-form-label">State: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticState" value={currState.patient_address_state ? currState.patient_address_state : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticZip" className="col-sm-2 col-form-label">Zip Code: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticZip" value={currState.patient_zip_code ? currState.patient_zip_code : 'N/A'} />
                </div>
              </div>
                <br/>
                
              <h3>Reason For Visit</h3>
              <br/>
                <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label className="col-sm-2 col-form-label">Reason for visit</label>
                        <textarea className="form-control" rows="3"
                        readOnly
                        value={currState.patient_reason_for_visit ? currState.patient_reason_for_visit : 'N/A'}
                        />
                    </div>
                </div>
                <br/>
                
              <h3>Emergency Contact Information</h3>  
                <br/>
              <div className="form-group row">
                <label htmlFor="staticEmergCont" className="col-sm-2 col-form-label">Emergency Contact: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticEmergCont" value={currState.patient_emergency_contact_name ? currState.patient_emergency_contact_name : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmergContRel" className="col-sm-2 col-form-label">Emergency Contact Relationship: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticEmergContRel" value={currState.patient_emergency_contact_relationship ? currState.patient_emergency_contact_relationship : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmergContNum" className="col-sm-2 col-form-label">Emergency Contact Number: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticEmergContNum" value={currState.patient_emergency_contact_number ? currState.patient_emergency_contact_number : 'N/A'} />
                </div>
              </div>
              
              <br/>
               <h3>Insurance Information</h3>  
              <br/>
              <div className="form-group row">
                <label htmlFor="staticEmergCont" className="col-sm-2 col-form-label">Emergency Contact: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticEmergCont" value={currState.insurance_company_name ? currState.insurance_company_name : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmergContRel" className="col-sm-2 col-form-label">Emergency Contact Relationship: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticEmergContRel" value={currState.insurance_contact_number ? currState.insurance_contact_number : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticInsurID" className="col-sm-2 col-form-label">Insureance ID Number: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticInsurID" value={currState.patient_insurance_id ? currState.patient_insurance_id : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmergContNum" className="col-sm-2 col-form-label">Emergency Contact Number: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticEmergContNum" value={currState.insurance_plan_name ? currState.insurance_plan_name : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticInsurID" className="col-sm-2 col-form-label">Insureance ID Number: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticInsurID" value={currState.insurance_group_number ? currState.insurance_group_number : 'N/A'} />
                </div>
              </div>
              
              
              <h3>Medical History</h3>  
              <div className="form-group row">
                <label htmlFor="staticInsurID" className="col-sm-2 col-form-label">Insureance ID Number: </label>
                <div className="col-sm-10">
                  <p>Create method to iterate of over the boolean values and printing the ones that are true in a string list.</p>
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmergCont" className="col-sm-2 col-form-label">Emergency Contact: </label>
                <div className="col-sm-10">
                  <p>Create method to iterate of over the boolean values and printing the ones that are true in a string list.</p>
                </div>
              </div>
              

               <h3>Signed Consent Form</h3> 
              {/*<div className="form-group row">
                <label htmlFor="staticInsurID" className="col-sm-2 col-form-label">Insureance ID Number: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticInsurID" value={currState.hipaa_signature ? currState.hipaa_signature : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmergCont" className="col-sm-2 col-form-label">Emergency Contact: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control" id="staticEmergCont" value={currState.hipaa_sign_date ? currState.hipaa_sign_date : 'N/A'} />
                </div>
              </div>*/}
              
              
              </fieldset>
              <br/>
              <div className="col-sm-10">
                    <input type="submit" className="btn btn-primary" value="Submit 	&#x21EA;" onClick={e => this.handleSubmit(e)} />
                </div>
            </form>
            </main>
            </div>
            );
    }
}

export default ReviewPage;
