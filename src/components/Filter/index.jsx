import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { Container } from "./Styles";
import { BsSortDown, BsSortUp } from "react-icons/bs";

export const Filter = ({
  count,
  setFilter,
  defaultValue,
  keys,
  sortHow,
  setSortHow,
}) => {
  return (
    <Container>
      <h2>{count} saved homes</h2>

      <Dropdown
        options={keys}
        onChange={(e) => setFilter(e.value)}
        value={defaultValue}
        placeholder="Select an option"
      />

      {sortHow === "Ascending" ? (
        <BsSortUp
          onClick={() => setSortHow("Descending")}
          size="2.5em"
          color="#006AFF"
        />
      ) : (
        <BsSortDown
          onClick={() => setSortHow("Ascending")}
          size="2.5em"
          color="#006AFF"
        />
      )}
    </Container>
  );
};
