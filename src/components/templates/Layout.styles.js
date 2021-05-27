import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto 1fr minmax(60px, auto);
  min-height: 100vh;
`
export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  grid-row: 5;
  font-size: 15px;
  filter: ${({ blur }) => (blur ? `blur(5px)` : `blur(0px)`)};

  @media (max-width: 550px) {
    font-size: 10px;
  }
`
