import React from "react";
import styled from "styled-components";

const Spinner = (): JSX.Element => {
  return (
    <SpinnerContainer>
      <div className="button is-loading is-large spinner">Loading</div>
    </SpinnerContainer>
  );
};

export default Spinner;

const SpinnerContainer = styled.div`
  .button.spinner {
    border: none;
  }
`;
