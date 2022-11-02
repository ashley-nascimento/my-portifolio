import { Wrapper } from "../styles/stack"
import { House, User, Laptop, Phone, Code } from 'phosphor-react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export function Stack(){

    const responsive = {
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
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
                Habilidades
            </strong>

            <article>
                <div>
                    <div>
                        <img src="/html-1.svg" alt="HTML" />
                    </div>
                    <p>
                        <b>
                            HTML
                        </b>
                        <span>
                            99%
                        </span>
                    </p>
                </div>

                <div>
                    <div>
                        <img src="/css-3.svg" alt="CSS" />
                    </div>
                    <p>
                        <b>
                            CSS
                        </b>
                        <span>
                            99%
                        </span>
                    </p>
                </div>

                <div>
                    <div>
                        <img src="/logo-javascript.svg" alt="JavaScript" />
                    </div>
                    <p>
                        <b>
                            JavaScript
                        </b>
                        <span>
                            99%
                        </span>
                    </p>
                </div>

                <div>
                    <div>
                        <img src="/react-2.svg" alt="React" />
                    </div>
                    <p>
                        <b>
                            React.js
                        </b>
                        <span>
                            99%
                        </span>
                    </p>
                </div>

                <div>
                    <div>
                        <img src="/typescript-2.svg" alt="TypeScript" />
                    </div>
                    <p>
                        <b>
                            TypeScript
                        </b>
                        <span>
                            99%
                        </span>
                    </p>
                </div>

                <div>
                    <div>
                        <img src="/sass-1.svg" alt="SASS" />
                    </div>
                    <p>
                        <b>
                            Sass
                        </b>
                        <span>
                            99%
                        </span>
                    </p>
                </div>

                <div>
                    <div>
                        <img src="/tailwind-css-2.svg" alt="Tailwind" />
                    </div>
                    <p>
                        <b>
                            TailwindCSS
                        </b>
                        <span>
                            99%
                        </span>
                    </p>
                </div>
            </article>
        </Wrapper>
    )
}