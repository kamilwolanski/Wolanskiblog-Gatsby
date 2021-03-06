import styled from 'styled-components'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  grid-row: 1/1;
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 0px 20px;
  z-index: 2;

  @media (max-width: 550px) {
    padding: 0px 15px;
  }
`;