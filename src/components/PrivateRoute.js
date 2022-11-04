import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Route, redirect, Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebase";

export function PrivateRoute({ children }) {
  const [user, loading, error] = useAuthState(auth);

  return user ? children : <Navigate to="/login" />;
}
