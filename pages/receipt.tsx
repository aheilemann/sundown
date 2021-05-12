import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import OrderContext from "../contexts/orderContext";

import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";

import "react-datepicker/dist/react-datepicker.css";

import { Text, H1 } from "../common/TextElements";

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

// const H1 = styled.div`
//   font-size: 3rem;
//   color: ${({ theme }) => theme.colors.primary};
// `;

function export2txt(order) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(order, null, 2)], {
      type: "text/plain",
    })
  );
  a.setAttribute("download", "data.txt");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  return true;
}

const Receipt = () => {
  const [order, setOrder] = useContext(OrderContext);
  console.log(order);

  return (
    <Wrapper>
      <Navbar />
      {order && (
        <div>
          <H1>Receipt</H1>
          {!!order.dishes.length && <Text>Dishes</Text>}
          {order.dishes.map((dish, idx) => (
            <Text secondary key={idx}>
              {dish.strMeal}
            </Text>
          ))}
          {!!order.drinks.length && <Text>Drinks</Text>}
          {order.drinks.map((drink, idx) => (
            <Text secondary key={idx}>
              {drink.name}
            </Text>
          ))}
          <Text>Booking details</Text>
          <Text secondary>{order.bookingDate.toLocaleString("da-DK")}</Text>
          <Text>Number of guests: </Text>
          <Text secondary>{order.numOfGuests}</Text>
          <Text secondary>{order.email}</Text>
          <RedButton onClick={() => export2txt(order)}>Download</RedButton>
        </div>
      )}
    </Wrapper>
  );
};
export default Receipt;
