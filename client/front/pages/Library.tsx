import React from "react";

interface LibraryProps {
    sidebarOpen: boolean;
}

interface Profile {
    id: number;
    name: string;
    types: string[];
}

// Fonction pour attribuer une couleur à chaque type
const getTypeColor = (type: string): string => {
    const colorMap: Record<string, string> = {
        Créatif: '#7FB3D5',
        Gaming: '#FF7F50',
        Tech: '#98FB98',
        Lecture: '#9370DB',
        Productivité: '#FFD700',
        Audio: '#FF4500',
        Video: '#008080',
        Fitness: '#00FF00',
        Cuisine: '#CD5C5C',
        Aventure: '#20B2AA',
        Outdoor: '#32CD32',
        Divertissement: '#800080',
        Bricolage: '#FF69B4',
        Design: '#4682B4',
        // Ajoutez d'autres couleurs pour les types supplémentaires
    };

    // Retourne la couleur correspondante ou une couleur par défaut
    return colorMap[type] || '#ccc';
};

const Library: React.FC<LibraryProps> = ({ sidebarOpen }) => {
    // Données fictives pour la bibliothèque
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
        // Ajoutez d'autres profils avec des types différents
    ];

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', marginLeft: sidebarOpen ? '250px' : '80px', transition: '0.5s' }}>
            <h1>Library</h1>
            {sidebarOpen ? <p>Welcome to the Library! The sidebar is open.</p> : <p>Welcome to the Library! The sidebar is closed.</p>}

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <h3>Profile Collection:</h3>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    {profileList.map(profile => (
                        <button
                            key={profile.id}
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '10px',
                                margin: '10px',
                                width: '200px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                position: 'relative',
                            }}
                        >
                            <strong style={{ fontSize: '16px' }}>{profile.name}</strong>
                            <div style={{ display: 'flex', marginTop: '5px' }}>
                                {profile.types.map((type, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontSize: '12px',
                                            marginRight: '5px',
                                            padding: '5px',
                                            borderRadius: '5px',
                                            background: getTypeColor(type),
                                            color: '#fff',
                                        }}
                                    >
                    {type}
                  </span>
                                ))}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Library;
