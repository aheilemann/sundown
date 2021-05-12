import styled from "styled-components";
import Router from "next/router";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getDay from "date-fns/getDay";
import { registerLocale } from "react-datepicker";
import da from "date-fns/locale/da";
registerLocale("da", da);

import OrderContext from "../contexts/orderContext";

import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";

import { Container } from "../common/Layout";

const OrderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  width: 800px;
  max-width: 800px;
  margin-top: 3rem;
`;

const Row = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Col = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  flex: ${(props) => props.size};
`;

const ButtonWrapper = styled.div`
  width: 200px;
`;

const Order = () => {
  const [order, setOrder] = useContext(OrderContext);
  const [bookingDate, setBookingDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [email, setEmail] = useState("");

  const isWeekday = (date) => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

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
    <Container>
      <Navbar />
      <form onSubmit={(e) => handleSubmit(e)} id="orderForm">
        <OrderWrapper>
          <Row size={1}>
            <Col>
              <label>Select date and time:</label>
              <DatePicker
                selected={bookingDate}
                locale="da"
                onChange={(date: Date) => setBookingDate(date)}
                showTimeSelect
                dateFormat="Pp"
                inline
                required
                filterDate={isWeekday}
                filterTime={filterPassedTime}
                minTime={setHours(setMinutes(new Date(), 0), 16)}
                maxTime={setHours(setMinutes(new Date(), 0), 23)}
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
              max={10}
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
                ORDER
              </RedButton>
            </ButtonWrapper>
          </Col>
        </OrderWrapper>
      </form>
    </Container>
  );
};
export default Order;
