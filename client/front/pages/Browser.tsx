import React, { useState, useMemo } from "react";
import styled from 'styled-components';
import LibraryTypeBadge from "../components/LibraryTypeBadge";

interface BrowserProps {
    sidebarOpen: boolean;
}

const BrowserContainer = styled.div`
  margin-left: ${(props) => (props.sidebarOpen ? '250px' : '80px')};
  padding: 20px;
  transition: margin-left 0.5s;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  border: 1px solid ${(props) => props.theme.background};
  border-radius: 5px;
`;

const ProfileContainer = styled.div`
  width: 100%;
  max-height: 825px;
  overflow-y: auto; /* Ajoutez le défilement vertical lorsque nécessaire */
`;

const ProfileItem = styled.div`
  border: 1px solid ${(props) => props.theme.background};
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }

  h2 {
    margin-bottom: 5px;
    font-size: 18px;
  }

  span {
    font-size: 14px;
  }

  .badge-container {
    display: flex;
    margin-top: 5px;
  }
`;

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
        <BrowserContainer sidebarOpen={sidebarOpen}>
            <PageTitle style={{ textAlign: 'center' }}>Browser</PageTitle>

            <SearchInput
                type="text"
                placeholder="Search profiles..."
                value={searchTerm}
                onChange={handleSearchChange}
            />

            <ProfileContainer>
                {profileList.map((profile, index) => (
                    <ProfileItem key={index}>
                        <div>
                            <h2>{profile.name}</h2>
                            <span>{profile.types.join(', ')}</span>
                            <div className="badge-container">
                                {profile.types.map((type, tagIndex) => (
                                    <LibraryTypeBadge key={tagIndex} type={type} />
                                ))}
                            </div>
                        </div>
                    </ProfileItem>
                ))}
            </ProfileContainer>
        </BrowserContainer>
    );
};

export default Browser;
