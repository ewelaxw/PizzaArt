import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import {
  ButtonBasicChooseSizeWrapper,
  ChooseSizeFormImg,
  ChooseSizeFormLabel,
  ChooseSizeFormListElement,
  ChooseSizeFormListWrapper,
  ChooseSizeFormRadioButton,
  ChooseSizeFormRadioButtonAndLabelWrapper,
  ChooseSizeFormWrapper,
  ChooseSizeHeader,
} from "./ChooseSizeForm.styles";
import ImgChooseSize from "../../../Assets/Images/SmallAndBig.svg";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { PizzaSize } from "../../../Types/types";
import { OrderContext } from "../../../Providers/OrderProvider/OrderProvider";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../Routes/Routes";
import { SelectError } from "../../Atoms/FormError/FormError";

type MyFormValues = {
  size: string;
};

const ChooseSizeForm = () => {
  const { summary } = routes;
  const [sizes, setSizes] = useState<PizzaSize[]>([]);
  const initialValues: MyFormValues = { size: "" };
  const { handleSetSize } = useContext(OrderContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (values: MyFormValues) => {
    setError("");
    if (values.size) {
      handleSetSize(values.size, sizes);
      navigate(summary);
    } else {
      setError("Proszę wybrać rozmiar");
    }
  };

  useEffect(() => {
    setError("");
    axios
      .get("http://localhost:8000/Sizes")
      .then((response: any) => {
        const sizes = response.data as PizzaSize[];
        setSizes(sizes);
      })
      .catch(() => setError("Nie udało się zalogować"));
  }, []);

  const renderPizzaSizes = (pizzaSizes: PizzaSize[]) => {
    return pizzaSizes.map((pizzaSize) => {
      return (
        <ChooseSizeFormListElement key={pizzaSize.value}>
          <ChooseSizeFormRadioButtonAndLabelWrapper>
            <ChooseSizeFormRadioButton
              type={"radio"}
              name={"size"}
              value={pizzaSize.value}
            />
            <ChooseSizeFormLabel>{pizzaSize.label}</ChooseSizeFormLabel>
          </ChooseSizeFormRadioButtonAndLabelWrapper>
        </ChooseSizeFormListElement>
      );
    });
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <ChooseSizeFormWrapper>
        <ChooseSizeHeader>Wybierz rozmiar pizzy</ChooseSizeHeader>

        <ChooseSizeFormListWrapper>
          {renderPizzaSizes(sizes)}
        </ChooseSizeFormListWrapper>
        {error ? <SelectError>{error}</SelectError> : null}
        <ButtonBasicChooseSizeWrapper>
          <ButtonBasic type={"submit"}>Dalej</ButtonBasic>
        </ButtonBasicChooseSizeWrapper>
        <ChooseSizeFormImg src={ImgChooseSize} alt="ImgChooseSize" />
      </ChooseSizeFormWrapper>
    </Formik>
  );
};

export default ChooseSizeForm;
