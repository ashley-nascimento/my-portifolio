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
        margin-top: 4rem;
        gap: 1rem;
        font-size: 1.25rem;
        text-transform: uppercase;

        svg{

            color: var(--pink);       
        }
    }

    article{
        li > div{
            background: var(--gray-900);
            border: 2px solid var(--gray-900);
            border-radius: 8px;
            padding: 1rem;
            margin-left: 1rem;
            margin-right: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 0.5rem;

            &:hover{
                border: 2px solid var(--pink);
            }

            img{
                width: 100px;
                height: 100px;
            }
        }
    }
`