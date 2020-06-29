import React from "react";
import { RawBusinessesObject, Category } from "src/types/types";
import styled from "styled-components";
import BusinessRating from "../Common/BusinessRating";

interface Props {
  business: RawBusinessesObject | null;
}

const SearchResult = (props: Props): JSX.Element => {
  const { business } = props;
  if (!business) {
    return <div />;
  }
  const tags = business.categories.map((category: Category) => (
    <>
      <span className="tag" key={business.id + category.title}>
        {category.title}
      </span>{" "}
    </>
  ));

  const addressLines = business.location.display_address.map(
    (address: string) => <p key={business.id + address}>{address}</p>
  );

  return (
    <SearchResultContainer>
      <div className="search-result">
        <img
          src={business.image_url}
          alt="business"
          className="business-image"
        />

        <div className="business-info">
          <h2 className="subtitle">{business.name}</h2>
          <BusinessRating
            reviewCount={business.review_count}
            rating={business.rating}
          />
          <p>
            {business.price} {tags}
          </p>
        </div>

        <div className="contact-info">
          <p>{business.phone}</p>
          {addressLines}
        </div>
      </div>
    </SearchResultContainer>
  );
};

export default SearchResult;

const SearchResultContainer = styled.div`
  width: 100%;
  max-width: 74rem;
  .search-result {
    display: flex;
  }

  .business-image {
    width: 13rem;
    height: 13rem;
    border-radius: 0.25px;
    margin-right: 1rem;
  }

  .business-info {
    min-width: 25rem;
  }

  .business-info p {
    font-size: 1rem;
  }
  .contact-info p {
    font-size: 0.85rem;
  }
`;
