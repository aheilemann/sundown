import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";

import OrderContext from "../contexts/orderContext";

import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";
import { Text, H1 } from "../common/TextElements";

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
  max-height: 12rem;
`;

const FoodWrapper = styled.div<{ size?: number }>`
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
  min-height: 24rem;
`;

const ImageSrc = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

async function fetchData() {
  return await axios
    .get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => ({
      error: false,
      dish: res.data.meals[0],
    }))
    .catch(() => ({
      error: true,
      dish: null,
    }));
}

const Food: React.FC<FoodProps> = ({ dish, error }) => {
  const [newDish, setDish] = useState<Dish>(dish);
  // console.log(newDish.filter(x => x.strIn)); //onst ingredients = newDish.map(dish => dish);
  const ingredients = Object.entries(newDish).filter(
    (x) => x[1] && x[0].includes("Ingredient")
  ).map(x => x[1]);

  const [order, setOrder] = useContext(OrderContext);
  async function handleClick() {
    const data = await fetchData();
    setDish(data.dish);
    // console.log("order", order);
  }

  return (
    <Wrapper>
      <Navbar />
      {error && <div>There was an error.</div>}
      {!error && newDish && (
        <Grid>
          <Row>
            <FoodWrapper size={7}>
              <ImageSrc
                src={newDish.strMealThumb}
                alt={newDish.strMeal}
                width={300}
                height={300}
              />
              <H1>{newDish.strMeal}</H1>
              <Text>Ingredients:</Text>
              {ingredients && ingredients.map(ingredient => (
              <li>{ingredient}</li>
              ))}
              <RedButton onClick={() => handleClick()}>Generate View</RedButton>
            </FoodWrapper>

            <Col size={3}>
              <Text>Order Flow Box</Text>
              <Link href="/drinks" passHref>
                <RedButton
                  onClick={() =>
                    setOrder((order) => ({
                      ...order,
                      dishes: order.dishes.concat(newDish),
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

export default Food;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchData();

  return {
    props: data,
  };
};

type FoodProps = {
  dish: Dish;
  error?: string;
};

type Dish = {
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
};

type Drink = {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
};
