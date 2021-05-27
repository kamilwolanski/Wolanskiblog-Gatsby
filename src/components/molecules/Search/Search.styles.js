import styled from 'styled-components';

export const SearchWrapper = styled.div`
  grid-row: 1;
  grid-column: 1/-1;
  font-size: 23px;
  position: relative;

  .search {
    display: flex;
    align-items: center;
  }

  p {
    margin: 20px 0;

    @media (max-width: 820px) {
      text-align: center;
    }
  }
`;
