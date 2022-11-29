import { ButtonBasic } from "../../Atoms/Buttons/Buttons";
import {
  ButtonBasicChooseTypePizzaWrapper,
  ChooseTypePizzaFormCheckbox,
  ChooseTypePizzaFormCheckboxAndLabelWrapper,
  ChooseTypePizzaFormHeader,
  ChooseTypePizzaFormImg,
  ChooseTypePizzaFormLabel,
  ChooseTypePizzaFormListElement,
  ChooseTypePizzaFormListWrapper,
  ChooseTypePizzaFormWrapper,
} from "./ChooseTypePizzaForm.styles";
import ChooseTypePizzaImg from "../../../Assets/Images/TypeOfPizza.svg";

const ChooseTypePizzaForm = () => {
  return (
    <ChooseTypePizzaFormWrapper>
      <ChooseTypePizzaFormHeader>
        Wybierz rodzaj pizzy
      </ChooseTypePizzaFormHeader>

      <ChooseTypePizzaFormListWrapper>
        <ChooseTypePizzaFormListElement>
          <ChooseTypePizzaFormCheckboxAndLabelWrapper>
            <ChooseTypePizzaFormCheckbox />
            <ChooseTypePizzaFormLabel>
              Margharita sos pomidorowy, ser, oregano
            </ChooseTypePizzaFormLabel>
          </ChooseTypePizzaFormCheckboxAndLabelWrapper>

          <ChooseTypePizzaFormCheckboxAndLabelWrapper>
            <ChooseTypePizzaFormCheckbox />
            <ChooseTypePizzaFormLabel>
              Pepperoni sos pomidorowy, ser, salami pepperoni, oregano
            </ChooseTypePizzaFormLabel>
          </ChooseTypePizzaFormCheckboxAndLabelWrapper>

          <ChooseTypePizzaFormCheckboxAndLabelWrapper>
            <ChooseTypePizzaFormCheckbox />
            <ChooseTypePizzaFormLabel>
              Mafioso sos pomidorowy, ser, salami, czosnek, papryczki jalapenos,
              sos Chilli Louisiana, oregano
            </ChooseTypePizzaFormLabel>
          </ChooseTypePizzaFormCheckboxAndLabelWrapper>

          <ChooseTypePizzaFormCheckboxAndLabelWrapper>
            <ChooseTypePizzaFormCheckbox />
            <ChooseTypePizzaFormLabel>
              Napoletana sos pomidorowy, ser, salami, oliwki zielone, papryczki
              jalapenos, oregano
            </ChooseTypePizzaFormLabel>
          </ChooseTypePizzaFormCheckboxAndLabelWrapper>
        </ChooseTypePizzaFormListElement>
      </ChooseTypePizzaFormListWrapper>

      <ButtonBasicChooseTypePizzaWrapper>
        <ButtonBasic>Dalej</ButtonBasic>
      </ButtonBasicChooseTypePizzaWrapper>

      <ChooseTypePizzaFormImg
        src={ChooseTypePizzaImg}
        alt="ChooseTypePizzaImg "
      />
    </ChooseTypePizzaFormWrapper>
  );
};

export default ChooseTypePizzaForm;
