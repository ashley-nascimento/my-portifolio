import { Wrapper } from "../styles/stack"
import { House, User, Laptop, Phone, Code } from 'phosphor-react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export function Stack(){

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return(
        <Wrapper id='stack'>
            <strong>
                <Code size={32} />
                Tecnologias
            </strong>

            <article>

            <Carousel 
                responsive={responsive}
           
                >
                <div>
                    <img src="/react-2.svg" alt="React" />
                    React.js
                </div>
                <div>
                    <img src="/sass-1.svg" alt="SASS" />
                    Sass
                </div>
                <div>
                    <img src="/typescript-2.svg" alt="TypeScript" />
                    TypeScript
                </div>
                <div>
                    <img src="/html-1.svg" alt="HTML" />
                    HTML
                </div>
                <div>
                    <img src="/css-3.svg" alt="CSS" />
                    CSS
                </div>
                <div>
                    <img src="/logo-javascript.svg" alt="JavaScript" />
                    JavaScript
                </div>

                <div>
                    <img src="/tailwind-css-2.svg" alt="Tailwind" />
                    TailwindCSS
                </div>
                <div>
                    <img src="/bootstrap-5.svg" alt="Bootstrap" />
                    BootStrap
                </div>
                <div>
                    <img src="/jquery-2.svg" alt="jQuery" />
                    jQuery
                </div>
                <div>
                    <img src="/php-1.svg" alt="PHP" />
                    PHP
                </div>
            </Carousel>

            </article>
            
        </Wrapper>
    )
}