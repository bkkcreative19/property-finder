import React from "react";

import {
  AuthLinks,
  Container,
  List,
  ListItem,
  Login,
  LogoImg,
  Nav,
  Register,
} from "./Styles";
import Logo from "../../images/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "../../lib/firebase";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  return (
    <Container
      style={{
        borderBottom:
          location.pathname.length > 1 && "1px solid rgb(243, 244, 246)",
      }}
    >
      <Nav>
        <List>
          <ListItem>Buy</ListItem>
          <ListItem>Rent</ListItem>
          <ListItem>Sell</ListItem>
          <ListItem>Loans</ListItem>
          <ListItem>Agents</ListItem>
        </List>
        <Link to="/">
          <LogoImg src={Logo} />
        </Link>

        <AuthLinks>
          {!user ? (
            <Login onClick={() => navigate("/login")}>Sign In</Login>
          ) : (
            <Login onClick={logout}>Sign Out</Login>
          )}
        </AuthLinks>
      </Nav>
    </Container>
  );
};
