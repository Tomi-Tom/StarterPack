import React from 'react';
import { useTheme } from 'styled-components';

interface LandingProps {
  sidebarOpen: boolean;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}

const Landing: React.FC<LandingProps> = ({ sidebarOpen, setCurrent }) => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    marginLeft: sidebarOpen ? '250px' : '80px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: theme.background,
    color: theme.text,
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '92px',
    marginBottom: '30px',
  };

  const subTitleStyle: React.CSSProperties = {
    fontSize: '24px',
    marginBottom: '-10px',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '28px',
    marginBottom: '60px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '15px 30px',
    marginTop: '30px',
    fontSize: '20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: theme.accent,
    color: theme.text,
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const handleStartClick = () => {
    setCurrent('user');
  };

  return (
    <div style={containerStyle}>
      <div style={{textAlign: 'center'}}><h1 style={titleStyle}>Starter Pack</h1>
        <h2 style={descriptionStyle}>installez, simplifiez, réussissez!</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <a
            key={item}
            href="/services/digital-campaigns"
            style={{ border: '1px solid #444', borderRadius: '8px', padding: '16px', textDecoration: 'none', color: 'white', ...{ borderColor: theme.accent, boxShadow: '0 8px 16px rgba(233, 30, 99, 0.2)' } }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '40px', height: '40px', color: theme.accent }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '1rem' }}>
              Profile Vitrine {item}
            </h2>

            <p style={{ marginTop: '0.5rem', fontSize: '1rem' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
              distinctio alias voluptatum blanditiis laudantium.
            </p>
          </a>
        ))}
      </div>

      <button style={buttonStyle} onClick={handleStartClick}>
        Commencer ici
      </button>
    </div>
  );
};

export default Landing;
