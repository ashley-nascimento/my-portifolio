import styled, { keyframes }  from "styled-components"

const blinkTextCursor = keyframes`
  from {border-right-color: var(--pink)}
  to {border-right-color: transparent}
`

export const TextCursor = styled.span`
  border-right: 2px solid var(--pink);
  display: inline;
  animation: ${blinkTextCursor} 0.7s steps(44) infinite;
`

export const Container = styled.p`
  display: inline-block;
  margin: 0;
  color: var(--pink);
  text-transform: uppercase;
  font-weight: 600;
`