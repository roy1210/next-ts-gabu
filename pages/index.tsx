import React from "react";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import logo from "../src/assets/logo.png";
import TopNav from "../src/components/Home/TopNav";
import SearchBar from "../src/components/Common/SearchBar";
import SearchSuggestions from "../src/components/Home/SearchSuggestions";
import { useSelector, useDispatch } from "react-redux";
import { goNextStep } from "../src/state/yelp/actions";

const Home = (): JSX.Element => {
  const router = useRouter();
  const yelp = useSelector((state) => state.yelp);
  const { page } = yelp;
  const dispatch = useDispatch();

  const search = (term: string, location: string): void => {
    // Memo: Take care space issue for URL (like: San francisco)
    const urlEncodedTerm = encodeURI(term);
    const urlEncodedLocation = encodeURI(location);
    router.push(
      `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
    );
  };

  return (
    <HomeContainer>
      <div className="landing">
        <div className="search-area">
          <TopNav />
          <img src={logo} alt="logo" className="logo" />
          {/* <h1 className={styles.title}>Gabu's Dining</h1> */}
          <SearchBar search={search} />
          <SearchSuggestions />
        </div>
      </div>
      <div className="state-test">
        <h1>{page}</h1>
        <button
          onClick={() => {
            dispatch(goNextStep());
          }}
        >
          Action
        </button>
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  .logo {
    width: 12rem;
    height: 5rem;
    margin: 3rem 0;
  }

  .search-area {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .landing {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 4rem;
  }
`;
