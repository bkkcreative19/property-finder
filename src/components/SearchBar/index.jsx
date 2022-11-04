import React from "react";
import { Button, Container, Input } from "./Styles";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";

export const Searchbar = ({ fetchData, search, setSearch }) => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Input
          placeholder="Searn an Address, City, or ZIP code"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <IoIosSearch
          color="#000000"
          onClick={() => search && navigate(`/listing?search=${search}`)}
          size="2.5em"
          cursor="pointer"
        />
      </Container>
      <Button
        onClick={() => {
          if (!user) {
            alert("Sign in to see saved homes");
            return;
          }

          // console.log("hi");
          navigate("/saved");
        }}
      >
        <AiOutlineHeart size="1.5em" /> Saved Listings
      </Button>
    </div>
  );
};
