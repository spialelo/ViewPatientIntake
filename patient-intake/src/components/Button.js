import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


class Button extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    
    
    render() {
        return(
            <div>
                {/*<button to={`${this.props.link}`}>{`${this.props.label}`}</button>*/}
                <Link className="btn btn-primary" to={`${this.props.link}`}>{`${this.props.label}`}</Link>
                {/*<a className="btn btn-primary" href={`${this.props.link}`}>{`${this.props.label}`}</a>*/}
            </div>
            );
    }
}


Button.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Button;

