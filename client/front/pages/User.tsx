import React from "react";
import profileImage from "../assets/profile.png";

interface UserProps {
    sidebarOpen: boolean;
}

interface Styles {
    container: React.CSSProperties;
    userBox: React.CSSProperties;
    profileImage: React.CSSProperties;
    userInfo: React.CSSProperties;
    bioContainer: React.CSSProperties;
}

const styles: Styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
        transition: '0.5s',
        display: 'flex',
        justifyContent: 'center',
    },
    userBox: {
        border: '2px solid #ccc',
        borderRadius: '10px',
        width: '80%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
    },
    profileImage: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    bioContainer: {
        width: '20%',
        marginLeft: '20px',
    },
};

const User: React.FC<UserProps> = ({ sidebarOpen }) => {
    // Informations fictives de l'utilisateur
    const userInformation = {
        name: "John Doe",
        title: "Frontend Developer",
        email: "john.doe@example.com",
        phone: "+1 123-456-7890",
        country: "United States",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor justo ac diam tempor, a suscipit sem sodales. In hac habitasse platea dictumst.",
    };

    return (
        <div style={{ ...styles.container, marginLeft: sidebarOpen ? '250px' : '80px' }}>
            <div style={styles.userBox}>
                <h1>User Page</h1>
                {sidebarOpen ? <p>Welcome to the User page! The sidebar is open.</p> : <p>Welcome to the User page! The sidebar is closed.</p>}
                <div style={styles.userInfo}>
                    <img src={profileImage} alt="Profile" style={styles.profileImage} />
                    <div style={{ marginLeft: '20px', textAlign: 'left' }}>
                        <h2>{userInformation.name}</h2>
                        <h3>{userInformation.title}</h3>
                    </div>
                </div>
                <div style={{ textAlign: 'left', flexGrow: 1 }}>
                    <h3>User Information:</h3>
                    <p>Email: {userInformation.email}</p>
                    <p>Phone: {userInformation.phone}</p>
                    <p>Country: {userInformation.country}</p>
                </div>
            </div>
            <div style={styles.bioContainer}>
                <h3>Bio:</h3>
                <p>{userInformation.bio}</p>
            </div>
        </div>
    );
};

export default User;
