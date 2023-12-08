import React from 'react';
import styled from 'styled-components';

interface LibraryTypeBadgeProps {
    type: string;
}

const Badge = styled.span<{ color: string }>`
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  color: #fff;
`;

const LibraryTypeBadge: React.FC<LibraryTypeBadgeProps> = ({ type }) => {
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
        };
        return colorMap[type] || '#ccc';
    };

    const badgeColor = getTypeColor(type);

    return <Badge color={badgeColor}>{type}</Badge>;
};

export default LibraryTypeBadge;
