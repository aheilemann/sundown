import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GetServerSideProps } from "next";

import OrderContext from "../contexts/orderContext";

import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";
import { Text, H1, H2, H3 } from "../common/TextElements";
import { Container, Grid, Col, Row } from "../common/Layout";

const FoodWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  justify-content: space-between;
  margin: 0.5rem;
  padding: 1rem;
  color: inherit;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  flex: ${(props) => props.size};
  min-height: 24rem;
`;

const ImageFigure = styled.figure`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
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

type FoodProps = {
  dish: Dish;
  error?: string;
};

const Food: React.FC<FoodProps> = ({ dish, error }) => {
  const [newDish, setDish] = useState<Dish>(dish);
  const ingredients = Object.entries(newDish)
    .filter((x) => x[1] && x[0].includes("Ingredient"))
    .map((x) => x[1]);

  const [order, setOrder] = useContext(OrderContext);
  
  async function handleClick() {
    const data = await fetchData();
    setDish(data.dish);
  }

  return (
    <Container>
      <Navbar />
      {error && <div>There was an error.</div>}
      {!error && newDish && (
        <Grid>
          <Row>
            <FoodWrapper size={7}>
                <ImageFigure>
                <ImageSrc
                  src={newDish.strMealThumb}
                  alt="missing"
                  width={300}
                  height={300}
                />
                <figcaption>{newDish.strMeal} is a {newDish.strArea} {newDish.strCategory}</figcaption>
              </ImageFigure>
              
              <H2>{newDish.strMeal}</H2>
              <H3>Ingredients:</H3>
              {ingredients &&
                ingredients.map((ingredient) => <li>{ingredient}</li>)}
              <RedButton onClick={() => handleClick()}>Find another dish!</RedButton>
            </FoodWrapper>

            <Col size={3}>
              <H2>Pick drinks</H2>
              <Link href="/drinks" passHref>
                <RedButton
                  onClick={() =>
                    setOrder((order: Order) => ({
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
    </Container>
  );
};

export default Food;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetchData();

  return {
    props: data,
  };
};
