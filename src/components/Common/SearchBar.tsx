import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import styled from "styled-components";

interface Props {
  small?: boolean;
  term?: string | null;
  location?: string | null;
  search?: (term: string, location: string) => void;
}

const SearchBar = (props: Props): JSX.Element => {
  const { small, search } = props;
  const sizeClass = small ? "" : "is-medium";
  const [term, setTerm] = useState(props.term || "");
  const [location, setLocation] = useState(props.location || "");

  const submit = (event: MouseEvent | FormEvent): void => {
    if (typeof props.search === "function") {
      search!(term, location);
    }
    event.preventDefault();
  };

  return (
    <SearchBarContainer>
      <form onSubmit={(e: FormEvent): void => submit(e)}>
        <div className="field has-addons">
          <p className="control">
            <button className={`button is-static ${sizeClass}`}>SEARCH</button>
          </p>
          <p className="control">
            <input
              className={`input ${sizeClass} input-control`}
              type="text"
              placeholder="burgers, barbers, spas, handymen"
              value={term}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setTerm(e.target.value)
              }
            />
          </p>
          <div className="control">
            <div className={`button is-static ${sizeClass}`}>NEAR</div>
          </div>
          <p className="control">
            <input
              className={`input ${sizeClass} input-control`}
              type="text"
              placeholder="Where"
              value={location}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setLocation(e.target.value)
              }
            />
          </p>
          <div
            className={`button ${sizeClass} search-button`}
            onClick={(e: MouseEvent): void => submit(e)}
          >
            <span className="icon is-small search-icon">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
      </form>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  .input-control {
    min-width: 21rem;
  }

  .button.search-button {
    background: #bd1f1f;
    border: none;
  }

  .icon.search-icon {
    color: white;
  }
`;
