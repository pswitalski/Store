import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *::after, *::before {
        box-sizing: inherit;
    }

    body {
        background-color: ${props => props.theme.colors.background};
    }
`;