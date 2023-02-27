import React from 'react';
import AboutComponent from './AboutComponent';

function AboutUs(props) {
    return (
        <div>
            <h1 style={{textAlign : "center", margin: "30px"}}>About Us</h1>

            <AboutComponent />
        </div>
    );
}

export default AboutUs;