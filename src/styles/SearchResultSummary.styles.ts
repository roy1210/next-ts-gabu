import styled from "styled-components";

export const SearchResultSummaryContainer = styled.div`
  background: rgb(245, 245, 245);
  border: 1px solid rgb(230, 230, 230);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container > * {
    max-width: 74rem;
  }

  .search-summary {
    padding: 2rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .search-summary h1.subtitle {
    margin-bottom: 0;
  }

  .search-summary p {
    font-size: 0.9rem;
  }

  .filters {
    display: flex;
    width: 100%;
  }

  .filters > * {
    margin-right: 0.7rem;
  }
`;
