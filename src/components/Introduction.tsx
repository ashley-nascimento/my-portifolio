import { Background, BackgroundPurple, ButtonContainer, ImgContainer, Wrapper } from "../styles/introduction";
import { TypeWriter } from "./TypeWriter";

export function Introduction(){
    return(
        <Wrapper>
            <Background />
            <BackgroundPurple />
            <div>
                <div>
                    <strong>Hey! Eu sou</strong> 
                    <h1>Ashley Nascimento</h1>
                    <TypeWriter value="desenvolvedora front-end" />
                    <span>
                        Bem-vindo ao meu portifólio, sou formada em Análise e Desenvolvimento de Sistemas e iniciei no mercado o início de 2021. No momento estou me especializando em tecnologias web, especificamente em React.js e Next.js.
                    </span>

                    <div>
                        Me siga:
                    </div>

                    <ButtonContainer>
                        <button>Contato</button>
                        <button>Download CV</button>
                    </ButtonContainer>
                </div>

                <ImgContainer>
                    <img src="../../src/assets/introduction-img.jpg" alt="Garota Digitando" />
                </ImgContainer>

            </div>
        </Wrapper>
    )
}