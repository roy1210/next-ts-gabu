import React from "react";
import styled from "styled-components";

const TopNav = (): JSX.Element => {
  return (
    <TopNavContainer>
      <div className="top-nav">
        <div className="left">
          <span>Write a Review</span>
          <span>Events</span>
        </div>
        <div className="right">
          <span>Login</span>
          <button className="button">Sign up</button>
        </div>
      </div>
    </TopNavContainer>
  );
};

export default TopNav;

const elementSpacing = "2.3rem";

const TopNavContainer = styled.div`
  width: 100%;

  span {
    font-size: 1.2rem;
  }
  .top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${elementSpacing};
  }

  /* Memo: Everything inside of left-class */
  .left > * {
    margin-right: ${elementSpacing};
  }

  .right {
    align-items: center;
    display: flex;
  }

  .right > * {
    margin-left: ${elementSpacing};
  }
`;
