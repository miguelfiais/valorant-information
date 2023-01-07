import styled from "styled-components";

export const BoxArma = styled.div`
    padding: 10px;
    border: 1px solid #c3c3c3;
    position: relative;
    height: 330px;
    h1{
        font-weight: 900;
        font-size: 48px;
        color: #0f1923;
    }
    img{
        width: 100%;
        margin: 30px 0;
    }
    p{
        font-weight: 300;
        font-size: 12px;
        color: #7e7e7e;
        position: absolute;
        bottom: 10px;
        padding-right: 5px;
    }
    h3{
        display: none;
        color: #FFF;
        margin-top: 20px;
        font-size: 16px;
    }
    span{
        font-weight: 400;
    }
    .descrition{
        display: none;
    }
    &:hover{
        background-color: #ff4655;
        h1{
            color: #FFF;
        }
        h3{
            display: block;
        }
        img{
            opacity: 0.2;
            margin: 0;
        }
        p{
            :last-child{
                display: none;
            }
        }
        .descrition{
            display: block;
            position: absolute;
            left: 0;
            font-size: 16px;
            font-weight: 400;
            color: #fff;
            z-index: 9;
            padding: 0 10px;
        }
    }
    @media screen and (max-width: 800px) {
        height: auto;
    }
    @media screen and (max-width: 500px) {
        height: 300px;
        h1{
            font-size: 36px;
        }
        h3{
            font-size: 14px;
            margin-top: 10px;
        }
        &:hover{
            .descrition{
                font-size: 12px;
            }
        }
    }
`