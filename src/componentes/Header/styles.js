import styled from "styled-components";

export const BoxHeader = styled.header`
    width: 100%;
    padding: 20px;
    border-bottom: 2px solid #ff4655;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #ece8e1;
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
        justify-content: space-around;
        button{
        position: static;
        }
    }
    @media screen and (max-width: 500px) {
        justify-content: space-between;
        button{
            padding: 8px 20px;
            font-size: 14px;
        }
        h1{
            font-size: 36px;
        }
    }
`