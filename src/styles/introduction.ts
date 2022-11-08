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
    min-height: 100vh;
    display:  flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-200);
    position: relative;

    @media(max-width: 768px){
        text-align: center;
    }

    & > span:first-child{
        background: radial-gradient(var(--pink) 0%, transparent  60%);
        opacity: 0.2;
        width: 80%;
        height: 80%;
        position: absolute;
        z-index: -99;
        top: -30%;
        left: -30%;
    }

    & > span:not(:first-child){
        background: radial-gradient(var(--purple) 0%, transparent  60%);
        opacity: 0.3;
        width: 80%;
        height: 80%;
        position: absolute;
        z-index: -98;
        top: -10%;
        left: -10%;
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
            color: var(--title);
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
                @media(max-width: 768px){
                    justify-content: center;
                }


                a{
                    color: var(--gray-300);
                    &:hover{
                        color: var(--pink-light);

                    }
                }
            }
        }
        button{
            @media(max-width: 768px){
                width: 100%;
                justify-content: center;
            }


            margin-top: 2rem;
            color: var(--gray-200);
            border-radius: 100px;
            padding: 1rem 2rem;
            font-weight: 600;
            display:  flex;
            align-items: center;
            gap: 0.5rem;

            background-color: transparent;
            border: 0;
            position: relative;
            z-index: 0;

            transition: 2s;

            &::after{
                content: "";
                position: absolute;
                z-index: -1;
                inset: 0;
                padding: 2px;
       
                background: linear-gradient(to right, var(--purple),  var(--pink));
                -webkit-mask: 
                    linear-gradient(#fff 0 0) content-box, 
                    linear-gradient(#fff 0 0);
                mask: 
                    linear-gradient(#fff 0 0) content-box, 
                    linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;

                border-radius: 100px;
            }
    
            &:hover{
    
                color: var(--title);

                box-shadow: inset 7em 0 50px 0 var(--purple),
                inset 100em 0 0 0 var(--pink);
            }
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
