import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { Home } from "./pages/Home";
import { Listing } from "./pages/Listing";
import { useQuery } from "@tanstack/react-query";
import { data } from "./data";
import { Login } from "./pages/Login";

// import { AuthProvider } from "./context/userContext";

import { SavedHomes } from "./pages/SavedHomes";
import { Register } from "./pages/Register";

export const App = () => {
  const [search, setSearch] = useState("76137");
  const [user, setUser] = useState(null);
  // const [listings, setListings] = useState([]);
  const [center, setCenter] = useState({});

  const options = {
    method: "GET",
    url: "https://zillow69.p.rapidapi.com/search",
    params: { location: search },
    headers: {
      "X-RapidAPI-Key": "9b29c726c4msh581818ca013db10p1ea7aajsn77872836f6b7",
      "X-RapidAPI-Host": "zillow69.p.rapidapi.com",
    },
  };

  console.log(user);

  const handleClick = () => {
    // manually refetch
    // refetch();
  };
  // console.log(data);
  const fetchData = async () => {
    // const { data } = await axios.request(options);
    return "data";
  };

  // const { data, refetch, isLoading } = useQuery(["listings"], fetchData, {
  //   refetchOnWindowFocus: false,
  //   enabled: false,
  // });

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              fetchData={handleClick}
              search={search}
              setSearch={setSearch}
            />
          }
        />
        <Route
          path="/listing"
          element={
            <Listing
              fetchData={handleClick}
              // listings={!isLoading && data.props}
              listings={data.props}
              search={search}
              setSearch={setSearch}
              center={center}
              user={user}
              // isLoading={isLoading}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/saved" element={<SavedHomes />} />
      </Routes>
    </>
  );
};
