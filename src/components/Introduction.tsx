import { ImgContainer, Wrapper } from "../styles/introduction";
import { TypeWriter } from "./TypeWriter";
import { LinkedinLogo, GithubLogo, InstagramLogo, DownloadSimple } from 'phosphor-react'
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export function Introduction(){
    return(
        <Wrapper id='home'>
            <span></span>
            <span></span>
            <article>
                <div>
                    <strong>Olá 👋! Eu sou</strong> 
                    <h1>Ashley Nascimento</h1>
                    <TypeWriter value="desenvolvedora front-end" />
                    <span>
                        Sou formada em Análise e Desenvolvimento de Sistemas e estou me especializando em tecnologias web, especificamente em React.js.
                    </span>

                    <div>
                        <nav> 
                            <a href="#"><LinkedinLogo size={22} weight="fill" /></a>                           
                            <a href="#"><GithubLogo size={22} weight="fill" /> </a>                           
                            <a href="#"><InstagramLogo size={22} weight="fill" /></a>                           
                        </nav>
                    </div>

                    <div>                        
                        <button>
                            <DownloadSimple size={16} weight="bold" />
                            Download CV
                        </button>
                    </div>
                </div>

                <ImgContainer>
                    <div></div>
                </ImgContainer>
            </article>
        </Wrapper>
    )
}