import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Listing } from "./pages/Listing";

import { useAuthState } from "react-firebase-hooks/auth";

import { Login } from "./pages/Login";
import { auth } from "./lib/firebase";

import { SavedHomes } from "./pages/SavedHomes";
import { Register } from "./pages/Register";
import { PrivateRoute } from "./components/PrivateRoute";

export const App = () => {
  const [search, setSearch] = useState("");
  const [user, loading, error] = useAuthState(auth);
  // const [listings, setListings] = useState([]);
  const [center, setCenter] = useState({});

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route
          path="/"
          element={<Home search={search} setSearch={setSearch} />}
        />
        <Route
          path="/listing"
          element={
            <Listing
              search={search}
              setSearch={setSearch}
              center={center}
              user={user}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/saved"
          element={
            <PrivateRoute>
              <SavedHomes user={user} />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
