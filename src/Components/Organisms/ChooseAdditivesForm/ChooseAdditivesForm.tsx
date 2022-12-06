import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import {
  ButtonBasicChooseAdditivesWrapper,
  ChooseAdditivesFormCheckbox,
  ChooseAdditivesFormCheckboxAndLabelWrapper,
  ChooseAdditivesFormImg,
  ChooseAdditivesFormLabel,
  ChooseAdditivesFormListElement,
  ChooseAdditivesFormListWrapper,
  ChooseAdditivesFormWrapper,
  ChooseAdditivesHeader,
} from "./ChooseAdditives.styles";
import ImgChooseAdditives from "../../../Assets/Images/Additives.svg";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../../Providers/OrderProvider/OrderProvider";
import axios from "axios";
import { Ingredient } from "../../../Types/types";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../Routes/Routes";

type MyFormValues = {
  additives: string[];
};
const ChooseAdditivesForm = () => {
  const { chooseSize } = routes;
  const initialValues: MyFormValues = { additives: [] };
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const { handleSetIngredients } = useContext(OrderContext);
  const navigate = useNavigate();
  const handleSubmit = (values: MyFormValues) => {
    handleSetIngredients(values.additives, ingredients);
    navigate(chooseSize);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/Additives")
      .then((response: any) => {
        const ingredients = response.data as Ingredient[];
        setIngredients(ingredients);
      })
      .catch(() => console.log("Nie udało się zalogować"));
  });

  const renderIngredients = (ingredients: Ingredient[]) => {
    return ingredients.map((ingredient) => {
      return (
        <ChooseAdditivesFormListElement key={ingredient.id}>
          <ChooseAdditivesFormCheckboxAndLabelWrapper>
            <ChooseAdditivesFormCheckbox
              name={"additives"}
              type={"checkbox"}
              value={ingredient.id}
            />
            <ChooseAdditivesFormLabel>
              {`${ingredient.name} Cena: ${ingredient.price} zł`}
            </ChooseAdditivesFormLabel>
          </ChooseAdditivesFormCheckboxAndLabelWrapper>
        </ChooseAdditivesFormListElement>
      );
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ChooseAdditivesFormWrapper>
        <ChooseAdditivesHeader>Wybierz dodatki</ChooseAdditivesHeader>

        <ChooseAdditivesFormListWrapper>
          {renderIngredients(ingredients)}
        </ChooseAdditivesFormListWrapper>

        <ButtonBasicChooseAdditivesWrapper>
          <ButtonBasic type={"submit"}>Dalej</ButtonBasic>
        </ButtonBasicChooseAdditivesWrapper>
        <ChooseAdditivesFormImg
          src={ImgChooseAdditives}
          alt="ImgChooseAdditives"
        />
      </ChooseAdditivesFormWrapper>
    </Formik>
  );
};

export default ChooseAdditivesForm;
