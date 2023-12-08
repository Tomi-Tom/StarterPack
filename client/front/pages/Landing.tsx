import React from "react";

interface Styles {
    container: React.CSSProperties;
}

const styles: Styles = {
    container: {
        marginTop: '50px',
        textAlign: 'center',
    },
};

interface LandingProps {
    sidebarOpen: boolean;
}

const Landing: React.FC<LandingProps> = ({ sidebarOpen }) => {
    return (
        <div style={{ ...styles.container, marginLeft: sidebarOpen ? '250px' : '80px', transition: '0.5s' }}>
            <h1>Landing</h1>
            {sidebarOpen ? <p>Welcome! The sidebar is open.</p> : <p>Welcome! The sidebar is closed.</p>}
        </div>
    );
};

export default Landing;

