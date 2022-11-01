import styled from "styled-components";

export const Container = styled.div`
  background: rgba(243, 244, 246, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7em;
  padding: 0 1.5em;
  border: 1px solid rgb(243, 244, 246);
  opacity: 0.8;
  margin: 2em 0;
`;

export const Input = styled.input`
  width: 650px;
  background: transparent;
  border: none;
  height: 100%;
  padding: 1em 0;
  font-size: 1.7rem;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin-left: 1em;
  background: #fff;
  border: 1px solid rgb(243, 244, 246);
  padding: 1.2em;
  cursor: pointer;
  height: fit-content;
  border-radius: 0.7em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1.5em;
  font-family: Poppins, sans-serif;
`;
