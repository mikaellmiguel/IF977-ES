import {createGlobalStyle}  from 'styled-components';
import theme from './theme';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:"Inter", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }

    :root {
        @media (min-width: 1600px) {
            font-size: 115%;
        }
    }

    body {
        background: ${theme.COLORS.BG_100};
        overflow: hidden;
    }
`;