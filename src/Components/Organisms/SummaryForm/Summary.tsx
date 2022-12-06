import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../../Providers/OrderProvider/OrderProvider";
import { UserContext } from "../../../Providers/UserProvider";
import { routes } from "../../../Routes/Routes";
import { Ingredient, Pizza } from "../../../Types/types";
import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import {
  ButtonBasicSummaryFormWrapper,
  SummaryAddressInfoSpan,
  SummaryAddressInfoWrapper,
  SummaryBoldSpan,
  SummaryHeader,
  SummaryInfo,
  SummaryListElement,
  SummaryListWrapper,
  SummaryPrice,
  SummarySpan,
  SummaryWrapper,
} from "./Summary.styles";

const Summary = () => {
  const { chooseType, preparation } = routes;
  const { pizzaName, size, additives } = useContext(OrderContext);
  const { user } = useContext(UserContext);
  const getPizzaPrice = (size: string, pizza: Pizza) => {
    if (size === "Small") {
      return pizza.prices.small;
    }
    if (size === "Large") {
      return pizza.prices.large;
    }
    return pizza.prices.small;
  };

  const renderAdditives = (additives: Ingredient[]) => {
    return additives.map((additive) => {
      return (
        <SummaryListElement
          key={additive.id}
        >{`${additive.name} ${additive.price} zł`}</SummaryListElement>
      );
    });
  };

  const summaryPrice = (
    pizza: Pizza,
    additives: Ingredient[],
    size: string
  ) => {
    let summary = getPizzaPrice(size, pizza);
    additives.forEach((additive) => {
      summary += additive.price;
    });
    return summary;
  };
  return (
    <SummaryWrapper>
      <SummaryHeader>Podsumowanie</SummaryHeader>

      <SummaryInfo>
        <SummaryBoldSpan>Pizza:</SummaryBoldSpan>
        <SummarySpan>{` ${pizzaName?.name}`}</SummarySpan>
        <SummaryBoldSpan>Rozmiar:</SummaryBoldSpan>
        <SummarySpan>{` ${size?.label}`}</SummarySpan>
        <SummaryBoldSpan>Cena:</SummaryBoldSpan>
        <SummarySpan>{` ${getPizzaPrice(
          size?.value!,
          pizzaName!
        )} zł`}</SummarySpan>
      </SummaryInfo>

      <SummaryListWrapper>
        <SummaryListElement>
          <SummaryBoldSpan>Dodatki:</SummaryBoldSpan>
        </SummaryListElement>
        {renderAdditives(additives)}
      </SummaryListWrapper>

      <SummaryPrice>
        <SummaryBoldSpan>Cena:</SummaryBoldSpan>
        {`${summaryPrice(pizzaName!, additives, size?.value!)} zł`}
      </SummaryPrice>

      <SummaryAddressInfoWrapper>
        <SummaryAddressInfoSpan>
          <SummaryBoldSpan>Adres dostawy:</SummaryBoldSpan>
        </SummaryAddressInfoSpan>
        <SummaryAddressInfoSpan>{`Osoba: ${user?.name}`}</SummaryAddressInfoSpan>
        <SummaryAddressInfoSpan>{`Miasto: ${user?.city}`}</SummaryAddressInfoSpan>
        <SummaryAddressInfoSpan>{`Ulica i nr: ${user?.street}`}</SummaryAddressInfoSpan>
      </SummaryAddressInfoWrapper>

      <ButtonBasicSummaryFormWrapper>
        <ButtonBasic as={Link} to={chooseType}>
          Anuluj
        </ButtonBasic>
        <ButtonBasic as={Link} to={preparation}>
          Zaakceptuj
        </ButtonBasic>
      </ButtonBasicSummaryFormWrapper>
    </SummaryWrapper>
  );
};
export default Summary;
