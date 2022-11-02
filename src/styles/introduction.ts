import styled, {keyframes} from "styled-components"

export const steam = keyframes`
0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }

`

export const Wrapper = styled.section`
    height: 100vh;
    display:  flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-200);
    position: relative;

    & > span:first-child{
        background: radial-gradient(var(--pink) 0%, transparent  60%);
        opacity: 0.2;
        width: 1000px;
        height: 1000px;
        position: absolute;
        z-index: -99;
        top: -300px;
        left: -400px;
    }

    & > span:not(:first-child){
        background: radial-gradient(var(--purple) 0%, transparent  60%);
        opacity: 0.3;
        width: 1000px;
        height: 1000px;
        position: absolute;
        z-index: -98;
        top: -100px;
        left: -50px;
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
  
        padding: 1rem 2rem;
        font-weight: 600;
        display:  flex;
        align-items: center;
        gap: 0.5rem;

        transition: 0.5s;

        &:hover{
            border-color: transparent;
            color: var(--gray-50);
            box-shadow: inset 13.5em 0 0 0 var(--pink);

        }
    }
`

export const ImgContainer = styled.div`
    max-width: 500px; 
    border-radius: 100%;
    padding: 5px;
    position: relative;
    box-shadow: 
    rgba(240, 46, 170, 0.5) 0 0 0 5px, 
    rgba(240, 46, 170, 0.15) 0 0 0 10px, 
    rgba(240, 46, 170, 0.1) 0 0 0 15px, 
    rgba(240, 46, 170, 0.05) 0 0 0 20px;
    
    background-color: var(--gray-900);

    &:before, &:after {
        border-radius: 100%;
        content: '';
        position: absolute;
        left: -2px;
        top: -2px;
        background: linear-gradient(45deg, 
            var(--pink), 
            rgba(240, 46, 170, 0.2), 
            rgba(240, 46, 170, 0.15),
            rgba(240, 46, 170, 0.1), 
            rgba(240, 46, 170, 0.05), 
            var(--pink), 
            rgba(240, 46, 170, 0.2), 
            rgba(240, 46, 170, 0.15),
            rgba(240, 46, 170, 0.1), 
            rgba(240, 46, 170, 0.05)
            );
        background-size: 400%;
        width: calc(100% + 6px);
        height: calc(100% + 6px);
        z-index: -1;
        animation: ${steam} 20s linear infinite;
    }

    &:after {
        filter: blur(50px);
    }


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
