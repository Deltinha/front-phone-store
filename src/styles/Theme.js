import { createGlobalStyle } from 'styled-components';

const Theme = createGlobalStyle`
    :root {
        --primary: #ff2768;     //pink
        --secondary: #ffc4d4;   //light-pink
        --tertiary: #d4d7db;    //gray
        --detail: #05e0e9;      //blue
        --background: #ffffff;  //white
        --text: #0b0b0b;        //black
    }
    body {
        font-family: 'Open Sans';
    }
`;

export default Theme;
