import styled from "styled-components"

export const Wrapper = styled.section`
    height: 100vh;
    display:  flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-200);
    
    & > div{
        max-width: 1200px;
        padding: 2rem;
        gap: 2rem;
        width: 100%;
        display:  flex;
        justify-content: space-around;
        align-items: center;

        @media (max-width: 728px) {
            flex-wrap: wrap;
            flex-direction: column-reverse;
        }

        strong{
            color: var(--gray-300);
            text-transform: uppercase;
            font-size: 0.75rem;
        }

        h1{
            font-size: 2rem;
            line-height: 1.5;

        }
        
        span{
            display: block;
            max-width: 500px; 
            margin: 0.5rem 0;
            font-size: 0.9rem;
        }
    }
`

export const ImgContainer = styled.div`
    max-width: 500px; 
    
    img{
        background-image: cover;
        max-width: 350px;
        max-width: 350px;
        border-radius: 100%;
    }


`

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    button{
        background: transparent;
        color: var(--gray-200);
        border: 1px solid var(--pink);
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-weight: 600;

        &:hover{
            background: var(--pink);
            color: var(--gray-50);
        }
    }
`

