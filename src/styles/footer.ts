import styled, {keyframes} from "styled-components"

export const spinner = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

export const Wrapper = styled.footer`
    padding: 1.5rem 2rem;
    background-color: var(--gray-800);
    color: var(--gray-200);
    letter-spacing: 0.1rem;
    display: flex;
    justify-content: center;
    margin-top: 10rem;

    align-items: center;
    gap: 0.5rem;

    a{
        color: var(--pink);
    }

    img{
        width: 26px;
        animation: ${spinner} 2s linear infinite;
    }
`

