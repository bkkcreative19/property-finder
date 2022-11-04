import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Filter } from "../../components/Filter";
import { SavedListing } from "../../components/SavedListing";
import { auth, getSavedListings } from "../../lib/firebase";
import { Container, SavedList } from "./Styles";

export const SavedHomes = ({ user }) => {
  const [saved, setSaved] = useState(null);
  useEffect(() => {
    if (user) {
      getSavedListings(user).then((res) => setSaved(res));
    }
  }, [user]);

  console.log(saved);
  return (
    <Container>
      <h1>Saved Homes</h1>
      <Filter count={saved?.length} />
      <SavedList>
        {saved?.map((saved, id) => {
          return <SavedListing key={id} listing={saved} />;
        })}
      </SavedList>
    </Container>
  );
};
