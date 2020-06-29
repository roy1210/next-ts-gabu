import React from "react";
import Rating from "react-rating";
import styled from "styled-components";

interface Props {
  reviewCount: number;
  rating: number;
}

const BusinessRating = (props: Props): JSX.Element => {
  const { reviewCount, rating } = props;
  return (
    <BusinessRatingContainer>
      <div className="rating">
        <Rating
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          fractions={2}
          readonly
          initialRating={rating}
        />
        <p>{reviewCount} Reviews</p>
      </div>
    </BusinessRatingContainer>
  );
};

export default BusinessRating;

const BusinessRatingContainer = styled.div`
  .rating {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }

  .rating > * {
    margin-right: 4px;
  }

  .rating p {
    font-size: 0.85rem;
  }
`;
