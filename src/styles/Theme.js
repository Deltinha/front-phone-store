import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
    :root {
        --primary: #ff2768;     //pink
        --secondary: #ffc4d4;   //light pink
        --tertiary: #ff9ab4;    //pink number 3
        --detail: #ff6b8f;      //just one more pink
        --background: #fffce3;  //yellow
        --text: #0b0b0b;        //black
    }
    body {
        font-family: 'Open Sans';
    }

    .alert-btn {
        font-size: 18px;
        background-color: var(--detail) !important;
        color: white;

        &:hover {
        transition: all 0.3s;
        background-color: var(--primary) !important;
        font-weight: 500;
        cursor: pointer;
        } 
    }
`;

export default Theme;
