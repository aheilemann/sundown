import styled from "styled-components";
import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";
import Link from "next/link";
import { useState } from "react";
import { Text, H2, H3 } from "../common/TextElements";
import { Container, Grid, Col, Row } from "../common/Layout";

const TextWrapper = styled.div`
  display: flex;
  align-items: baseline;
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
    <Container>
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
              disabled
            />
            <ButtonWrapper>
              <Link href="/food" passHref>
                <RedButton disabled>Find Order</RedButton>
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
    </Container>
  );
}
