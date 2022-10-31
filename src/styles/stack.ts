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
        margin: 2rem;
        gap: 1rem;
        font-size: 1.25rem;
        text-transform: uppercase;

        svg{

            color: var(--pink);       
        }
    }

    article{
        div{
            background: var(--gray-700);
            border-radius: 8px;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 0.5rem;

            img{
                width: 100px;
                height: 100px;
            }
        }
    }
`