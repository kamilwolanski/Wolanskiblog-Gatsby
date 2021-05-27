import styled from "styled-components"

export const RecentPostWrapper = styled.li`
  padding: 10px 15px;
  border-radius: 5px;
  list-style: none;

  @media (max-width: 650px) {
    margin: 5px 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};

    @media (min-width: 1800px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }

  .recentPost-title {
    font-weight: 700;
  }

  .recentPost-data {
    span {
      margin-right: 5px;
    }
  }
`
