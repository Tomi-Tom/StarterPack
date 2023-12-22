import React, { useState, useMemo } from "react";
import LibraryTypeBadge from "../components/LibraryTypeBadge";

interface BrowserProps {
    sidebarOpen: boolean;
}

const Browser: React.FC<BrowserProps> = ({ sidebarOpen }) => {
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
        <div style={{ marginLeft: sidebarOpen ? '250px' : '80px', padding: '20px', transition: 'margin-left 0.5s' }}>
            <h1 style={{ textAlign: 'center' }}>Browser</h1>

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
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                }}
            />

            <div style={{ width: '100%', maxHeight: '825px', overflowY: 'auto' }}>
                {profileList.map((profile, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            marginBottom: '10px',
                            padding: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                        }}
                    >
                        <div>
                            <h2 style={{ marginBottom: '5px', fontSize: '18px' }}>{profile.name}</h2>
                            <span style={{ fontSize: '14px' }}>{profile.types.join(', ')}</span>
                            <div style={{ display: 'flex', marginTop: '5px' }}>
                                {profile.types.map((type, tagIndex) => (
                                    <LibraryTypeBadge key={tagIndex} type={type} />
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
