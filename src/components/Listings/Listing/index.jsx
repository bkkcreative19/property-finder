import React from "react";
import { Container, Content, Heart, Image } from "./Styles";
import { addSavedListing, auth } from "../../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Listing = ({ listing }) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Container>
      <Image src={listing.imgSrc} />
      <Heart
        onClick={() => addSavedListing({ ...listing, user: user.uid })}
        color="#ffffff"
        size="2.5em"
      />
      <Content>
        <p>${listing.price}</p>
        <p>
          {listing.bedrooms} bds | {listing.bathrooms} ba | {listing.livingArea}{" "}
          sqft
        </p>
        <p>{listing.address}</p>
      </Content>
    </Container>
  );
};
