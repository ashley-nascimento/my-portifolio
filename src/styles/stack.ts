import styled from "styled-components"

export const Wrapper = styled.section`
    height: 100vh;
    color: var(--gray-200);
    position: relative;
    padding: 1rem;

    strong{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem;
        gap: 1rem;
        font-size: 1.25rem;
        text-transform: uppercase;

        svg{

            color: var(--pink);       
        }
    }
`