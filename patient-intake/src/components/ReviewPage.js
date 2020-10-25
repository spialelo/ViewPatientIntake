import React from 'react';
import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';


class ReviewPage extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            patient: '',
            checkInComplete: false
            
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    componentDidMount() {
        // console.log(this.props);
        const prevState = this.props ? this.props.location.state : Object.assign({});
        this.setState({patient: Object.assign({}, prevState.patient)});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const patientFile = this.state.patient;
        
        let prepData = {};
        prepData.data = this.state.patient;
        prepData.token = ''; // needs to be put in an .env file or auth file- hide from public
        prepData.type = 'SPIE';
        
        
        
        const jsonPrepData = JSON.stringify(prepData);
        // Change input submit to Link and style like button
        // Pass this component's state onto the next component/fields for user to fill in
        console.log(jsonPrepData);
        this.props.history.push({ 
            pathname: '/',
            state: this.state
        });
        

      axios({
        method: 'post',
        url: "https://web.njit.edu/~as2757/ControlPatientIntake/api.php",
        headers: { 'content-type': 'application/json' },
        data: jsonPrepData
      })
        .then(result => {
          this.setState({
            checkInComplete: true
          })
        })
        .catch(error => this.setState({ error: error.message }));
        // Organize compiled data in a data structure that our API is looking for
        
        // successful status completion; if checkInComplete, navigate to "Check-in Complete" page
        // update state with checkInComplete: true / false

    }
    
    
    render () {
        let currState = this.state.patient
        let patientName = currState.patient_first_name + ' ' + (currState.patient_middle_name ? currState.patient_middle_name + ' ' : '') + currState.patient_last_name;
        
        return (
            
            <form>
            <h4>Final Review Page of Patient Information</h4>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Patient's Name: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticName" value={ currState.patient_first_name ? patientName : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Email: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticEmail" value={currState.patient_emailid ? currState.patient_emailid : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
              <label for="staticEmail" className="col-sm-2 col-form-label">Phone Number: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticPhone" value={currState.patient_contact_number ?  currState.patient_contact_number : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Social Security Number(SSN): </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticSSN" value={currState.patient_ssn ? currState.patient_ssn : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Date of Birth (DOB): </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticDOB" value={currState.patient_dob ? currState.patient_dob : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Address Line 1: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticAddr1" value={currState.patient_address_line_1 ? currState.patient_address_line_1 : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Address Line 2: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticAddr2" value={currState.patient_address_line_2 ? currState.patient_address_line_2 : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">City: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticCity" value={currState.patient_address_city ? currState.patient_address_city : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">State: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticState" value={currState.patient_address_state ? currState.patient_address_state : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Zip Code: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticZip" value={currState.patient_zip_code ? currState.patient_zip_code : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Insureance ID Number: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticInsurID" value={currState.patient_insurance_id ? currState.patient_insurance_id : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Emergency Contact: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticEmergCont" value={currState.patient_emergency_contact_name ? currState.patient_emergency_contact_name : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Emergency Contact Relationship: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticEmergContRel" value={currState.patient_emergency_contact_relationship ? currState.patient_emergency_contact_relationship : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label for="staticEmail" className="col-sm-2 col-form-label">Emergency Contact Number: </label>
                <div className="col-sm-10">
                  <input type="text" readonly className="form-control-plaintext" id="staticEmergContNum" value={currState.patient_emergency_contact_number ? currState.patient_emergency_contact_number : 'N/A'} />
                </div>
              </div>
              <br/>
              <div className="col-sm-10">
                    <input type="submit" className="btn btn-primary" value="Submit" onClick={e => this.handleSubmit(e)} />
                </div>
            </form>
            );
    }
    
    
}


export default ReviewPage;