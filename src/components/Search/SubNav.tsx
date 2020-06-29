import React from "react";
import styled from "styled-components";
import SubNavItem from "./SubNavItem";

const SubNav = (): JSX.Element => {
  return (
    <SubNavContainer>
      <div className="container">
        <div className="sub-nav">
          <div className="left">
            <SubNavItem label="Restaurant" icon="fa-utensils" />
            <SubNavItem label="Home Services" icon="fa-home" />
            <SubNavItem label="Auto Services" icon="fa-car-side" />
            <SubNavItem label="More" icon="fa-info-circle" showRightBorder />
          </div>
          <div className="right">
            <button className="button sub-nav-button omit-right-border">
              <span className="icon">
                <i className="fas fa-pen" />
              </span>
              <span>Write a Review</span>
            </button>
            <button className="button sub-nav-button">
              <span className="icon">
                <i className="fas fa-hotel" />
              </span>
              <span>For Businesses</span>
            </button>
          </div>
        </div>
      </div>
    </SubNavContainer>
  );
};

export default SubNav;

const SubNavContainer = styled.div`
  .container {
    display: flex;
    justify-content: center;
  }

  .sub-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 74rem;
    width: 100%;
  }

  .button.sub-nav-button {
    border-radius: 0;
    border-bottom: 0;
    border-top: 0;
  }

  .button.omit-right-border {
    border-right: none;
  }
  .left {
    display: flex;
    justify-content: space-between;
  }
`;
