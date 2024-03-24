import { createGlobalStyle } from "styled-components";
const img = require('../img/img.jpg');


export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
body{
        display: flex;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        background: url(${img}) no-repeat;
        font-family:  'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-size: cover;
       }

     
`