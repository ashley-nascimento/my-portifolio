import { Wrapper } from "../styles/about";
import { User } from 'phosphor-react'

export function About(){
    return(
        <Wrapper id='about'>
            <strong>
                <User size={32} weight="bold" />
                Sobre mim
            </strong>
        </Wrapper>
    )
}