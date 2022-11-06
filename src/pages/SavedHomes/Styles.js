import styled from "styled-components";

export const Container = styled.section`
  width: 70%;
  margin: 0 auto;
  margin-bottom: 4em;

  & h1 {
    margin-top: 2em;
    font-size: 3rem;
    color: rgb(55 65 81);
  }
`;

export const SavedList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  gap: 2em;
  margin-top: 2em;

  & div {
    flex-grow: 1;
  }
`;
