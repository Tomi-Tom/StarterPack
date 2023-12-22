import React from "react";
import {useTheme} from "styled-components";

interface LandingProps {
    sidebarOpen: boolean;
}

const Landing = ({ sidebarOpen }: LandingProps) => {
    const theme = useTheme();
    const handleStartClick = () => {
        console.log("Start Here button clicked!");
    };

    return (
        <div
            style={{
                marginLeft: sidebarOpen ? '250px' : '80px',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: theme.background,
                color: theme.text,
                textAlign: "center",
                padding: "20px",
                boxSizing: "border-box",
            }}
        >
            <h1
                style={{
                    fontSize: "64px",
                    marginBottom: "30px",
                }}
            >
                Bienvenue sur Starter Pack
            </h1>
            <p
                style={{
                    fontSize: "24px",
                    marginBottom: "-10px",
                }}
            >
                Explorez un nouveau monde numérique. Bienvenue dans votre portail d'innovation
            </p>
            <h2 style={{
                fontSize: "28px",
                marginBottom: "60px",
            }}>installez, simplifiez, réussissez!</h2>
            <button
                style={{
                    padding: "15px 30px",
                    fontSize: "20px",
                    border: "none",
                    borderRadius: "5px",
                    backgroundColor: theme.accent,
                    color: theme.text,
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                }}
                onClick={handleStartClick}
            >
                Commencer ici
            </button>
        </div>
    );
};

export default Landing;

