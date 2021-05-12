import React, { useState } from "react";

const OrderContext = React.createContext([{}, () => {}]);

export const OrderProvider = (props) => {
  const [order, setOrder] = useState<Order>({
    email: "",
    numOfGuests: 1,
    bookingDate: new Date(),
    dishes: [],
    drinks: [],
  });

  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {props.children}
    </OrderContext.Provider>
  );
};

export const OrderConsumer = OrderContext.Consumer;

export default OrderContext;
