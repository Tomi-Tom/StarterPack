import React from "react";

interface LandingProps {
    sidebarOpen: boolean;
}

const Services: React.FC<LandingProps> = ({ sidebarOpen }) => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px', marginLeft: sidebarOpen ? '250px' : '80px', transition: '0.5s' }}>
            <h1>Services</h1>
            {sidebarOpen ? <p>Open</p> : <p>Closed</p>}
        </div>
    );
};

export default Services;
