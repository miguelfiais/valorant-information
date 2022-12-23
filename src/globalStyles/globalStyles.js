import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    body, html {
        overflow-x: hidden;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    button{
        border: none;
        cursor: pointer;
        outline: none;
    }
    button:hover{
        opacity: 0.8;
    }
    button:active{
        opacity: 0.5;
    }
    a{
        cursor: pointer;
    }
`