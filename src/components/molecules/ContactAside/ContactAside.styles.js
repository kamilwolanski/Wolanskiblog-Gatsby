import styled from "styled-components"

export const ContactAsideWrapper = styled.div`
  text-align: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 700;

    @media (min-width: 1800px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }

  button {
    margin-top: 20px;
  }
`
