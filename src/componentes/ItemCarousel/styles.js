import styled from "styled-components";

export const Item = styled.div`
    img{
        max-width: 1200px;
        margin: 0 auto;

    }
    .carousel-caption{
        
        backdrop-filter: blur(22.5px);
        color: #FFF;
        max-width: 1200px;
        margin: 0 auto;
        padding: 1.25rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h3{
        font-weight: 900;
        letter-spacing: 1px;
        font-size: 48px;
        text-align: center;
        color: #ff4655;
        
    }
    button{
        background: transparent;
        color: #FFF;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 0.5px;
    }
    @media screen and (max-width: 1000px){
    .carousel-caption{
            width: 98%;
            margin: 10px auto;
            position: static;
            background-color: #8b978f;
            padding: 10px;
            border-radius: 8px;
        }
        @media screen and (max-width: 800px){
            p{
                font-size: 12px;
            }
            button{
                font-size: 14px;
            }
        }
    }

`