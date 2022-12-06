export type AuthenticatedUser = {
  name: string;
  city: string;
  street: string;
};

export type Pizza = {
  id: string;
  name: string;
  ingredients: string[];
  spiciness: number;
  isVege: boolean;
  prices: {
    small: number;
    large: number;
  };
};

export type Ingredient = {
  id: string;
  name: string;
  price: number;
};

export type PizzaSize = {
  label: string;
  value: string;
};
