import React, { useState } from "react";

interface BrowserProps {
    sidebarOpen: boolean;
}

const Browser: React.FC<BrowserProps> = ({ sidebarOpen }) => {
    const initialProfileList = [
        { name: "Setup Photography", types: ["Creative"] },
        { name: "Setup Gaming", types: ["Gaming"] },
        { name: "Creative Designer", types: ["Creative", "Designer"] },
    ];

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
        <div style={{ textAlign: 'center', marginTop: '50px', marginLeft: sidebarOpen ? '250px' : '80px', transition: '0.5s' }}>
            <h1>Browser</h1>
            {sidebarOpen ? <p>Open</p> : <p>Closed</p>}

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <h2>Profile List</h2>
                <div style={{ width: '80%', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
                    {/* Barre de recherche */}
                    <input
                        type="text"
                        placeholder="Search profiles..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ width: '100%', padding: '10px', boxSizing: 'border-box', marginBottom: '10px' }}
                    />
                    {profileList.map((profile, index) => (
                        <div key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <h2>{profile.name}</h2>
                            </div>
                            <div>
                                {profile.types.map((type, tagIndex) => (
                                    <span key={tagIndex} style={{ margin: '0 5px', padding: '3px 8px', borderRadius: '5px', background: '#eee', fontSize: '12px' }}>{type}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Browser;
