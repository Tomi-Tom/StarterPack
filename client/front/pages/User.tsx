import React from "react";
import profileImage from "../assets/profile.png";
import { useTheme } from "styled-components";
import LibraryTypeBadge from "../components/LibraryTypeBadge";
import axios from "axios";
import modifyLogo from "../assets/modify.png";

interface UserProps {
    sidebarOpen: boolean;
}

const User: React.FC<UserProps> = ({ sidebarOpen }) => {
    const theme = useTheme();
    const [userInformation, setUserInformation] = React.useState({
        name: "John Doe",
        title: "Frontend Developer",
        email: "john.doe@example.com",
        phone: "+1 123-456-7890",
        country: "United States",
        bio:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo ac diam tempor, a suscipit sem sodales. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo ac diam tempor, a suscipit sem sodales. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo ac diam tempor, a suscipit sem sodales. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo ac diam tempor, a suscipit sem sodales. In hac habitasse platea dictumst.",
    });
    const [profiles, setProfiles] = React.useState([
        { name: "Creative Workspace", types: ["Creatif", "Design"] },
        { name: "Gaming Setup", types: ["Gaming", "Divertissement"] },
        { name: "Web Development Workspace", types: ["Tech"] },
        { name: "Reading Nook", types: ["Lecture", "Productivite", "Creatif"] },
        { name: "Productivity Hub", types: ["Productivite", "Tech"]
        }]);

    React.useEffect(() => {
        const getUserInformation = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/user?uuid=" +  localStorage.getItem("user_id"),
                );
                setUserInformation(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        const getUserProfiles = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:3000/profile/getProfile?uuid=" + localStorage.getItem("user_id"),
                );
                setProfiles(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        getUserProfiles();
        getUserInformation();
    }, []);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: sidebarOpen ? "250px" : "80px",
            padding: "20px", background: theme.background,
            color: theme.text
        }}>
            <div
                style={{
                    backgroundColor: theme.card,
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    width: "80%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: "20px",
                }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "50%",
                        backgroundColor: theme.backgroundSecondary,
                        borderRadius: "10px",
                        padding: "20px",
                        marginRight: "20px",
                    }}>
                    <img
                        style={{
                            width: "150px",
                            height: "150px",
                            borderRadius: "50%",
                        }}
                        src={profileImage} alt="Profile"
                    />
                    <div style={{
                        marginTop: "20px",
                        textAlign: "center",
                    }}>
                        <h1>{userInformation.name}</h1>
                        <h2>{userInformation.title}</h2>
                    </div>
                    <div>
                        <h3
                            style={{
                                fontSize: "18px",
                                marginBottom: "10px",
                            }}>
                            User Information:
                        </h3>
                        <p style={{
                            fontSize: "16px",
                            margin: "5px 0",
                        }}>
                            Email: {userInformation.email}
                        </p>
                        <p style={{
                            fontSize: "16px",
                            margin: "5px 0",
                        }}>
                            Phone: {userInformation.phone}
                        </p>
                        <p style={{
                            fontSize: "16px",
                            margin: "5px 0",
                        }}>
                            Country: {userInformation.country}
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "50%",
                        borderRadius: "10px",
                        padding: "20px",
                    }}>
                    <img
                        style={{
                            width: "35px",
                            height: "25px",
                            position: "relative",
                            top: "-130px",
                            left: "50%",
                        }}
                        src={modifyLogo} alt="Modify"
                    />
                    <h1>Bio:</h1>
                    <p>{userInformation.bio}</p>
                </div>
            </div>
            <h1>Related Profiles</h1>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {profiles.map((profile, index) => (
                    <div key={index}
                         style={{
                             backgroundColor: theme.card,
                             borderRadius: "10px",
                             padding: "20px",
                             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                             width: "80%",
                             display: "flex",
                             flexDirection: "column",
                             alignItems: "center",
                             marginBottom: "10px",
                         }}>
                        <div>
                            <h2>{profile.name}</h2>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "10px" }}>
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
