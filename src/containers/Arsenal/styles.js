import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #ECE8E1;
`
export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 40px;
    @media screen and (max-width: 1600px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`