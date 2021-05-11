import styled from "styled-components";
import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";
import Link from "next/link";

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

const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <Wrapper>
      <Navbar />
      <Grid>
        <Row>
          <Col size={7}>
            <Text>IMAGES</Text>
          </Col>
          <Col size={3}>
            <Text>Order Flow Box</Text>
            <Link href="/food" passHref><RedButton>ORDER</RedButton></Link>
          </Col>
        </Row>
        <Row>
          <Col size={5}>
            <Text>Find your order</Text>
          </Col>
          <Col size={5}>
            <Text>Content Box</Text>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  );
}
