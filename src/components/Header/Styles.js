import styled from "styled-components";

export const Container = styled.header`
  color: #000000;
  font-size: 1.6rem;
  padding: 1.5em 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5em;
  list-style: none;
`;

export const ListItem = styled.li`
  line-height: 1.25rem;
`;

export const LogoImg = styled.img`
  src: ${(props) => props.src};
  height: auto;
  max-width: 100%;
  width: 150px;
`;

export const AuthLinks = styled.ul`
  display: flex;
  gap: 1em;
`;

export const Login = styled.li`
  display: flex;
  cursor: pointer;
`;
