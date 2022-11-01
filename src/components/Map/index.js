import React, { useState } from "react";
// import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps";
import GoogleMapReact from "google-map-react";
import { Marker } from "../Marker";

export const Map = ({ center, zoom, listings }) => {
  return (
    <div style={{ height: "100vh", width: "50%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA0XQQT7_FRe-RWuqLiFhCNFHIu0cWXFk4" }}
        defaultCenter={center}
        center={center}
        defaultZoom={zoom}
        zoom={zoom}
      >
        {listings.map((listing, id) => {
          return (
            <Marker key={id} lat={listing.latitude} lng={listing.longitude} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  zoom: 11,
  center: {
    lat: 0,
    lng: 0,
  },
};
