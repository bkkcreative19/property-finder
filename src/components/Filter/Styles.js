import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #e5e7eb;
  display: flex;
  align-items: center;

  padding: 1.5em;
  margin-top: 1.5em;

  & h2 {
    font-size: 1.5rem;
    color: #2a2a33;
    font-weight: 600;
  }

  & div {
    margin-left: auto;
    font-size: 1.5rem;
    cursor: pointer;

    & div {
      padding-right: 3em;
    }

    & span {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  & svg {
    margin-left: 1em;
    cursor: pointer;
  }
`;
