import axios from "axios";
import React, { useEffect, useState } from "react";
import { Listings } from "../../components/Listings";
import { Map } from "../../components/Map";
import { Searchbar } from "../../components/SearchBar";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import ClipLoader from "react-spinners/ClipLoader";
import { Container } from "./Styles";

export const Listing = ({
  search,
  setSearch,
  listings,
  fetchData,
  isLoading,
  user,
}) => {
  console.log(listings);
  return (
    <>
      <Searchbar
        user={user}
        setSearch={setSearch}
        search={search}
        fetchData={fetchData}
      />

      {!listings ? (
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
