import styled from "styled-components";

export const Container = styled.div`
    .carousel{
        padding: 40px 0;
    }
    .carousel-indicators [data-bs-target] {
        border: 0.5px solid #8b978f;
    }
    .carousel-indicators .active {
        opacity: 1;
        background-color: #ff4655;
    }
    @media screen and (max-width:1000px) {
        .carousel-inner, .carousel{
            position: static;
        }
    }
`