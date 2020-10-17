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
                email: ''
            }
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    
    
    handleChange(e) {
        console.log("method called");
        const patient = Object.assign({}, this.state.patient);
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        patient[name] = value;
        this.setState({patient});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(`Patient: ${this.state.fname} ${this.state.lname}. Email Address: ${this.state.email}`);
        // Pass this component's state onto the next component/fields for user to fill in
        this.props.history.push({ 
            pathname: '/emergency-conact',
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
            <div>
                <h1>PatientInfo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      First Name:
                      <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                      Middle Name/Initial (optional):
                      <input type="text" name="midname" value={this.state.midname} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                      Last Name:
                      <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                      Email Address:
                      <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" onClick={e => this.handleSubmit(e)} />
                  </form>
            </div>
            );
    }
}


PatientInfo.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default withRouter(PatientInfo);

