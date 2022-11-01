import React from "react";
import { Hero } from "../../components/Hero";

export const Home = ({ search, setSearch, fetchData }) => {
  return (
    <>
      <Hero search={search} setSearch={setSearch} fetchData={fetchData} />
    </>
  );
};
