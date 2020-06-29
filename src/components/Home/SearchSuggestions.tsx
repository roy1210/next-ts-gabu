import React from "react";
import styled from "styled-components";

const SearchSuggestions = (): JSX.Element => {
  return (
    <SearchSuggestionsContainer>
      <div className="suggestions">
        <span className="icon is-small">
          <i className="fas fa-utensils" />
        </span>
        <span className="suggestion">Restaurant</span>
        <span className="icon is-small">
          <i className="fas fa-cocktail" />
        </span>
        <span className="suggestion">Nightlife</span>
        <span className="icon is-small">
          <i className="fas fa-concierge-bell" />
        </span>
        <span className="suggestion">Services</span>
        <span className="icon is-small">
          <i className="fas fa-truck" />
        </span>
        <span className="suggestion">Delivery Services</span>
      </div>
    </SearchSuggestionsContainer>
  );
};

export default SearchSuggestions;

const SearchSuggestionsContainer = styled.div`
  .suggestions {
    display: flex;
    margin-top: 1.2rem;
    align-items: center;
  }
  .suggestion {
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-right: 3.8rem;
  }
`;
