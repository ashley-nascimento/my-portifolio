import { Wrapper } from "../styles/projects";
import { Laptop } from 'phosphor-react'

export function Projects(){
    return(
        <Wrapper id='projects'>
            <strong>
                <Laptop size={32} />
                Meus projetos
            </strong>

            <article>

            </article>
        </Wrapper>
    )
}