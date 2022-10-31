import { Wrapper } from "../styles/about";
import { User } from 'phosphor-react'

export function About(){
    return(
        <Wrapper id='about'>
            <strong>
                <User size={32} weight="bold" />
                Sobre mim
            </strong>

            <article>

                <div>
                    <img src="../../src/assets/undraw_react_re_g3ui.svg" alt="React" />
                </div>

                <p>
                    Meu nome é Ashley, sou formada em Análise e
                    Desenvolvimento de Sistemas pela Fatec e trabalho
                    como desenvolvedora há 1 ano e 7 meses, nesse 
                    meio tempo eu tive contato com os mais diversos 
                    modelos de negócio, desde plataforma escolar à
                    sistemas de gestão mais complexos com integração 
                    com Web Service dos Correios.

                    Atualmente estou estudando TypeScript e backend com Node.js.

                    Como programadora sou uma pessoa muito cuidadosa com meus códigos, 
                    gosto sempre se me supperar seja em qualidade de código, ou lógica, 
                    busco sempre o melhor resultado, um front-end limpo, rápido, eficiente, 
                    que atenda bem as necessidades do meu cliente e deixe os olhinos dele 
                    brilhando ❤️
                </p>

            </article>
        </Wrapper>
    )
}