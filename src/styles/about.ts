import styled from "styled-components"

export const Wrapper = styled.section`
    color: var(--gray-300);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    b{
        color: var(--pink);       
    }

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

    & > article{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 2rem;
        gap: 2rem;
        background-color: var(--gray-800);
        border-radius: 8px;

        p{
            max-width: 500px; 
        }

        img{
            max-width: 400px;
            max-height: 400px;
        }
    }
`