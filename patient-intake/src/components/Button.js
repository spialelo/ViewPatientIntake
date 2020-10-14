import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


class Button extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    
    
    render() {
        return(
            <div>
                <button to={`${this.props.link}`}>{`${this.props.label}`}</button>
                {/*<Link to={`${this.props.link}`}>{`${this.props.label}`}</Link>*/}
            </div>
            );
    }
}


Button.propTypes = {
    label: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Button;

