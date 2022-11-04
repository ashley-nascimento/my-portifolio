import styled from "styled-components"

export const Wrapper = styled.section`

    color: var(--gray-200);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > strong{
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


    article{ 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 2rem;
        row-gap: 2rem;
        justify-content: space-evenly;

        @media(max-width: 768px){
            grid-template-columns: 1fr;
            margin: 0 3rem;
        }

        & > div{
            width: 100%;
            min-height: 22rem;
            position: relative;
            box-sizing: border-box;
            color: #FFF;
            background: var(--black);
            background-clip: padding-box;

            border-radius: 2rem;

            &:hover{
                box-shadow: 
                    rgba(240, 46, 170, 0.5) 0 0 0 5px, 
                    rgba(240, 46, 170, 0.15) 0 0 0 10px, 
                    rgba(240, 46, 170, 0.1) 0 0 0 15px, 
                    rgba(240, 46, 170, 0.05) 0 0 0 20px;
                }

            &:before {
                content: '';
                position: absolute;
                top: 0; right: 0; bottom: 0; left: 0;
                z-index: -1;
                margin: -3px; 
                border-radius: inherit; 
                background: linear-gradient(to bottom right, var(--purple), var(--pink));
            }

            div:first-child{
                position: relative;
                width: 100%;
                height: 12rem;
                overflow: hidden;
                border-top-left-radius: 2rem;
                border-top-right-radius: 2rem;
                border-bottom-left-radius: 20%;
                border-bottom-right-radius: 20%;
            
                img{
                    width: 100%;
                    z-index: -99;
                }
            }
            
            
            & > span{
                z-index: 99;
                padding: 0.7rem 0.7rem;
                display: flex; 
                align-items: center;
                gap: 0.5rem;
                font-size: 0.8rem;
                color: var(--title);
                margin: 0 2.5rem;
                border-radius: 100px;
                backdrop-filter: blur(2px);
                background-color: #7272721a;
                margin-top: -1.5rem;

                img{
                    width: 1.7rem;
                    height: 1.7rem;
                    border-radius: 100%;
                }
            }

            div:not(:first-child){
                p{
                    padding: 1rem;
                    color: var(--gray-300);
                    font-size: 0.75rem;
                    text-align: center;
                    margin-bottom: 1rem;
                }

                span{
                    display: block;
                    margin: auto;
                    width: 3rem;
                    height: 3px;
                    border-bottom: 3px solid var(--pink);
                }

                div{
                    padding: 1rem 1rem 1.5rem 1rem;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    a:first-child{
                        color: var(--gray-100);
                        &:hover{
                            color: var(--pink);
                        }
                    }

                    a:last-child{
                        color: var(--pink-light);
                        &:hover{
                            color: var(--pink);
                        }
                    }

                    a{
                        text-decoration: none;
                        background: linear-gradient(90deg, var(--purple), var(--pink)) no-repeat right bottom / 0 var(--bg-h);
                        transition: background-size 350ms;
                        --bg-h: 2px;
                        font-size: 0.85rem;
                        font-weight: bold;
                        
                        &:where(:hover, :focus-visible) {
                            background-size: 100% var(--bg-h);
                            background-position-x: left;
                            
                        }
                    }
                }
            }


        }
    }
`