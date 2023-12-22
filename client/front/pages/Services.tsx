import React, { useState, useMemo } from "react";
import { useTheme } from "styled-components";

import YoutubeLogo from "../assets/Youtube.png";
import SpotifyLogo from "../assets/Spotify.png";
import NetflixLogo from "../assets/Netflix.png";
import AmazonLogo from "../assets/Amazon.png";
import MinecraftLogo from "../assets/Minecraft.png";

const ApplicationCard = ({ profile }: { profile: any }) => {
    const theme = useTheme();

    return (
        <div
            key={profile.id}
            style={{
                borderRadius: '10px',
                margin: '10px',
                width: '100px',
                height: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                cursor: 'pointer',
                transition: '0.3s',
                backgroundColor: theme.card,
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                    src={profile.image}
                    alt="profile"
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '10px',
                    }}
                />
                <div style={{ zIndex: 1, position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: '0 0 8px 8px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>
                        {profile.name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

interface BrowserProps {
    sidebarOpen: boolean;
}

const Browser: React.FC<BrowserProps> = ({ sidebarOpen }) => {
    const theme = useTheme();
    const initialProfileList = useMemo(() => [
        { name: "Youtube", link: "https://www.youtube.com", image: YoutubeLogo },
        { name: "Spotify", link: "https://www.spotify.com", image: SpotifyLogo },
        { name: "Netflix", link: "https://www.netflix.com", image: NetflixLogo },
        { name: "Amazon", link: "https://www.amazon.com", image: AmazonLogo },
        { name: "Minecraft", link: "https://www.minecraft.net", image: MinecraftLogo },
        { name: "Youtube", link: "https://www.youtube.com", image: YoutubeLogo },
        { name: "Spotify", link: "https://www.spotify.com", image: SpotifyLogo },
        { name: "Netflix", link: "https://www.netflix.com", image: NetflixLogo },
        { name: "Amazon", link: "https://www.amazon.com", image: AmazonLogo },
        { name: "Minecraft", link: "https://www.minecraft.net", image: MinecraftLogo },
        { name: "Youtube", link: "https://www.youtube.com", image: YoutubeLogo },
        { name: "Spotify", link: "https://www.spotify.com", image: SpotifyLogo },
        { name: "Netflix", link: "https://www.netflix.com", image: NetflixLogo },
        { name: "Amazon", link: "https://www.amazon.com", image: AmazonLogo },
        { name: "Minecraft", link: "https://www.minecraft.net", image: MinecraftLogo },
        { name: "Youtube", link: "https://www.youtube.com", image: YoutubeLogo },
        { name: "Spotify", link: "https://www.spotify.com", image: SpotifyLogo },
        { name: "Netflix", link: "https://www.netflix.com", image: NetflixLogo },
        { name: "Amazon", link: "https://www.amazon.com", image: AmazonLogo },
        { name: "Minecraft", link: "https://www.minecraft.net", image: MinecraftLogo },
        { name: "Youtube", link: "https://www.youtube.com", image: YoutubeLogo },
        { name: "Spotify", link: "https://www.spotify.com", image: SpotifyLogo },
        { name: "Netflix", link: "https://www.netflix.com", image: NetflixLogo },
        { name: "Amazon", link: "https://www.amazon.com", image: AmazonLogo },
        { name: "Minecraft", link: "https://www.minecraft.net", image: MinecraftLogo },
        { name: "Youtube", link: "https://www.youtube.com", image: YoutubeLogo },
        { name: "Spotify", link: "https://www.spotify.com", image: SpotifyLogo },
        { name: "Netflix", link: "https://www.netflix.com", image: NetflixLogo },
        { name: "Amazon", link: "https://www.amazon.com", image: AmazonLogo },
        { name: "Minecraft", link: "https://www.minecraft.net", image: MinecraftLogo },
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
        <div
            style={{
                marginLeft: sidebarOpen ? '250px' : '80px',
                padding: '20px',
                height: '130vh',
                textAlign: 'center',
                background: theme.background,
                color: theme.text,
            }}
        >
            <h1 style={{ textAlign: 'center' }}>Browser</h1>

            <input
                type="text"
                placeholder="Search profiles..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                    width: '100%',
                    padding: '10px',
                    boxSizing: 'border-box',
                    marginBottom: '20px',
                    borderRadius: '5px',
                    background: theme.lightBackground,
                }}
            />

            {/* Utilisation d'une hauteur fixe pour la zone des ApplicationCard */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', overflowY: 'auto', maxHeight: '600px' }}>
                {profileList.map((profile, index) => (
                    <ApplicationCard key={index} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default Browser;
