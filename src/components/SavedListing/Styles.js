import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #8080801a;
  border-bottom: 4px solid rgb(0 106 255);
  width: 390px;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 220px;
  width: 100%;
`;

export const Content = styled.div`
  padding: 0.5em;

  & p:first-child {
    font-size: 1.8rem;
    font-weight: 700;
  }
  & p:nth-child(2) {
    font-size: 1.6rem;
    margin: 0.1em 0;
  }
  & p:last-child {
    font-size: 1.4rem;
  }
`;
