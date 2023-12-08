import React from "react";
import profileImage from "../assets/profile.png";
import styled from "styled-components";
import LibraryTypeBadge from "../components/LibraryTypeBadge";

interface UserProps {
    sidebarOpen: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  transition: margin-left 0.5s;
`;

const PageTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const UserCard = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const UserName = styled.h2`
  font-size: 24px;
  margin-bottom: 5px;
  color: #333;
`;

const UserTitle = styled.h3`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
`;

const UserInformation = styled.div`
  text-align: left;
  margin-top: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333;
  }

  p {
    font-size: 16px;
    margin: 5px 0;
    color: #555;
  }
`;

const ProfilesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const ProfileItem = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }

  h2 {
    margin-bottom: 5px;
    font-size: 18px;
    color: #333;
  }

  span {
    font-size: 14px;
    color: #555;
  }

  .badge-container {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
  }
`;

const User: React.FC<UserProps> = ({ sidebarOpen }) => {
    const userInformation = {
        name: "John Doe",
        title: "Frontend Developer",
        email: "john.doe@example.com",
        phone: "+1 123-456-7890",
        country: "United States",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo ac diam tempor, a suscipit sem sodales. In hac habitasse platea dictumst.",
    };

    const profiles = [
        { name: "Creative Workspace", types: ["Créatif"] },
        { name: "Gaming Setup", types: ["Gaming"] },
        { name: "Web Development Workspace", types: ["Tech"] },
        { name: "Reading Nook", types: ["Lecture"] },
        { name: "Productivity Hub", types: ["Productivité"] },
    ];

    return (
        <Container style={{ marginLeft: sidebarOpen ? "250px" : "80px" }}>
            <PageTitle>User Page</PageTitle>
            <UserCard>
                <ProfileImage src={profileImage} alt="Profile" />
                <UserInfo>
                    <UserName>{userInformation.name}</UserName>
                    <UserTitle>{userInformation.title}</UserTitle>
                </UserInfo>
                <UserInformation>
                    <h3>User Information:</h3>
                    <p>Email: {userInformation.email}</p>
                    <p>Phone: {userInformation.phone}</p>
                    <p>Country: {userInformation.country}</p>
                </UserInformation>
                <UserInformation>
                    <h3>Bio:</h3>
                    <p>{userInformation.bio}</p>
                </UserInformation>
            </UserCard>
            <PageTitle>Related Profiles</PageTitle>
            <ProfilesList>
                {profiles.map((profile, index) => (
                    <ProfileItem key={index}>
                        <div>
                            <h2>{profile.name}</h2>
                        </div>
                        <div className="badge-container">
                            {profile.types.map((type, tagIndex) => (
                                <LibraryTypeBadge key={tagIndex} type={type} />
                            ))}
                        </div>
                    </ProfileItem>
                ))}
            </ProfilesList>
        </Container>
    );
};

export default User;
