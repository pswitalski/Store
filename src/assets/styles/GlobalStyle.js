import { createGlobalStyle } from 'styled-components';

import SpartanRegular from 'assets/fonts/spartan/Spartan-Regular.ttf';
import SpartanMedium from 'assets/fonts/spartan/Spartan-Medium.ttf';
import SpartanSemiBold from 'assets/fonts/spartan/Spartan-SemiBold.ttf';
import SpartanBold from 'assets/fonts/spartan/Spartan-Bold.ttf';
import Playfair from 'assets/fonts/playfair/PlayfairDisplay-Bold.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Playfair Display';
        src: url(${Playfair});
        font-weight: 700;
    }

    @font-face {
        font-family: 'Spartan';
        src: url(${SpartanRegular});
        font-weight: 400;
    }
    @font-face {
        font-family: 'Spartan';
        src: url(${SpartanMedium});
        font-weight: 500;
    }
    @font-face {
        font-family: 'Spartan';
        src: url(${SpartanSemiBold});
        font-weight: 600;
    }
    @font-face {
        font-family: 'Spartan';
        src: url(${SpartanBold});
        font-weight: 700;
    }

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
        color: ${props => props.theme.colors.font};
        font-family: ${props => props.theme.fontFamily};
        font-size: ${props => props.theme.fontSize.body14_22};
        font-weight: ${props => props.theme.fontWeight.body14_22};
        line-height: ${props => props.theme.lineHeight.body14_22};
    }

    #root {
        min-height: 100vh;
    }

    .App {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        padding-top: calc(24px + 66px);
    }
`;