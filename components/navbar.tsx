import React from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";
import Image from 'next/image'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 800px;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Image src="/logo.svg" alt="Sundown Boulevard" width={72} height={72} />
      <StyledLink href={`/#restauranter`}>RESTAURANTER</StyledLink>
      <StyledLink href={`/#produkter`}>PRODUKTER</StyledLink>
      <StyledLink href={`/#nyhedsbrev`}>NYHEDSBREV</StyledLink>
      <StyledLink href={`/#kontakt`}>KONTAKT</StyledLink>
    </Wrapper>
  );
};

export default Navbar;
