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

const Order = () => {
  const [order, setOrder] = useContext(OrderContext);
  const [bookingDate, setBookingDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    console.log(e);
    setOrder((order) => ({
      ...order,
      email,
      bookingDate,
      numOfGuests,
    }));
    e.preventDefault();
    Router.push("/receipt");
  };

  return (
    <Wrapper>
      <Navbar />
      <form onSubmit={(e) => handleSubmit(e)} id="orderForm">
        <Row>
          <Row size={1}>
            <Col>
              <label>Select date and time:</label>
              <DatePicker
                selected={bookingDate}
                onChange={(date) => setBookingDate(date)}
                showTimeSelect
                dateFormat="Pp"
                inline
                required
              />
            </Col>
          </Row>
          <Col size={2}>
            <label>Select Amount of People: </label>
            <input
              type="number"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(parseInt(e.target.value))}
              min={1}
              max={12}
              step={1}
              required
            />
            <br />
            <label>Enter Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <ButtonWrapper>
              <RedButton type="submit" form="orderForm">
                ORDER/UPDATE
              </RedButton>
            </ButtonWrapper>
          </Col>
        </Row>
      </form>
    </Wrapper>
  );
};
export default Order;
