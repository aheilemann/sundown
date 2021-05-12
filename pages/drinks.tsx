import styled from "styled-components";
import Link from "next/link";
import Image from 'next/image'
import React, { useContext, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

import OrderContext from "../contexts/orderContext";

import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";
import { Text, H3 } from "../common/TextElements";

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
  flex-flow: row wrap;
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
  max-height: 12rem;
`;

const DrinksWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: row wrap;
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
  min-height: 24rem;
`;

const DrinkWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 0.5rem;
  text-align: center;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  flex: ${(props) => props.size};
  width: 45%;
  min-width: 40%;
  max-height: 200px;
  overflow:hidden;
`;

const ImageSrc = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

async function fetchData (){
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
  };

const Drinks: React.FC<DrinksProps> = ({ drinks, error }) => {
  const selectedDrinks: Drink[] = [];
  const [order, setOrder] = useContext(OrderContext);

  return (
    <Wrapper>
      <Navbar />
      {error && <div>There was an error.</div>}
      {!error && drinks && (
        <Grid>
          <Row>
          <DrinksWrapper size={7}>
          {drinks.map(drink => (
            <DrinkWrapper onClick={() => !selectedDrinks.includes(drink) && selectedDrinks.push(drink)}>
              <ImageSrc  src={drink.image_url} alt={drink.tagline} height={"50%"} width={"auto"}  />
              <H3>{drink.name}</H3>
              <Text secondary>{drink.tagline}</Text>
              </DrinkWrapper>
          ))}
            </DrinksWrapper>
            <Col size={3}>
              <Text>Order Flow Box</Text>
              <Link href="/order" passHref>
                <RedButton onClick={() => 
                  setOrder((order) => ({ ...order, drinks: order.drinks.concat(selectedDrinks) }))
                }>NEXT</RedButton>
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

type DrinksProps = {
  drinks: Drink[];
  error?: string;
};

type Drink = {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
};
