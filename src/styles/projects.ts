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
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 2rem;
        row-gap: 2rem;
        justify-content: space-evenly;

        @media(max-width: 768px){
            grid-template-columns: 1fr;
            margin: 0 3rem;
        }

        & > div{
            display: flex;
            flex-direction: column;
            justify-items: center;
            width: 100%;
            min-height: 26rem;
            max-width: 20rem;
            position: relative;
            box-sizing: border-box;
            color: #FFF;
            background: var(--black);
            background-clip: padding-box;
            border-radius: 2rem;
            transition: 0.5s;

            div:first-child{
                position: relative;
                width: 100%;
                overflow: hidden;
                border-radius: 2rem;
                height: 14rem;
            
                img{
                    width: 100%;
                    z-index: -99;
                }

                z-index: 1;
                /* transform: translateY(100px); */
                transition: 1s;
            }
            
            & > span{
                position: relative;
                z-index: 99;
                padding: 0.7rem 0.7rem;
                display: flex; 
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                font-size: 0.9rem;
                color: var(--title);
              
                border-radius: 100px;
                backdrop-filter: blur(2px);
                background-color: #7272721a;

                border-radius: 100px;
                margin: 0 2rem;
                margin-top: -1.5rem;
                transition: 1s;

                img{
                    width: 1.7rem;
                    height: 1.7rem;
                    border-radius: 100%;
                }
            }

            & > div:not(:first-child){
                display: flex;
                flex-direction: column;
                flex:1;
                /* transform: translateY(-100px); */
                transition: 1s;

                p{
                    padding: 2rem;
                    color: var(--gray-200);
                    font-size: 0.85rem;
                    text-align: center;
                }

                span{
                    display: block;
                    margin: auto;
                    width: 3rem;
                    height: 3px;
                    border-bottom: 3px solid var(--pink);
                }

                div{
                    border-radius: 2rem;
                    overflow: hidden;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;

                    a:first-child{
                        color: var(--gray-100);
                        &:hover{
                            color: var(--title);
                        }
                    }

                    a:last-child{
                        color: var(--pink-light);
                        &:hover{
                            color: var(--title);
                        }
                    }

                    a{
                        padding: 1.5rem;
                        flex: 1 1 auto;
                        text-decoration: none;
                        border-bottom: 3px solid transparent;
                        font-size: 0.9rem;
                        font-weight: bold;
                        text-align: center;

                        &:where(:hover, :focus-visible) {
                            background-size: 100% var(--bg-h);
                            background-position-x: left;
                            color: #2b2c48;
                            border-bottom: 3px solid rgba(240, 46, 170, 0.15);
                            background: linear-gradient(
                                to bottom,
                                rgba(240, 46, 170, 0.0) 0%,
                                rgba(240, 46, 170, 0.04) 44%,
                                rgba(240, 46, 170, 0.1) 100%
                            );
                            
                        }
                    }
                }
            }

            &:hover{
                box-shadow: 
                rgba(240, 46, 170, 0.5) 0 0 0 5px, 
                rgba(240, 46, 170, 0.15) 0 0 0 10px, 
                rgba(240, 46, 170, 0.1) 0 0 0 15px, 
                rgba(240, 46, 170, 0.05) 0 0 0 20px;
                transition: 1s;

                div:first-child{
                    transform: translateY(0);
                    opacity: 1;
                    z-index: 0;
                    border-top-left-radius: 2rem;
                    border-top-right-radius: 2rem;
                    border-bottom-left-radius: 20%;
                    border-bottom-right-radius: 20%;
                }

                & > span{
 
                    margin: 0 2.5rem;
                    margin-top: -1.5rem;

                }

                div:not(:first-child){
                    transform: translateY(0);
                }
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
        }
    }
`