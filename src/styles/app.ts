import styled from "styled-components"

export const Wrapper = styled.div`
    main{
        @media (min-width: 768px){
            margin-left: 80px;
        }

        section{
            padding: 1rem;
            
            article{
                max-width: 1200px;
                width: 100%;   
            }
        }
    }
`