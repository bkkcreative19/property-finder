import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Filter } from "../../components/Filter";
import { SavedListing } from "../../components/SavedListing";
import { auth, getSavedListings } from "../../lib/firebase";
import { Container, SavedList } from "./Styles";

export const SavedHomes = ({ user }) => {
  const [saved, setSaved] = useState(null);
  const [filter, setFilter] = useState("Price");
  const [sortHow, setSortHow] = useState("Ascending");

  const options =
    // "Highest Price",
    // "Lowest Price",
    // "Most Bedrooms",
    // "Least Bedrooms",
    // "Most Bathrooms",
    // "Least Bathrooms",
    {
      Price: "price",
      Bedrooms: "bedrooms",
      Bathrooms: "bathrooms",
      "By home size (sq. ft.)": "livingArea",
      "Date added": "createdAt",
    };
  // "Price",
  // "Bedrooms",
  // "Bathrooms",
  // "Living Area",
  const keys = Object.keys(options);

  useEffect(() => {
    if (user) {
      getSavedListings(user).then((res) => setSaved(res));
    }
  }, [user]);

  const filteredItems = filterItems(filter, saved, options, sortHow);

  return (
    <Container>
      <h1>Saved Homes</h1>
      <Filter
        defaultValue={filter}
        setFilter={setFilter}
        count={saved?.length}
        keys={keys}
        sortHow={sortHow}
        setSortHow={setSortHow}
      />
      <SavedList>
        {filteredItems?.map((saved, id) => {
          return <SavedListing key={id} listing={saved} />;
        })}
      </SavedList>
    </Container>
  );
};

const filterItems = (filter, items, options, sortHow) => {
  if (!items) return;
  let sorted = items;

  // filter = filter.toLowerCase();
  // console.log(options);
  // console.log();

  sorted = sorted.sort(function (a, b) {
    // console.log(a[filter]);
    if (sortHow === "Ascending") {
      return a[options[filter]] - b[options[filter]];
    } else {
      return b[options[filter]] - a[options[filter]];
    }
  });

  // if (filter === "Highest Price") {
  //   sorted = sorted.sort(function (a, b) {
  //     return b.price - a.price;
  //   });
  // }
  // if (filter === "Lowest Price") {
  //   sorted = sorted.sort(function (a, b) {
  //     return a.price - b.price;
  //   });
  // }
  // if (filter === "Most Bedrooms") {
  //   sorted = sorted.sort(function (a, b) {
  //     return b.bedrooms - a.bedrooms;
  //   });
  // }
  // if (filter === "Least Bedrooms") {
  //   sorted = sorted.sort(function (a, b) {
  //     return a.bedrooms - b.bedrooms;
  //   });
  // }
  // if (filter === "Most Bathrooms") {
  //   sorted = sorted.sort(function (a, b) {
  //     return b.bathrooms - a.bathrooms;
  //   });
  // }
  // if (filter === "Least Bathrooms") {
  //   sorted = sorted.sort(function (a, b) {
  //     return a.bathrooms - b.bathrooms;
  //   });
  // }

  console.log(sorted);

  return sorted;
};
