import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useLocation } from "react-use";
import NavBar from "../src/components/Search/NavBar";
import SearchResults from "../src/components/Search/SearchResults";
import SearchResultSummary from "../src/components/Search/SearchResultSummary";
import SubNav from "../src/components/Search/SubNav";
import { useBusinessSearch } from "../src/hocks/yelp-api/useBusinessSearch";

const Search = (): JSX.Element => {
  const router = useRouter();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const term = params.get("find_desc");
  const locationParam = params.get("find_loc");
  const [
    businesses,
    amountResults,
    searchParams,
    performSearch,
  ] = useBusinessSearch(term, locationParam);

  const search = (term: string, location: string): void => {
    const encodedTerm = encodeURI(term);
    const encodedLocation = encodeURI(location);
    router.push(`/search?find_desc=${encodedTerm}&find_loc=${encodedLocation}`);
    performSearch({ term, location });
  };

  useEffect(() => {
    if (!term || !locationParam) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <NavBar term={term} location={locationParam} search={search} />
      <SubNav />
      <SearchResultSummary
        term={searchParams.term}
        location={searchParams.location}
        amountResults={amountResults}
        shownResults={businesses ? businesses.length : 0}
      />
      <SearchResults businesses={businesses} />
    </>
  );
};

export default Search;
