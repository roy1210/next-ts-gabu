import React from "react";
import { SearchResultSummaryContainer } from "src/styles/SearchResultSummary.styles";

interface Props {
  term: string | null;
  location: string | null;
  amountResults: number;
  shownResults: number;
}

const SearchResultSummary = (props: Props): JSX.Element => {
  const { term, location, amountResults, shownResults } = props;
  let resultsState = null;
  if (amountResults && shownResults) {
    resultsState = (
      <p>
        Showing 1-{shownResults} out of {amountResults} results
      </p>
    );
  }
  return (
    <SearchResultSummaryContainer>
      <div className="container">
        <div className="search-summary">
          <h1 className="subtitle">
            <strong>{term}</strong> {location}
          </h1>
          {resultsState}
        </div>
        <div className="filters">
          <button className="button">
            <span className="icon">
              <i className="fas fa-sliders-h" />
            </span>
            <span>All Filters</span>
          </button>
          <div className="buttons has-addons">
            <button className="button">$</button>
            <button className="button">$$</button>
            <button className="button">$$$</button>
            <button className="button">$$$$</button>
          </div>

          <button className="button">
            <span className="icon">
              <i className="fas fa-clock" />
            </span>
            <span>Open Now</span>
          </button>

          <button className="button">
            <span className="icon">
              <i className="fas fa-dollar-sign" />
            </span>
            <span>Cashback</span>
          </button>
        </div>
      </div>
    </SearchResultSummaryContainer>
  );
};

export default SearchResultSummary;
