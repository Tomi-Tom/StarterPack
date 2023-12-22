import React from "react";
import profileImage from "../assets/profile.png";
import styled, { useTheme } from "styled-components";
import LibraryTypeBadge from "../components/LibraryTypeBadge";

interface UserProps {
    sidebarOpen: boolean;
    style?: React.CSSProperties;
}

const User: React.FC<UserProps> = ({ sidebarOpen, style }) => {
    const theme = useTheme();
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
        <div style={{ marginLeft: sidebarOpen ? "250px" : "80px", ...style }}>
            <h1 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>User Page</h1>
            <div>
                <img src={profileImage} alt="Profile" style={{ width: "150px", height: "150px", borderRadius: "50%" }} />
                <div>
                    <h2 style={{ fontSize: "24px", marginBottom: "5px", color: "#333" }}>{userInformation.name}</h2>
                    <h3 style={{ fontSize: "18px", color: "#555", marginBottom: "10px" }}>{userInformation.title}</h3>
                </div>
                <div style={{ textAlign: "left", marginTop: "20px" }}>
                    <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#333" }}>User Information:</h3>
                    <p style={{ fontSize: "16px", margin: "5px 0", color: "#555" }}>Email: {userInformation.email}</p>
                    <p style={{ fontSize: "16px", margin: "5px 0", color: "#555" }}>Phone: {userInformation.phone}</p>
                    <p style={{ fontSize: "16px", margin: "5px 0", color: "#555" }}>Country: {userInformation.country}</p>
                </div>
                <div style={{ textAlign: "left", marginTop: "20px" }}>
                    <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#333" }}>Bio:</h3>
                    <p style={{ fontSize: "16px", margin: "5px 0", color: "#555" }}>{userInformation.bio}</p>
                </div>
            </div>
            <h1 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>Related Profiles</h1>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
                {profiles.map((profile, index) => (
                    <div key={index} style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: "5px", padding: "15px", display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", transition: "background-color 0.3s" }}>
                        <div>
                            <h2 style={{ marginBottom: "5px", fontSize: "18px", color: "#333" }}>{profile.name}</h2>
                        </div>
                        <div className="badge-container" style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
                            {profile.types.map((type, tagIndex) => (
                                <LibraryTypeBadge key={tagIndex} type={type} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default User;
