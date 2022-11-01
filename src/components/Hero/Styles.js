import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90vh;
  position: relative;
`;

export const BG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #1a202c;
  opacity: 0.5;
`;

export const Image = styled.img`
  src: ${(props) => props.src};
  object-fit: cover;
`;

export const Container = styled.div`
  background: url(${(props) => props.img}) center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 37%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
