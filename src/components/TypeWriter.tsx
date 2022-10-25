import { useEffect, useState } from "react"
import { Container, TextCursor } from "../styles/typeWriter";

export interface TypeWriterProps{
    value: string;
}

export function TypeWriter({ value } : TypeWriterProps){

    const [text, setText] = useState<string>('')

    const typeWriter = (text : string, i = 0) => {
        if (i < value.length) {
          setText(text.slice(0, i + 1));
          setTimeout(() => {
            typeWriter(text, i + 1);
          }, 100);
        }
      }

      useEffect(() => {
        typeWriter(value);
      }, []);

    return(
        <Container>
            {text}
            <TextCursor />
        </Container>
    )
}