import React from 'react';

interface LibraryTypeBadgeProps {
    type: string;
}

const LibraryTypeBadge = ({ type }: LibraryTypeBadgeProps) => {
    const getTypeColor = (type: string): string => {
        const colorMap: Record<string, string> = {
            Creatif: '#7FB3D5',
            Gaming: '#FF7F50',
            Tech: '#98FB98',
            Lecture: '#9370DB',
            Productivite: '#FFD700',
            Audio: '#FF4500',
            Video: '#008080',
            Fitness: '#00FF00',
            Cuisine: '#CD5C5C',
            Aventure: '#20B2AA',
            Outdoor: '#32CD32',
            Divertissement: '#800080',
            Bricolage: '#FF69B4',
            Design: '#4682B4',
        };
        return colorMap[type] || '#ccc';
    };

    return <div
        style={{
            backgroundColor: getTypeColor(type),
            borderRadius: '10px',
            padding: '2px 5px',
            margin: '2px',
            fontSize: '12px',
            fontWeight: "bolder",
        }}
    >
        {type}
    </div>;
};

export default LibraryTypeBadge;
