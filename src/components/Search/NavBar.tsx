import React from "react";
import logo from "AT/assets/logo.png";
import Link from "next/link";
import SearchBar from "../Common/SearchBar";
import styled from "styled-components";

interface Props {
  term: string | null;
  location: string | null;
  search: (arg0: string, arg1: string) => void;
}

const NavBar = (props: Props): JSX.Element => {
  const { term, location, search } = props;
  return (
    <NavBarContainer>
      <div className="nav-bar">
        <Link href="/">
          {/* <a> */}
          <img src={logo} alt="logo" className="logo" />
          {/* </a> */}
          {/* <h1>Gabu</h1> */}
        </Link>
        <SearchBar small term={term} location={location} search={search} />
        <button className="button nav-button">Sign In</button>
        <button className="button nav-button">Register</button>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  .nav-bar {
    display: flex;
    background: #d32323;
    padding: 1rem 0;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 4.8rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  .button.nav-button {
    margin-left: 1rem;
  }
`;
