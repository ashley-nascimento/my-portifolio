import { Wrapper } from "../styles/stack";
import { House, User, Laptop, Phone, Code } from 'phosphor-react'

export function Stack(){
    return(
        <Wrapper id='stack'>
            <strong>
                <Code size={32} />
                Tecnologias
            </strong>

            React
            Next.js
            HTML5
            CSS
            SASS | SCSS
            Javascript
            TypeScript
            
        </Wrapper>
    )
}