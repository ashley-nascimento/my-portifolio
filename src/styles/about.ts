import styled from "styled-components"

export const Wrapper = styled.section`
  
    color: var(--gray-300);
    position: relative;
    padding: 1rem;

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
        max-width: 1200px;
        width: 100%;   
        
        background-color: var(--gray-800);
        padding: 1rem;
        border-radius: 8px;

        p{
            max-width: 500px; 
         
        }

        img{
            width: 400px;
            height: 400px;
        }
    }
`