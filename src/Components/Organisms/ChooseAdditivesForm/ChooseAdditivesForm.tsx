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

const ChooseAdditivesForm = () => {
  return (
    <ChooseAdditivesFormWrapper>
      <ChooseAdditivesHeader>Wybierz dodatki</ChooseAdditivesHeader>

      <ChooseAdditivesFormListWrapper>
        <ChooseAdditivesFormListElement>
          <ChooseAdditivesFormCheckboxAndLabelWrapper>
            <ChooseAdditivesFormCheckbox />
            <ChooseAdditivesFormLabel>Czosnek</ChooseAdditivesFormLabel>
          </ChooseAdditivesFormCheckboxAndLabelWrapper>

          <ChooseAdditivesFormCheckboxAndLabelWrapper>
            <ChooseAdditivesFormCheckbox />
            <ChooseAdditivesFormLabel>Chilli</ChooseAdditivesFormLabel>
          </ChooseAdditivesFormCheckboxAndLabelWrapper>

          <ChooseAdditivesFormCheckboxAndLabelWrapper>
            <ChooseAdditivesFormCheckbox />
            <ChooseAdditivesFormLabel>Pomidor</ChooseAdditivesFormLabel>
          </ChooseAdditivesFormCheckboxAndLabelWrapper>

          <ChooseAdditivesFormCheckboxAndLabelWrapper>
            <ChooseAdditivesFormCheckbox />
            <ChooseAdditivesFormLabel>Salami</ChooseAdditivesFormLabel>
          </ChooseAdditivesFormCheckboxAndLabelWrapper>

          <ChooseAdditivesFormCheckboxAndLabelWrapper>
            <ChooseAdditivesFormCheckbox />
            <ChooseAdditivesFormLabel>Cebula</ChooseAdditivesFormLabel>
          </ChooseAdditivesFormCheckboxAndLabelWrapper>
        </ChooseAdditivesFormListElement>
      </ChooseAdditivesFormListWrapper>
      <ButtonBasicChooseAdditivesWrapper>
        <ButtonBasic>Dodaj</ButtonBasic>
      </ButtonBasicChooseAdditivesWrapper>
      <ChooseAdditivesFormImg
        src={ImgChooseAdditives}
        alt="ImgChooseAdditives"
      />
    </ChooseAdditivesFormWrapper>
  );
};

export default ChooseAdditivesForm;
