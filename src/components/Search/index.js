import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Container, Input } from "./Styles";
import { useNavigate } from "react-router-dom";

export const Search = ({ search, setSearch, fetchData }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Input
        placeholder="Searn an Address, City, or ZIP code"
        onChange={(e) => setSearch(e.target.value)}
      />

      <IoIosSearch
        color="#000000"
        onClick={() => {
          if (search) {
            navigate("/listing");
            fetchData();
          }
        }}
        size="3em"
        cursor="pointer"
      />
    </Container>
  );
};
