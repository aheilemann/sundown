import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 800px;
  align-items: center;
  justify-content: space-between;
`;

const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <StyledA href={`/`}>
        <Image src="/logo.svg" alt="Sundown Boulevard" width={72} height={72} />
      </StyledA>
      <StyledA href={`#restauranter`}>RESTAURANTER</StyledA>
      <StyledA href={`#produkter`}>PRODUKTER</StyledA>
      <StyledA href={`#nyhedsbrev`}>NYHEDSBREV</StyledA>
      <StyledA href={`#kontakt`}>KONTAKT</StyledA>
    </Wrapper>
  );
};

export default Navbar;
