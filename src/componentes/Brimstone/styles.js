import styled from "styled-components";

import background from "../../assets/bg-agente.jpg"

export const ContainerAgente = styled.div`
    display: flex;
    align-items: center;
    background: url("${background}") no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    padding: 40px;
    img{
        width: 100%;
        max-width: 500px;
    }
`
export const InfoAgente = styled.div`
        color: #FFF;
        h2{
            text-transform: uppercase;
            font-weight: 800;
        }
        h3{
            font-size: 16px;
        }
        h3:nth-child(3){
            margin-top: 30px;
            margin-bottom: 20px;
        }
        p{
            max-width: 400px;
            padding-bottom: 20px;
            border-bottom: 1px solid #FFF;
        }
`
export const BoxSkills = styled.div`
    align-self: flex-start;
    flex: 1;
    color: #FFF;
    h1{
        text-align: center;
        font-weight: 900;
    }
    img{
        width: 100px;
        height: 100px;
    }
    video{
        display: block;
        margin: 0 auto;
    }
`
export const ButtonSkills = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    button{
        background: transparent;
        padding: 10px;
        border: 1px solid #FFF;
        margin-bottom: 10px;
    }
    img{
        width: 60px;
        height: auto;
    }
`