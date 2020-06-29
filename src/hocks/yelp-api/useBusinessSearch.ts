import { RawBusinessesObjects } from "../../types/types";
import { useState, useEffect } from "react";
import * as api from "./api";
import { BEARER_TOKEN } from "./config";

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
    const fetchData = async () => {
      try {
        console.log(BEARER_TOKEN);
        const rawData = await api.get("/businesses/search", searchParams);
        const resp = await rawData.json();
        setBusinesses(resp.businesses);
        setAmountResult(resp.total);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [searchParams]);
  return [businesses, amountResult, searchParams, setSearchParams];
};
