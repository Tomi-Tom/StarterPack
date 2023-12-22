import React, { useState } from "react";
import LibraryTypeBadge from "../components/LibraryTypeBadge";
import {useTheme} from "styled-components";

interface LibraryProps {
    sidebarOpen: boolean;
}

interface Profile {
    id: number;
    name: string;
    types: string[];
}

const Library: React.FC<LibraryProps> = ({ sidebarOpen }) => {
    const theme = useTheme();
    const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);

    const profileList: Profile[] = [
        { id: 1, name: "Setup Photography", types: ["Créatif"] },
        { id: 2, name: "Setup Gaming", types: ["Gaming"] },
        { id: 3, name: "Web Development Workspace", types: ["Tech"] },
        { id: 4, name: "Book Lover's Corner", types: ["Lecture"] },
        { id: 5, name: "Home Office", types: ["Productivité"] },
        { id: 6, name: "Music Production Setup", types: ["Créatif", "Audio"] },
        { id: 7, name: "Film Editing Station", types: ["Créatif", "Video"] },
        { id: 8, name: "Fitness Zone", types: ["Fitness"] },
        { id: 9, name: "Kitchen Setup", types: ["Cuisine"] },
        { id: 10, name: "Outdoor Adventure Gear", types: ["Aventure", "Outdoor"] },
        { id: 11, name: "Home Theater System", types: ["Divertissement"] },
        { id: 12, name: "DIY Workshop", types: ["Bricolage", "Créatif"] },
        { id: 13, name: "Graphic Design Workspace", types: ["Créatif", "Design"] },
    ];

    const handleProfileClick = (profile: Profile) => {
        setSelectedProfile(profile);
    };

    const handleCloseProfile = () => {
        setSelectedProfile(null);
    };

    return (
        <div
            style={{
                marginLeft: sidebarOpen ? '250px' : '80px',
                padding: '20px',
                height: '100vh',
                textAlign: 'center',
                background: theme.background,
                color: theme.text,
            }}
        >
            <h1>Library</h1>
            {sidebarOpen ? <p>Welcome to the Library! The sidebar is open.</p> : <p>Welcome to the Library! The sidebar is closed.</p>}

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {profileList.map(profile => (
                    <div
                        key={profile.id}
                        style={{
                            borderRadius: '8px',
                            padding: '15px',
                            margin: '10px',
                            width: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            cursor: 'pointer',
                            transition: '0.3s',
                            backgroundColor: theme.card,
                        }}
                        onClick={() => handleProfileClick(profile)}
                    >
                        <strong style={{ fontSize: '18px', marginBottom: '10px' }}>{profile.name}</strong>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                            {profile.types.map((type, index) => (
                                <LibraryTypeBadge key={index} type={type}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {selectedProfile && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: selectedProfile ? '0' : '-100%',
                        marginLeft: sidebarOpen ? '250px' : '80px',
                        left: '0',
                        width: sidebarOpen ? 'calc(100% - 290px)' : 'calc(100% - 120px)',
                        height: '300px',
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        transition: '0.5s',
                        boxShadow: '0 -5px 5px -5px #333',
                    }}
                >
                    <h2>{selectedProfile.name}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus metus vel arcu pulvinar, a ultrices mi euismod. Quisque accumsan, orci ac sollicitudin elementum, sem justo cursus velit, et tristique libero leo sed nisi.</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '15px' }}>
                        <LibraryTypeBadge type={selectedProfile.types[0]}/>
                    </div>
                    <button
                        onClick={handleCloseProfile}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            backgroundColor: '#333',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginTop: '15px',
                            border: 'none',
                            fontSize: '16px',
                        }}
                    >
                        X
                    </button>
                </div>
            )}
        </div>
    );
};

export default Library;
