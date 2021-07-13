import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';

export const renderWithProviders = (children) => {
    return(
        <>
        <BrowserRouter>
            <ThemeProvider theme={theme} >
                {children}
            </ThemeProvider>
        </BrowserRouter>
        </>
    )
};