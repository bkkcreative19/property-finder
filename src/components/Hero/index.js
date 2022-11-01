import React from "react";
import { BG, Container, Image, Wrapper } from "./Styles";
import HeroImg from "../../images/hero.jpg";
import { Search } from "../Search";

export const Hero = ({ search, setSearch, fetchData }) => {
  return (
    <Wrapper>
      <Image src={HeroImg} height="100%" width="100%" />
      <BG />
      <Container>
        <Search fetchData={fetchData} search={search} setSearch={setSearch} />
      </Container>
    </Wrapper>
  );
};
