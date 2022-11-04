import axios from "axios";
import React from "react";
import { Listings } from "../../components/Listings";
import { Map } from "../../components/Map";
import { Searchbar } from "../../components/SearchBar";

import { useQuery } from "@tanstack/react-query";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "./Styles";
import { useSearchParams } from "react-router-dom";

export const Listing = ({ search, setSearch, user }) => {
  const [searchParams] = useSearchParams();

  const options = {
    method: "GET",
    url: "https://zillow69.p.rapidapi.com/search",
    params: { location: searchParams.get("search") },
    headers: {
      "X-RapidAPI-Key": "bcf0c334fbmsh6853786b6a668fcp14afbfjsn055230cfa5eb",
      "X-RapidAPI-Host": "zillow69.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    const { data } = await axios.request(options);

    return data.props;
  };

  const { data: listings, isLoading } = useQuery(
    ["listings", searchParams.get("search")],
    fetchData,
    {}
  );

  return (
    <>
      <Searchbar
        user={user}
        setSearch={setSearch}
        search={search}
        fetchData={fetchData}
      />

      {isLoading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ClipLoader
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <Container>
          <Map
            listings={listings}
            center={{ lat: listings[0].latitude, lng: listings[0].longitude }}
          />
          <Listings listings={listings} />
        </Container>
      )}
    </>
  );
};
