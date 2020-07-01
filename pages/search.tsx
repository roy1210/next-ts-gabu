import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useLocation } from "react-use";
import NavBar from "../src/components/Search/NavBar";
import SearchResults from "../src/components/Search/SearchResults";
import SearchResultSummary from "../src/components/Search/SearchResultSummary";
import SubNav from "../src/components/Search/SubNav";
import { useBusinessSearch } from "../src/hocks/yelp-api/useBusinessSearch";
import { useSelector, useDispatch } from "react-redux";
import { fetchBusinessRestaurantsAsync } from "../src/state/yelp/actions";

const Search = (): JSX.Element => {
  const router = useRouter();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log("location", location);

  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");

  const yelp = useSelector((state) => state.yelp);
  const { restaurants, total } = yelp;
  const dispatch = useDispatch();

  const search = (term: string, location: string): void => {
    dispatch(
      fetchBusinessRestaurantsAsync.request({
        term,
        location,
      })
    );
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    router.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
  };

  useEffect(() => {
    if (!term || !locationParam) {
      router.push("/");
    }
    if (restaurants === null) {
      dispatch(
        fetchBusinessRestaurantsAsync.request({
          term: term,
          location: locationParam,
        })
      );
    }
  }, []);

  return (
    <>
      <NavBar term={term} location={locationParam} search={search} />
      <SubNav />
      <SearchResultSummary
        term={decodeURI(term)}
        location={decodeURI(locationParam)}
        amountResults={total}
        shownResults={restaurants ? restaurants.length : 0}
      />
      <SearchResults businesses={restaurants} />
    </>
  );
};

export default Search;
