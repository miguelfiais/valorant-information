import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    button{
        border: none;
        cursor: pointer;
    }
    button:hover{
        opacity: 0.8;
    }
    button:active{
        opacity: 0.5;
    }
`