import styled from "styled-components";
import Link from "next/link";
import Image from 'next/image'
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";
import { GetServerSideProps } from "next";

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

const Col = styled.div`
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

const DrinksWrapper = styled.div`
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

const Drink = styled.div`
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


const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const ImageSrc = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

async function fetchData (){
  return await axios
    .get("https://api.punkapi.com/v2/beers")
    .then((res) => ({
      error: false,
      drinks: res.data,
    }))
    .catch(() => ({
      error: true,
      drinks: null,
    }));
  };



const Food = ({ drinks, error }) => {
  const selectedDrinks: Drink[] = [];
  console.log("selectedDrinks", selectedDrinks);
  return (
    <Wrapper>
      <Navbar />
      {error && <div>There was an error.</div>}
      {!error && drinks && (
        <Grid>
          <Row>
          <DrinksWrapper size={7}>
          {drinks.map(drink => (
            <Drink onClick={() => !selectedDrinks.includes(drink) && selectedDrinks.push(drink)}>
              <ImageSrc  src={drink.image_url} alt={drink.tagline} height={"50%"} width={"auto"}  />
              <h3>{drink.name}</h3>
              <body>{drink.tagline}</body>
              </Drink>
          ))}
            </DrinksWrapper>
            <Col size={3}>
              <Text>Order Flow Box</Text>
              {/* <Link href="/order" passHref> */}
                <RedButton onClick={() => console.log(selectedDrinks)}>NEXT</RedButton>
              {/* </Link> */}
            </Col>
          </Row>
        </Grid>
      )}
    </Wrapper>
  );
};
export default Food;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchData();

  return {
    props: data,
  };
};

type Drink = {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
};