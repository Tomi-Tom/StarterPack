import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
    background: '#041D29',
    backgroundSecondary: '#2A4054',
    lightBackground: '#C8DBE0',
    accent: '#679436',
    accentSecondary: '#87B456',
    card: '#4A6074',
    text: '#DBEEF3',
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    return (
        <StyledThemeProvider theme={theme}>
            {children}
        </StyledThemeProvider>
    );
};

export default ThemeProvider;
