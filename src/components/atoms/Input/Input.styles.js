import styled from "styled-components"

export const InputStyled = styled.input`
  padding: ${({ paddingtb = 0, paddinglr = 0 }) =>
    `${paddingtb}px ${paddinglr}px`};
  margin: ${({ margintb = 0, marginlr = 0 }) => `${margintb}px ${marginlr}px`};
  border-radius: 5px;
  border: ${({ borderWeight = 1 }) => `${borderWeight}px`} solid #363636;
  width: ${({ width }) => `${width}%`};
  font-size: ${({ fontSize = 15 }) => `${fontSize}px`};

  @media (min-width: 1800) {
    font-size: 20px;
  }

  @media (max-width: 820px) {
    width: 100%;
  }
`
