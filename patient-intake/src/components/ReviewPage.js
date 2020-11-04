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
        prepData.Type = process.env.REACT_APP_TYPE;
        
        const jsonPrepData = JSON.stringify(prepData);
        const proxy = 'https://cors-anywhere.herokuapp.com/'; // Address CORS Access-Control-Allow-Origin issue
        const url = process.env.REACT_APP_API_PATH;
        const proxyPlusURL = proxy+url

        axios({
          method: 'post',
          url: proxyPlusURL,
          headers: { 
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Access-Control-Allow-Origin': '*'
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
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><Link to="/review-page">Review Information</Link></li>
              </ol>
            </nav>
          <div className="container">
          <form>
            <h4>Final Review Page of Patient Information</h4>
              <div className="form-group row">
                <label htmlFor="staticName" className="col-sm-2 col-form-label">Patient's Name: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticName" value={ currState.patient_first_name ? patientName : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={currState.patient_emailid ? currState.patient_emailid : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
              <label htmlFor="staticPhone" className="col-sm-2 col-form-label">Phone Number: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticPhone" value={currState.patient_contact_number ?  currState.patient_contact_number : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticSSN" className="col-sm-2 col-form-label">Social Security Number(SSN): </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticSSN" value={currState.patient_ssn ? currState.patient_ssn : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticDOB" className="col-sm-2 col-form-label">Date of Birth (DOB): </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticDOB" value={currState.patient_dob ? currState.patient_dob : 'N/A'} />
                </div>
              </div>
              <hr />
                <br/>
              <div className="form-group row">
                <label htmlFor="staticAddr1" className="col-sm-2 col-form-label">Address Line 1: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticAddr1" value={currState.patient_address_line_1 ? currState.patient_address_line_1 : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticAddr2" className="col-sm-2 col-form-label">Address Line 2: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticAddr2" value={currState.patient_address_line_2 ? currState.patient_address_line_2 : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticCity" className="col-sm-2 col-form-label">City: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticCity" value={currState.patient_address_city ? currState.patient_address_city : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticState" className="col-sm-2 col-form-label">State: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticState" value={currState.patient_address_state ? currState.patient_address_state : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticZip" className="col-sm-2 col-form-label">Zip Code: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticZip" value={currState.patient_zip_code ? currState.patient_zip_code : 'N/A'} />
                </div>
              </div>
              <hr />
                <br/>
              <div className="form-group row">
                <label htmlFor="staticInsurID" className="col-sm-2 col-form-label">Insureance ID Number: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticInsurID" value={currState.patient_insurance_id ? currState.patient_insurance_id : 'N/A'} />
                </div>
              </div>
              <hr />
                <br/>
              <div className="form-group row">
                <label htmlFor="staticEmergCont" className="col-sm-2 col-form-label">Emergency Contact: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticEmergCont" value={currState.patient_emergency_contact_name ? currState.patient_emergency_contact_name : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmergContRel" className="col-sm-2 col-form-label">Emergency Contact Relationship: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticEmergContRel" value={currState.patient_emergency_contact_relationship ? currState.patient_emergency_contact_relationship : 'N/A'} />
                </div>
              </div>
              <div className="form-group row">
                <label htmlFor="staticEmergContNum" className="col-sm-2 col-form-label">Emergency Contact Number: </label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticEmergContNum" value={currState.patient_emergency_contact_number ? currState.patient_emergency_contact_number : 'N/A'} />
                </div>
              </div>
              <br/>
              <div className="col-sm-10">
                    <input type="submit" className="btn btn-primary" value="Submit 	&#x21EA;" onClick={e => this.handleSubmit(e)} />
                </div>
            </form>
            </div>
            </div>
            );
    }
}

export default ReviewPage;
