import React from "react";
import { Listings } from "../../components/Listings";
import { Map } from "../../components/Map";
import { Searchbar } from "../../components/SearchBar";

import { useQuery } from "@tanstack/react-query";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "./Styles";
import { useSearchParams } from "react-router-dom";

import { fetchData } from "../../services/getListings";

export const Listing = ({ search, setSearch, user }) => {
  const [searchParams] = useSearchParams();

  const { data: listings, isLoading } = useQuery({
    queryKey: ["listings", searchParams.get("search")],
    queryFn: () => fetchData(searchParams),
    refetchOnWindowFocus: false,
  });

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
