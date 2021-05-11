import React, { useState } from "react";
const OrderContext = React.createContext([{}, () => {}]);
export const OrderProvider = (props) => {
  const [order, setOrder] = useState<Order>({
    email: "",
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

type Order = {
  email: string;
  dishes: Dish[];
  drinks: Drink[];
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
