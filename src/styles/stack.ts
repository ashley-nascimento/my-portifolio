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
        margin: 5rem 0;
        display: grid;
        grid-template-columns: auto auto auto;
        column-gap: 1rem;
        row-gap: 2rem;
        justify-content: space-evenly;

        @media(max-width: 768px){
            grid-template-columns: auto;

        }

        div{
            display: flex;
            align-items: center;
            gap: 0.5rem;

            div{
                background-color: var(--gray-800);
                border-radius: 10px;
                padding: 0.5rem;

                display: flex;

                img{
                    width: 50px;
                    height: 50px;
                }
            }
            p{
                b{
                    color: var(--title);
                }

                span{
                    display: block;
                    font-size: 0.75rem;
                    color: var(--gray-300);
                }
            }



        }
    }
`