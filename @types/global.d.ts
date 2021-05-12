type Order = {
  email: string;
  numOfGuests: number;
  bookingDate: Date;
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
