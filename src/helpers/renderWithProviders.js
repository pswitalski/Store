import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

export const renderWithProviders = (children) => {
    return(
        <>
        <ThemeProvider theme={theme} >
            {children}
        </ThemeProvider>
        </>
    )
};