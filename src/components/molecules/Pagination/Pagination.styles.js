import styled from "styled-components"
import "../../../styles/_fonts.css"

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-column: 1;
  grid-row: 3;
  margin: 0 auto;

  @media (max-width: 820px) {
    grid-column: 1/-1;
    display: flex;
    align-items: center;
    grid-row: 3;
    padding: 40px 0;
  }
`

export const PaginationBtn = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 4px;
  border-radius: 50%;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.lightBlack : "#e2e2e2"};
  color: ${({ disabled, theme }) =>
    disabled ? "white" : theme.colors.lightBlack};
  width: 30px;
  height: 30px;
  border: none;
  font-family: "Oswald", sans-serif;
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled && "none"};

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.lightBlack};
    color: ${({ theme }) => theme.colors.white};
  }
`

export const PrevNextBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: "Oswald", sans-serif;
  text-decoration: underline;
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin: 0 8px;
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled && "none"};
  color: ${({ disabled }) => disabled && "gray"};
`
