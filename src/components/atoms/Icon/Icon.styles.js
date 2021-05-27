import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: ${({ wrapperWidth }) => wrapperWidth}px;
height: ${({ wrapperWidth }) => wrapperWidth}px;
border: 1px solid gray;
border-radius: 50%;

:hover {
  background-color: ${({ theme }) => theme.colors.grey};
}

:nth-child(1) {
  font-size: ${({ iconSize }) => iconSize}px;
}
`;
