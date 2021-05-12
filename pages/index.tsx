import styled from "styled-components";
import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";
import Link from "next/link";
import { useState } from "react";
import { Text, H2, H3 } from "../common/TextElements";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

const Grid = styled.div`
  align-items: center;
  justify-content: center;

  width: 800px;
  max-width: 800px;
  margin-top: 3rem;
`;

const Row = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

const Col = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 1rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  flex: ${(props) => props.size};
  min-height: 12rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 200px;
`;

const ImageSrc = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  const [email, setEmail] = useState("");
  return (
    <Wrapper>
      <Navbar />
      <Grid>
        <Row>
          <Col size={7}>
          <ImageSrc
                  src="/food.jpg"
                  alt="missing"
                  width="100%"
                />
          </Col>
          <Col size={3}>
            <H2>Pick food</H2>
            <Link href="/food" passHref>
              <RedButton>ORDER</RedButton>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col size={5}>
            <H3>Find existing order</H3>
            <input
              type="email"
              value={email}
              placeholder="Enter Email:"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ButtonWrapper>
              <Link href="/food" passHref>
                <RedButton>Find Order</RedButton>
              </Link>
            </ButtonWrapper>
          </Col>
          <Col size={5}>
            <TextWrapper><Text>Elisabeth: </Text>
            <Text secondary>Best food I ever had!🥫</Text></TextWrapper>
            <TextWrapper><Text>Wendy:</Text>
            <Text secondary>I loved the variety of dishes 🍲🥗🍼</Text></TextWrapper>
            <TextWrapper><Text>Bjarne:</Text>
            <Text secondary>You can have unlimited beers 🤩</Text></TextWrapper>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  );
}
