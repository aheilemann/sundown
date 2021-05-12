import styled from "styled-components";
import Link from "next/link";
import React, { useContext } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

import OrderContext from "../contexts/orderContext";

import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";
import { Text, H2, H3 } from "../common/TextElements";
import { Grid, Col, Row } from "../common/Layout";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

const DrinksWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: row wrap;
  align-items: left;
  justify-content: space-between;
  margin: 0.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  flex: ${(props) => props.size};
  min-height: 24rem;
`;

const ItemWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  flex: ${(props) => props.size};
  width: 45%;
  min-width: 45%;
  max-height: 200px;
  overflow: hidden;
`;

const ImageSrc = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

async function fetchData() {
  return await axios
    .get<Drink[]>("https://api.punkapi.com/v2/beers")
    .then((res) => ({
      error: false,
      drinks: res.data,
    }))
    .catch(() => ({
      error: true,
      drinks: null,
    }));
}

type DrinksProps = {
  drinks: Drink[];
  error?: string;
};

const Drinks: React.FC<DrinksProps> = ({ drinks, error }) => {
  const selectedDrinks: Drink[] = [];
  const [order, setOrder] = useContext(OrderContext);

  function handleClick(drink: Drink) {
    if (selectedDrinks.includes(drink)) {
      const index = selectedDrinks.indexOf(drink);
      selectedDrinks.splice(index, 1);
      return;
    }
    !selectedDrinks.includes(drink) && selectedDrinks.push(drink);
    return;
  }

  return (
    <Wrapper>
      <Navbar />
      {error && <div>There was an error.</div>}
      {!error && drinks && (
        <Grid>
          <Row>
            <DrinksWrapper size={7}>
              {drinks.map((drink) => {
                return (
                  <ItemWrapper>
                    <ImageSrc
                      src={drink.image_url}
                      alt={drink.tagline}
                      height={"50%"}
                      width={"auto"}
                    />
                    <H3>
                      {drink.name}
                      <input
                        type="checkbox"
                        id={drink.name}
                        onClick={() => handleClick(drink)}
                      />
                    </H3>

                    <Text secondary>{drink.tagline}</Text>
                  </ItemWrapper>
                );
              })}
            </DrinksWrapper>
            <Col size={3}>
              <H2>Pick date</H2>
              <Link href="/order" passHref>
                <RedButton
                  onClick={() =>
                    setOrder((order: Order) => ({
                      ...order,
                      drinks: order.drinks.concat(selectedDrinks),
                    }))
                  }
                >
                  NEXT
                </RedButton>
              </Link>
            </Col>
          </Row>
        </Grid>
      )}
    </Wrapper>
  );
};
export default Drinks;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchData();

  return {
    props: data,
  };
};
