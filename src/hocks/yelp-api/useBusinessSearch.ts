import { useEffect, useState } from "react";
import { RawBusinessesObjects, RawSearchObject } from "../../types/types";
import yelp from "./yelp";

export const useBusinessSearch = (
  term: string | null,
  location: string | null
): [
  RawBusinessesObjects | null,
  number,
  {
    term: string | null;
    location: string | null;
  },
  React.Dispatch<
    React.SetStateAction<{
      term: string | null;
      location: string | null;
    }>
  >
] => {
  const [businesses, setBusinesses] = useState<RawBusinessesObjects | null>([]);
  const [amountResult, setAmountResult] = useState(0);
  const [searchParams, setSearchParams] = useState({ term, location });

  useEffect(() => {
    setBusinesses([]);
    const fetchData = async (): Promise<void> => {
      try {
        const response = await yelp.get("/businesses/search", {
          params: searchParams,
        });
        const data: RawSearchObject = response.data;
        // const rawData = await api.get("/businesses/search", searchParams);
        // const resp = await rawData.json();
        setBusinesses(data.businesses);
        setAmountResult(data.total);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [searchParams]);
  return [businesses, amountResult, searchParams, setSearchParams];
};
