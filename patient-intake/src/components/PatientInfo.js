import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class PatientInfo extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.value);
    
    }
    
    
    render() {
        return(
            <div>
                <h1>PatientInfo - Nick</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                      First Name:
                      <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                      Last Name:
                      <input type="text" />
                    </label>
                    <label>
                      Email Address:
                      <input type="text" />
                    </label>
                    <input type="submit" value="Submit" />
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

