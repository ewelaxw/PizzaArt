import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import {
  ButtonBasicChooseTypePizzaWrapper,
  ChooseTypePizzaFormHeader,
  ChooseTypePizzaFormImg,
  ChooseTypePizzaFormLabel,
  ChooseTypePizzaFormListElement,
  ChooseTypePizzaFormListWrapper,
  ChooseTypePizzaFormRadioButton,
  ChooseTypePizzaFormRadioButtonAndLabelWrapper,
  ChooseTypePizzaFormWrapper,
} from "./ChooseTypePizzaForm.styles";
import ChooseTypePizzaImg from "../../../Assets/Images/TypeOfPizza.svg";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Pizza } from "../../../Types/types";
import { Formik } from "formik";
import { OrderContext } from "../../../Providers/OrderProvider/OrderProvider";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../Routes/Routes";
import { SelectError } from "../../Atoms/FormError/FormError";

type MyFormValues = {
  pizzaName: string;
};
const ChooseTypePizzaForm = () => {
  const { chooseAdditives } = routes;
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const { handleSetPizza } = useContext(OrderContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
    axios
      .get("http://localhost:8000/PizzaTypes")

      .then((response: any) => {
        const pizzas = response.data as Pizza[];

        if (pizzas) {
          setPizzas(pizzas);
        }
      })
      .catch(() => setError("Błąd ładowania"));
  }, []);

  const initialValues: MyFormValues = {
    pizzaName: "",
  };

  const handelSubmit = (values: MyFormValues) => {
    setError("");
    if (values.pizzaName) {
      handleSetPizza(values.pizzaName, pizzas);
      navigate(chooseAdditives);
    } else {
      setError("Proszę wybrać pizzę");
    }
  };
  const getIngredients = (ingredients: string[]) => {
    let listOfIngredients = "";
    ingredients.forEach((ingredient, index) => {
      listOfIngredients += `${ingredient}`;
      if (index < ingredients.length - 1) {
        listOfIngredients += `, `;
      }
    });
    return listOfIngredients;
  };

  const setSpicyLevel = (level: number) => {
    let spiciness = "";
    if (!level) {
      return "🌶 ";
    }
    for (let i = 0; i < level; i++) {
      spiciness += "🌶️ ";
    }
    return spiciness;
  };

  const convertToList = (pizzas: Pizza[]) => {
    return pizzas.map((pizza) => {
      const { id, name, ingredients, isVege, spiciness /*prices*/ } = pizza;
      return {
        label: `🍕 ${name} ${setSpicyLevel(spiciness)} (${getIngredients(
          ingredients
        )}) Vegetarian: ${isVege ? "✔️" : "❌"}`,
        value: id,
      };
    });
  };

  const renderPizzas = (pizzas: Pizza[]) => {
    return convertToList(pizzas).map((pizza, index) => {
      return (
        <ChooseTypePizzaFormListElement key={index}>
          <ChooseTypePizzaFormRadioButtonAndLabelWrapper>
            <ChooseTypePizzaFormRadioButton
              type={"radio"}
              name={"pizzaName"}
              value={pizza.value}
            />
            <ChooseTypePizzaFormLabel>
              {`${pizza.label}`}
            </ChooseTypePizzaFormLabel>
          </ChooseTypePizzaFormRadioButtonAndLabelWrapper>
        </ChooseTypePizzaFormListElement>
      );
    });
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handelSubmit}>
      <ChooseTypePizzaFormWrapper>
        <ChooseTypePizzaFormHeader>
          Wybierz rodzaj pizzy
        </ChooseTypePizzaFormHeader>

        <ChooseTypePizzaFormListWrapper>
          {renderPizzas(pizzas)}
        </ChooseTypePizzaFormListWrapper>
        {error ? <SelectError>{error}</SelectError> : null}
        <ButtonBasicChooseTypePizzaWrapper>
          <ButtonBasic type={"submit"}>Dalej</ButtonBasic>
        </ButtonBasicChooseTypePizzaWrapper>

        <ChooseTypePizzaFormImg
          src={ChooseTypePizzaImg}
          alt="ChooseTypePizzaImg "
        />
      </ChooseTypePizzaFormWrapper>
    </Formik>
  );
};

export default ChooseTypePizzaForm;
