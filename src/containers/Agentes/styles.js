import styled from "styled-components"
import background from "../../assets/agents-background.jpg"

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;  
`
export const BoxAgentes = styled.div`
    padding: 0 40px;
    display: grid;
    grid-template-columns: 1.5fr 3fr 1fr;
    align-items: center;
    min-height: calc(100vh - 107.59px);
    background: linear-gradient(180deg, #222222 0%, #151515 100%);
    div:nth-child(2){
        height: 100%;
        display: flex;
    }
    img{
        width: 100%;
        max-width: 900px;
        align-self: flex-end;
    }
    div:last-child{
        color: #FFF;
        h2{
            font-size: 20px;
            margin-bottom: 20px;
        }
        p{
            max-width: 315px;
            padding-bottom: 20px;
            border-bottom: 2px solid #FFF;
        }
    }
    @media (max-width: 1200px){
        align-items: flex-start;
        grid-template-columns: 1fr 2fr;
        padding-top: 40px;
        img{
            width: 100%;
            max-width: 900px;
            align-self: center;
        }
        div:last-child{
            grid-column: 1/3;
            p{
                max-width: none;
                padding-bottom: 20px;
                border-bottom: 2px solid #FFF;
            }
        }
    }
    @media (max-width: 800px){
        div:last-child{
            h2{
                font-size: 16px;
                margin-bottom: 20px;
            }
            p{
                font-size: 14px;
            }
        }
    }
    @media (max-width: 500px){
        height: calc(100vh - 93.19px);
    }
`
export const Buttons = styled.div`
    height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    button{
        color: #FFF;
        font-size: 36px;
        font-weight: 900;
        background: transparent;
        text-shadow: 0 3px 18px #ff4655;
    }
   ::-webkit-scrollbar{
        width: 5px;
   }
   ::-webkit-scrollbar-thumb{
        background-color: #ff4655;
   }
   ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }
    @media (max-width: 800px){
        height: 400px;
        gap: 5px;
        button{
            font-size: 26px;
            font-weight: 900;
        }
    }
    @media (max-width: 600px){
        button{
            font-size: 16px;
            font-weight: 900;
        }
        ::-webkit-scrollbar{
            width: 3px;
        }
    }
    @media (max-height: 800px){
        height: 300px;
    }
`