import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
  icon: string;
  showRightBorder?: boolean;
}

const SubNavItem = (props: Props): JSX.Element => {
  const { label, icon, showRightBorder } = props;
  const borderClass = showRightBorder ? "right-border" : "";
  return (
    <SubNavItemContainer>
      <div className="dropdown is-hoverable">
        <div className="dropdown-trigger">
          <div
            className={`sub-nav-item ${borderClass}`}
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span className="icon is-small">
              <i className={`fas ${icon}`} aria-hidden="true" />
            </span>
            <span className="suggestion">{label}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content">
            <div className="dropdown-item">
              <p>
                You can insert <strong>any type of content</strong> within the
                dropdown menu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SubNavItemContainer>
  );
};

export default SubNavItem;

const SubNavItemContainer = styled.div`
  span {
    font-size: 1rem;
  }
  .sub-nav-item {
    padding: 0.35rem;
    display: flex;
    align-items: center;
    border-left: 1px solid rgb(230, 230, 230);
  }

  .sub-nav-item > * {
    margin-right: 4px;
  }

  .right-border {
    border-right: 1px solid rgb(230, 230, 230);
  }
`;
