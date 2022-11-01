import React from "react";
import { Listing } from "./Listing";
import { Container } from "./Styles";

export const Listings = ({ listings }) => {
  // console.log(listings);
  return (
    <Container>
      {listings?.map((listing, id) => {
        return <Listing key={id} listing={listing} />;
      })}
    </Container>
  );
};
