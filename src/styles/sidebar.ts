import styled, { keyframes } from "styled-components"

export const JellyAnimation = keyframes`
    25%{
	    transform: scale(0.8,1.2);
    }
    50%{
	    transform: scale(1.2,0.8);
    }
    75%{
	    transform: scale(0.8,1.2);
    }
`

export const SidebarContainer = styled.aside`
    width: 80px;
    height: 100vh;
    position: fixed;
    background-color: #00000022;

    @media (max-width: 768px){
        display: none;
    }

    nav{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        height: 100%;

        a{
            color: var(--gray-300);
            width: 100%;
            display: block;
            text-align: center;

            &:hover{
                color: var(--gray-50);
                animation: ${JellyAnimation} 0.6s normal;
            }
        }
    }
`
