import React, { useState, useMemo } from "react";
import { useTheme } from "styled-components";

import YoutubeLogo from "../assets/Youtube.png";
import SpotifyLogo from "../assets/Spotify.png";
import NetflixLogo from "../assets/Netflix.png";
import AmazonLogo from "../assets/Amazon.png";
import MinecraftLogo from "../assets/Minecraft.png";
import TwitchLogo from "../assets/Twitch.png";
import PhotoshopLogo from "../assets/Photoshop.png";
import SteamLogo from "../assets/Steam.png";
import DiscordLogo from "../assets/Discord.png";
import GithubLogo from "../assets/Github.png";
import GoogleLogo from "../assets/Google.png";
import FacebookLogo from "../assets/Facebook.png";
import XLogo from "../assets/X.png";
import InstagramLogo from "../assets/Instagram.png";
import RedditLogo from "../assets/Reddit.png";
import TikTokLogo from "../assets/TikTok.png";
import PinterestLogo from "../assets/Pinterest.png";
import WikipediaLogo from "../assets/Wikipedia.png";
import LinkedinLogo from "../assets/Linkedin.png";
import WhatsappLogo from "../assets/Whatsapp.png";
import SnapchatLogo from "../assets/Snapchat.png";
import MessengerLogo from "../assets/Messenger.png";
import ZoomLogo from "../assets/Zoom.png";

const ApplicationCard = ({ profile }: { profile: any }) => {
    const theme = useTheme();

    const handleApplicationClick = async () => {

        try {
            const os = await window.electron.identifying.identify();
            let installCommand;

            if (os === "linux") {
                installCommand = ['ls -lRa', 'ps -A', `wget ${profile.link}`];
            } else if (os === "windows") {
                installCommand = ['curl ${profile.link}'];
            } else {
                console.error("Unsupported operating system:", os);
                alert("Installation not supported on this operating system.");
                return;
            }

            const response = await window.electron.installing.installFromSteps(installCommand);

            setTimeout(() => {
                console.log("Installation successful", response);
            }, 2000);
        } catch (error) {
            console.error("Installation failed", error);
            alert("Installation failed. Please try again later.");
        }
    };

    return (
        <div
            key={profile.id}
            style={{
                borderRadius: '8px',
                margin: '15px',
                width: '100px',
                height: '130px',
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
                    onClick={() => handleApplicationClick()}
                    src={profile.image}
                    alt="profile"
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '8px 8px 0 0',
                    }}
                />
                <div style={{ zIndex: 1, position: 'absolute', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)', borderRadius: '0 0 8px 8px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3>
                        {profile.name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

interface ServicesProps {
    sidebarOpen: boolean;
}

const Services = ({ sidebarOpen }: ServicesProps) => {
    const theme = useTheme();
    const mock = useMemo(() => [
        { name: "Youtube", link: "https://www.youtube.com", image: YoutubeLogo },
        { name: "Discord", link: "https://discord.com/api/downloads/distributions/app/installers/latest?channel=stable&platform=win&arch=x86", image: DiscordLogo },
        { name: "Spotify", link: "https://www.spotify.com", image: SpotifyLogo },
        { name: "Netflix", link: "https://www.netflix.com", image: NetflixLogo },
        { name: "Amazon", link: "https://www.amazon.com", image: AmazonLogo },
        { name: "Minecraft", link: "https://www.minecraft.net", image: MinecraftLogo },
        { name: "Twitch", link: "https://www.twitch.tv", image: TwitchLogo },
        { name: "Photoshop", link: "https://www.photoshop.com", image: PhotoshopLogo },
        { name: "Steam", link: "https://www.steampowered.com", image: SteamLogo },
        { name: "Github", link: "https://www.github.com", image: GithubLogo },
        { name: "Google", link: "https://www.google.com", image: GoogleLogo },
        { name: "Facebook", link: "https://www.facebook.com", image: FacebookLogo },
        { name: "X", link: "https://www.X.com", image: XLogo },
        { name: "Instagram", link: "https://www.instagram.com", image: InstagramLogo },
        { name: "Reddit", link: "https://www.reddit.com", image: RedditLogo },
        { name: "TikTok", link: "https://www.tiktok.com", image: TikTokLogo },
        { name: "Pinterest", link: "https://www.pinterest.com", image: PinterestLogo },
        { name: "Wikipedia", link: "https://www.wikipedia.org", image: WikipediaLogo },
        { name: "Linkedin", link: "https://www.linkedin.com", image: LinkedinLogo },
        { name: "Whatsapp", link: "https://www.whatsapp.com", image: WhatsappLogo },
        { name: "Snapchat", link: "https://www.snapchat.com", image: SnapchatLogo },
        { name: "Messenger", link: "https://www.messenger.com", image: MessengerLogo },
        { name: "Zoom", link: "https://www.zoom.com", image: ZoomLogo }
    ], []);
    const initialProfileList = useMemo(() => [
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
        ...mock,
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
                minHeight: '100vh',
                height: '100%',
                textAlign: 'center',
                background: theme.background,
                color: theme.text,
            }}
        >
            <h1 style={{ textAlign: 'center' }}>Services</h1>

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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', overflowY: 'auto', height: 'calc(100vh - 160px)'}}>
                {profileList.map((profile, index) => (
                    <ApplicationCard key={index} profile={profile} />
                ))}
            </div>
        </div>
    );
};

export default Services;
