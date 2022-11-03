import styled from "styled-components"

export const Wrapper = styled.section`

    color: var(--gray-200);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 4rem;
        gap: 1rem;
        font-size: 1.25rem;
        text-transform: uppercase;

        svg{
            color: var(--pink);       
        }
    }


    div{
        width: 10rem;
        height: 10rem;

        img{
            width: 100%;
        }
    }
`