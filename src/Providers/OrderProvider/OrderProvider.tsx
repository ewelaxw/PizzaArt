import React, { createContext, PropsWithChildren, useState } from "react";
import { Ingredient, Pizza, PizzaSize } from "../../Types/types";

export const OrderContext = createContext({
  handleSetPizza: (pizzaName: string, pizzas: Pizza[]) => {},
  handleSetIngredients: (ids: string[], ingredients: Ingredient[]) => {},
  handleSetSize: (size: string, sizes: PizzaSize[]) => {},
  pizzaName: undefined as Pizza | undefined,
  size: undefined as PizzaSize | undefined,
  additives: [] as Ingredient[],
});

const OrderProvider = (props: PropsWithChildren) => {
  const [pizzaName, setPizza] = useState<Pizza | undefined>(undefined);
  const [additives, setAdditives] = useState<Ingredient[]>([]);
  const [size, setSize] = useState<PizzaSize | undefined>(undefined);

  const handleSetPizza = (pizzaName: string, pizzas: Pizza[]) => {
    const pizza = pizzas.find((pizza) => {
      return pizza.id === pizzaName;
    });
    if (pizza) {
      setPizza(pizza!);
    }
  };

  const handleSetSize = (size: string, sizes: PizzaSize[]) => {
    const chosenSize = sizes.find((s) => {
      return size === s.value;
    });
    setSize(chosenSize);
  };
  const handleSetIngredients = (ids: string[], ingredients: Ingredient[]) => {
    const results: Ingredient[] = [];
    ids.forEach((id) => {
      const filteredIngredients = ingredients.filter((ingredient) => {
        return ingredient.id === id;
      });
      results.push(...filteredIngredients);
    });
    setAdditives(results);
  };
  const context = {
    pizzaName,
    size,
    additives,
    handleSetPizza,
    handleSetIngredients,
    handleSetSize,
  };

  return (
    <OrderContext.Provider value={context}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
