import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --pink: #FA4EAB;
        --pink-light: #FE83C6;
        --purple: #6915CF;
        --green: #4CD3C2;
        --title: #FFF2F9;
        --gray-900: #181818;
        --gray-850: #1C1C1C;
        --gray-800: #222222;
        --gray-700: #2c2c2b;
        --gray-600: #3b3b39;
        --gray-500: #4A4A48;
        --gray-400: #6e6e6c;
        --gray-300: #929291;
        --gray-200: #b6b6b5;
        --gray-100: #dadada;
        --gray-50:  #ececec;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75% // 15px
        }

        @media (max-width: 728px) {
            font-size: 87.5% // 14px
        }
    }

    body{
        background: var(--gray-900);
        -webkit-font-smoothing: antialiased; //aumenta nitidez da fonte
    }

    body, button, textarea, input{
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`