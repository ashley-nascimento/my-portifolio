import { Wrapper } from "../styles/stack";
import { House, User, Laptop, Phone, Code } from 'phosphor-react'

export function Stack(){
    return(
        <Wrapper id='stack'>
            <strong>
                <Code size={32} />
                Tecnologias
            </strong>
        </Wrapper>
    )
}