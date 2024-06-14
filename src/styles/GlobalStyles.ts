import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    
    @font-face {
        font-family: 'Nova Regular';
        src: url('/fonts/ProximaNova-Regular.eot');
        src: url('/fonts/ProximaNova-Regular.eot?#iefix') format('embedded-opentype'),
        url('/fonts/ProximaNova-Regular.woff') format('woff'),
        url('/fonts/ProximaNova-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Nova Bold';
        src: url('/fonts/ProximaNova-Bold.eot');
        src: url('/fonts/ProximaNova-Bold.eot?#iefix') format('embedded-opentype'),
        url('/fonts/ProximaNova-Bold.woff') format('woff'),
        url('/fonts/ProximaNova-Bold.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    /*
    http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center, dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    
    body {
        line-height: 1;
    }
    
    ol, ul {
        list-style: none;
    }
    
    blockquote, q {
        quotes: none;
    }
    
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fonts.main};
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.textMain};
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;