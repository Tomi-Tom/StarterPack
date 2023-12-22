import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
    background: '#242224',
    backgroundSecondary: '#343234',
    lightBackground: '#bab7ba',
    accent: '#886644',
    accentSecondary: '#553311',
    card: '#595559',
    text: '#dedade',
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
