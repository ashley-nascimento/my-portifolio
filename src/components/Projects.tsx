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
                    <div>
                        <img src="/home-desktop.png" alt="Projeto" />
                    </div>
                    <span>
                        <img src="/typescript-2.svg" alt="Projeto" />
                        <strong>
                            React Events Platform
                        </strong>
                    </span>
                    <div>
                        <p>
                            A Plaforma de Eventos é um sistema desenvolvido durante o evento Ignite Lab da Rocketseat.
                        </p>

                        <span></span>

                        <div>
                            <a href="#" no-referrer>Repositório</a>
                            <a href="#" no-referrer>Demostração</a>
                        </div>
                    </div>
                </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>

            </article>
        </Wrapper>
    )
}