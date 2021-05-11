import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import OrderContext from "../contexts/orderContext";

import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";

import "react-datepicker/dist/react-datepicker.css";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;

const Row = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  width: 800px;
  max-width: 800px;
  margin-top: 3rem;
`;

const Col = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  flex: ${(props) => props.size};
`;
const ButtonWrapper = styled.div`
  width: 200px;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const Receipt = () => {
  const [order, setOrder] = useContext(OrderContext);
  console.log(order);

  return (
    <Wrapper>
      <Navbar />
      {order && (
        <div>
          <Text>Receipt</Text>
          {order.dishes.map((dish, idx) => (
            <div key={idx}>{dish.strMeal}</div>
          ))}
          {order.drinks.map((drink, idx) => (
            <div key={idx}>{drink.name}</div>
          ))}
          <p>{order.bookingDate.toLocaleString("da-DK")}</p>
          <p>{order.numOfGuests}</p>
          <p>{order.email}</p>
        </div>
      )}
    </Wrapper>
  );
};
export default Receipt;
