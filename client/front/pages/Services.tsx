import React, { useMemo, useState } from 'react';
import { useTheme } from 'styled-components';
import DiscordLogo from '../assets/Discord.png';

type Profile = {
    name: string;
    link: string;
    image: string;
    installationCommands: {
        [os: string]: string[];
    };
};

const ApplicationCard = ({ profile }: { profile: Profile }) => {
    const theme = useTheme();

    const handleApplicationClick = async () => {
        try {
            const os = await window.electron.identifying.identify();

            if (!(os in profile.installationCommands))
                return alert('This application is not available for your OS.');

            let commands = profile.installationCommands[os];

            window.electron.installing.installFromSteps(commands)
              .then(response => {
                  console.log('Installation successful', response);
                  alert(`${profile.name} installation successful`);
              });
        } catch (error) {
            console.error('Installation failed', error);
            alert('Installation failed. Please try again later.');
        }
    };

    return (
      <div
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
            backgroundColor: theme.card
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
                    borderRadius: '8px 8px 0 0'
                }}
              />
              <div style={{
                  zIndex: 1,
                  position: 'absolute',
                  bottom: '0',
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '0 0 8px 8px',
                  height: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
              }}>
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
        {
            name: 'Discord',
            link: 'https://discord.com',
            image: DiscordLogo,
            installationCommands: {
                linux: [ '!downloadFileFromUrl https://discord.com/api/download?platform=linux&format=deb setup', 'pkexec dpkg -i $setup' ],
                windows: [ '!downloadFileFromUrl https://discord.com/api/download?platform=linux&format=deb setup.exe', '.\\$setup.exe' ]
            }
        },
        {
            name: 'Discord Canary',
            link: 'https://canary.discord.com',
            image: DiscordLogo,
            installationCommands: {
                linux: [ '!downloadFileFromUrl https://canary.discord.com/api/download?platform=linux&format=deb setup', 'pkexec dpkg -i $setup' ],
                windows: [ '!downloadFileFromUrl https://canary.discord.com/api/download?platform=linux&format=deb setup.exe', '.\\$setup.exe' ]
            }
        }
    ] as Profile[], []);
    const initialProfileList = useMemo(() => mock, []);

    const [ searchTerm, setSearchTerm ] = useState<string>('');
    const [ profileList, setProfileList ] = useState(initialProfileList);

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
            color: theme.text
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
                background: theme.lightBackground
            }}
          />

          {/* Utilisation d'une hauteur fixe pour la zone des ApplicationCard */}
          <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              overflowY: 'auto',
              height: 'calc(100vh - 160px)'
          }}>
              {profileList.map((profile, index) => (
                <ApplicationCard key={index} profile={profile} />
              ))}
          </div>
      </div>
    );
};

export default Services;
