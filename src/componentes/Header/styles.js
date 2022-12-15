import styled from "styled-components";

export const BoxHeader = styled.header`
    width: 100%;
    padding: 20px;
    text-align: center;
    border-bottom: 2px solid #ff4655;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    h1{
        font-weight: 900;
        font-size: 48px;
        color: #0f1923;
    }
    button{
        padding: 10px 25px;
        border-radius: 8px;
        background-color: #ff4655;
        color: #FFF;
        font-weight: 500;
        position: absolute;
        right: 30px;
    }
    @media screen and (max-width: 800px) {
        justify-content: space-evenly;
        button{
        position: static;
        }
    }
`