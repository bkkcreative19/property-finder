import React from "react";
import { Container, Content, Image } from "./Styles";

export const Listing = ({ listing }) => {
  return (
    <Container>
      <Image src={listing.imgSrc} />
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
