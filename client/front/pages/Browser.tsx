import React, { useState, useMemo } from "react";
import {useTheme} from 'styled-components';
import LibraryTypeBadge from "../components/LibraryTypeBadge";

interface BrowserProps {
    sidebarOpen: boolean;
}

const Browser: React.FC<BrowserProps> = ({ sidebarOpen }) => {
    const theme = useTheme();
    const initialProfileList = useMemo(() => [
        { name: "Setup Photography", types: ["Créatif"] },
        { name: "Gaming Room", types: ["Gaming"] },
        { name: "Web Development Workspace", types: ["Tech"] },
        { name: "Book Lover's Corner", types: ["Lecture"] },
        { name: "Home Office", types: ["Productivité"] },
        { name: "Music Production Setup", types: ["Créatif", "Audio"] },
        { name: "Film Editing Station", types: ["Créatif", "Video"] },
        { name: "Fitness Zone", types: ["Fitness"] },
        { name: "Kitchen Setup", types: ["Cuisine"] },
        { name: "Outdoor Adventure Gear", types: ["Aventure", "Outdoor"] },
        { name: "Home Theater System", types: ["Divertissement"] },
        { name: "DIY Workshop", types: ["Bricolage", "Créatif"] },
        { name: "Graphic Design Workspace", types: ["Créatif", "Design"] },
    ], []);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [profileList, setProfileList] = useState(initialProfileList);

    const filterProfiles = (search: string) => {
        const filteredList = initialProfileList.filter(profile => profile.name.toLowerCase().includes(search.toLowerCase()));
        setProfileList(filteredList);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        filterProfiles(event.target.value);
    };

    return (
        <div
            style={{
                marginLeft: sidebarOpen ? '250px' : '80px',
                padding: '20px',
                background: theme.background,
                color: theme.text,
            }}
        >
            <h1 style={{textAlign: 'center'}}>Browser</h1>

            <input
                type="text"
                placeholder="Search profiles..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    boxSizing: 'border-box',
                    marginBottom: '20px',
                    borderRadius: '5px',
                    background: theme.lightBackground,
                    color: theme.text,
                }}
            />

            <div style={{width: '100%', maxHeight: '89vh', overflowY: 'auto'}}>
                {profileList.map((profile, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: theme.card,
                            borderRadius: '5px',
                            marginBottom: '10px',
                            padding: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <h2 style={{marginBottom: '5px', fontSize: '18px'}}>{profile.name}</h2>
                            <div className="badge-container" style={{display: 'flex', flexWrap: 'wrap', gap: '5px'}}>
                                {profile.types.map((type, tagIndex) => (
                                    <LibraryTypeBadge key={tagIndex} type={type}/>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Browser;
