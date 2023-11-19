import React from "react";
import app1Logo from "../assets/Youtube.png";
import app2Logo from "../assets/Spotify.png";
import app3Logo from "../assets/Minecraft.png";

interface ServicesProps {
    sidebarOpen: boolean;
}

const Services: React.FC<ServicesProps> = ({ sidebarOpen }) => {
    const appList = [
        { name: "Youtube", logo: app1Logo },
        { name: "Spotify", logo: app2Logo },
        { name: "Minecraft", logo: app3Logo },
    ];

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', marginLeft: sidebarOpen ? '250px' : '80px', transition: '0.5s' }}>
            <h1>Services</h1>
            {sidebarOpen ? <p>Open</p> : <p>Closed</p>}

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <h2>Application List</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {appList.map((app, index) => (
                        <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
                            <img src={app.logo} alt={app.name} style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
                            <p style={{ marginTop: '5px' }}>{app.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
