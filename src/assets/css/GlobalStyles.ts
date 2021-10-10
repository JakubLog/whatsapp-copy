import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    html {
        font-family: Helvetica;
        overflow: hidden;
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
    }
`;
