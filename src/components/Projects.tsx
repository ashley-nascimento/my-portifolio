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
                <div>
                    <img src="/home-desktop.png" alt="Projeto" />
                    {/* <h1>
                        Nome do projeto
                    </h1>
                    <p>
                        descrição
                    </p> */}
                </div>
            </article>
        </Wrapper>
    )
}