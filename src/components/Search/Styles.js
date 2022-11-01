import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.7em;
  padding: 0 1.5em;
  opacity: 0.8;
`;

export const Input = styled.input`
  width: 650px;

  background: transparent;
  border: none;
  height: 100%;
  padding: 1.5em 0;
  font-size: 1.7rem;
  &:focus {
    outline: none;
  }
`;
