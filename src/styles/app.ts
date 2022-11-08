import styled from "styled-components"

export const Wrapper = styled.div`
    overflow: hidden;
    
    main{
        @media (min-width: 768px){
            margin-left: 80px;
        }

        section{
            padding: 1rem;
            
            article{
                max-width: 1080px;
                width: 100%;   
            }
        }
    }

    footer{
        @media (min-width: 768px){
            margin-left: 80px;
        }
    }
`