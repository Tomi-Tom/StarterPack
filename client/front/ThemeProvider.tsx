import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
    background: '#141214',
    backgroundSecondary: '#444244',
    accent: '#886644',
    accentSecondary: '#553311',
    card: '#595559',
    text: '#eeeaee',
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
