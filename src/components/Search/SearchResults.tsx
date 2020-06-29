import React from "react";
import { RawBusinessesObjects, RawBusinessesObject } from "../../types/types";
import SearchResult from "./SearchResult";
import Spinner from "../Common/Spinner";
import styled from "styled-components";

interface Props {
  businesses: RawBusinessesObjects | null;
}

const SearchResults = (props: Props): JSX.Element => {
  const { businesses } = props;
  let searchResults;

  if (businesses && businesses.length) {
    searchResults = businesses.map((business: RawBusinessesObject) => (
      <SearchResult key={business.id} business={business} />
    ));
  } else {
    searchResults = <Spinner />;
  }

  return (
    <SearchResultsContainer>
      <div className="search-results">{searchResults}</div>
    </SearchResultsContainer>
  );
};

export default SearchResults;

const SearchResultsContainer = styled.div`
  .search-results {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .search-results > * {
    margin-top: 1rem;
  }
`;
