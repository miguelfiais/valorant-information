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
export const BoxHeader = styled.header`
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
        font-size: 10vw;
    }
    @media screen and (max-width: 600px) {
        h2{
        font-size: 48px;
        }
    }
`
export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px 20px;
    gap: 20px;
    flex-wrap: wrap;
    button{
        height: 80px;
        width: 220px;
        background-color: #ff4655;
        border-radius: 12px;
        font-weight: 500;
        font-size: 18px;
        color: #FFF;
    }
    button:hover{
        background: transparent;
        color: #ff4655;
        border: 2px solid #ff4655; 
    }
    @media screen and (max-width: 500px){
        button{
            height: 40px;
            font-size: 14px;
        }
    }
        
`