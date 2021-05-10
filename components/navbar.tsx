import React from "react";
import styled from "styled-components";
import Link from "next/link";
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
      <Link href={`/#restauranter`}>RESTAURANTER</Link>
      <Link href={`/#produkter`}>PRODUKTER</Link>
      <Link href={`/#nyhedsbrev`}>NYHEDSBREV</Link>
      <Link href={`/#kontakt`}>KONTAKT</Link>
    </Wrapper>
  );
};

export default Navbar;
