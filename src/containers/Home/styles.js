import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #292929;
`
export const Header = styled.header`
    width: 100%;
    padding: 20px;
    background: #ff4655;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    box-shadow: 0px 4px 4px rgba(255, 70, 85, 0.54);
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    text-align: center;
    color: #f0f0f0;
    padding: 20px;
    h2{
        font-size: 12vw;
    }
`
export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px 20px;
    gap: 20px;
    button{
        height: 80px;
        width: 220px;
        background-color: #ff4655;
        border-radius: 12px;
        font-weight: 500;
        font-size: 18px;
        color: #FFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`