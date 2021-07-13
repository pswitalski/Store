import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store';

export const renderWithProviders = (children) => {
    return(
        <>
        <Provider store={store} >
            <BrowserRouter>
                <ThemeProvider theme={theme} >
                    {children}
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
        </>
    )
};