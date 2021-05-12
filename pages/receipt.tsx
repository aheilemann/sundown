import React, { useContext } from "react";
import OrderContext from "../contexts/orderContext";

import Navbar from "../components/Navbar";
import RedButton from "../components/RedButton";

import { Text, H1 } from "../common/TextElements";
import { Container } from "../common/Layout";

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
    <Container>
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
          <Text>Contact details: </Text>
          <Text secondary>{order.email}</Text>
          <RedButton onClick={() => export2txt(order)}>Download</RedButton>
        </div>
      )}
    </Container>
  );
};
export default Receipt;
