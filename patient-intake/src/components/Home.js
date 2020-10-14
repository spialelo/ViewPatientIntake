import React from 'react';
import Button from './Button.js';


class Home extends React.Component {
    render () {
        return (
            <div className="homepage">
            <h1>Welcome</h1>
                <p>Patient Check-in</p>
                <Button label="Check In" link="/PatientInfo" />
            </div>
        );
    }
}

export default Home;