import React, { useEffect, useRef, useState } from "react";
import { Container } from "./Styles";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword } from "../../lib/firebase";
// import { useAuth } from "../../context/userContext";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  // const { signIn } = useAuth();

  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate(-1);
  }, [user, loading]);

  async function handleSubmit(e) {
    e.preventDefault();

    // @TODO: add login logic
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    logInWithEmailAndPassword(email, password);
    // Calls `signIn` function from the context
    // const { error } = await signIn({ email, password });

    // if (error) {
    //   alert("error signing in");
    // } else {
    //   // Redirect user to Dashboard
    //   navigate("/");
    // }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-email">Email</label>
        <input id="input-email" type="email" ref={emailRef} />

        <label htmlFor="input-password">Password</label>
        <input id="input-password" type="password" ref={passwordRef} />

        <br />

        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <button onClick={() => navigate("/register")}>Reister</button>
      </form>
    </>
  );
};
