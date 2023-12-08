import React, { useState } from 'react';
import youtubeLogo from "../assets/Youtube.png";
import SpotifyLogo from "../assets/Spotify.png";
import MinecraftLogo from "../assets/Minecraft.png";
import Modal from "../components/Modal";

interface ServicesProps {
    sidebarOpen: boolean;
}

const Services: React.FC<ServicesProps> = ({ sidebarOpen }) => {
    const [selectedApp, setSelectedApp] = useState<string | null>(null);

    const appList = [
        { name: "Youtube", logo: youtubeLogo },
        { name: "Spotify", logo: SpotifyLogo },
        { name: "Minecraft", logo: MinecraftLogo },
        { name: "Netflix", logo: SpotifyLogo },
        { name: "WhatsApp", logo: SpotifyLogo },
        { name: "Twitter", logo: SpotifyLogo },
        { name: "Instagram", logo: SpotifyLogo },
        { name: "Facebook", logo: SpotifyLogo },
        { name: "Google Drive", logo: SpotifyLogo },
        { name: "Trello", logo: SpotifyLogo },
    ];

    const handleAppClick = (appName: string) => {
        setSelectedApp(appName);
    };

    const handleCloseModal = () => {
        setSelectedApp(null);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', marginLeft: sidebarOpen ? '250px' : '80px', transition: '0.5s' }}>
            <h1>Services</h1>
            {sidebarOpen ? <p>Open</p> : <p>Closed</p>}

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <h2>Application List</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {appList.map((app, index) => (
                        <div
                            key={index}
                            style={{
                                margin: '10px',
                                textAlign: 'center',
                                cursor: 'pointer',
                                transition: '0.3s',
                                backgroundColor: selectedApp === app.name ? '#ccc' : 'white',
                                borderRadius: '8px',
                                padding: '15px',
                                width: '200px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',
                                border: '1px solid #ccc',
                            }}
                            onClick={() => handleAppClick(app.name)}
                        >
                            <img src={app.logo} alt={app.name} style={{ width: '80px', height: '80px', borderRadius: '25%' }} />
                            <p style={{ marginTop: '5px' }}>{app.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {selectedApp && (
                <Modal title={selectedApp} onClose={handleCloseModal} sidebarOpen={sidebarOpen}>
                    <p>Description détaillée de l'application {selectedApp}</p>
                </Modal>
            )}
        </div>
    );
};

export default Services;
