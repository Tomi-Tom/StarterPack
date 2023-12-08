import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

interface ThemeProviderProps {
    children: React.ReactNode;
    theme: 'light' | 'dark';
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
    const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

    return (
        <StyledThemeProvider theme={selectedTheme}>
            {children}
        </StyledThemeProvider>
    );
};

export default ThemeProvider;
