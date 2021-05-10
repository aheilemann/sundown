import Head from "next/head";
import styled from "styled-components";
import Navbar from "../components/navbar";

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
  max-width: 800px;
  margin-top: 3rem;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  flex: ${(props) => props.size};
  min-height: 12rem;
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Sundown Boulevard</title>
        <meta name="description" content="Great food - great view" />
      </Head>
      <Navbar />
      <Grid>
        <Row>
          <Col size={7}>IMAGES</Col>
          <Col size={3}>Order</Col>
        </Row>
        <Row>
          <Col size={5}>Find your order</Col>
          <Col size={5}>Content Box</Col>
        </Row>
      </Grid>
    </Wrapper>
  );
}
