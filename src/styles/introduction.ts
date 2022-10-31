import styled, {keyframes} from "styled-components"

export const Wrapper = styled.section`
    height: 100vh;
    overflow: hidden;
    display:  flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-200);
    position: relative;

    & > span:first-child{
        background: radial-gradient(var(--pink) 0%, var(--gray-900) 60%);
        opacity: 0.2;
        width: 1000px;
        height: 1000px;
        position: absolute;
        z-index: -99;
        top: -300px;
        right: -400px;
    }

    & > span:not(:first-child){
        background: radial-gradient(#5837D0 0%, var(--gray-900) 60%);
        opacity: 0.3;
        width: 1000px;
        height: 1000px;
        position: absolute;
        z-index: -98;
        top: -100px;
        right: -100px;
    }

    & > article{
        gap: 2rem;
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

        & > div > div{
            nav{                
                margin-top: 1rem;
                font-size: 0.85rem;
                display:  flex;
                align-items: center;
                gap: 0.5rem;

                a{
                    color: var(--gray-300);
                    &:hover{
                        color: var(--pink-light);

                    }
                }
            }
        }
    }

    button{
        margin-top: 2rem;
        background: transparent;
        color: var(--gray-200);
        border: 1px solid var(--pink);
        border-radius: 5px;
        padding: 0.5rem 1rem;
        font-weight: 600;
        display:  flex;
        align-items: center;
        gap: 0.5rem;

        &:hover{
            background: var(--pink);
            color: var(--gray-50);
        }
    }
`
export const ImgContainer = styled.div`
    max-width: 500px; 
    
    box-shadow: 
    var(--pink) 0 0 0 5px, 
    rgba(240, 46, 170, 0.2) 0 0 0 10px, 
    rgba(240, 46, 170, 0.15) 0 0 0 15px, 
    rgba(240, 46, 170, 0.1) 0 0 0 20px, 
    rgba(240, 46, 170, 0.05) 0 0 0 25px;
    border-radius: 100%;
    padding: 5px;

    div{
        background: url('../../src/assets/introduction-img.jpg');
        background-size: cover;
        background-position: center;
        width: 350px;
        height: 350px;
        border-radius: 100%;
        

        @media (max-width: 768px){
            width: 200px;
            height: 200px;
        }
    }
`
